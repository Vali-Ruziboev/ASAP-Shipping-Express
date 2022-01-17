import { useState } from "react"
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import ContactInformation from "./ContactInformation"
import QuoteSubmitted from "./QuoteSubmitted"
import VehicleInformation from "./VehicleInformation"
const NewQuote = () => {
    const [shipFrom, setShipFrom] = useState('')
    const [shipTo, setShipTo] = useState('')
    const [year, setYear] = useState('')
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
    const [type, setType] = useState('')
    const [isRunning, setIsRunning] = useState('')
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const handleSubmit = (e)=>{
        console.log(shipFrom, shipTo)
        e.preventDefault()
    }
    return ( 
        <form onSubmit={(e)=>handleSubmit(e)} className='quote-form'>
            <h1>GET A FREE QUOTE NOW</h1>
            <p>(929) 419-5297</p>
            <div  className="or">
                <span className='left-hand-of-or'></span>
                <span>OR</span>
                <span className='right-hand-of-or'></span>
            </div>
            <Router>
                <Switch>
                    <Route exact path='/'>
                            <label htmlFor="zip-from">SHIP FROM:</label>
                            <input type="text" name='zip-from' placeholder='ZIP code or City' value={shipFrom} onChange={(e)=>setShipFrom(e.target.value)} required/>
                            <label htmlFor="zip-to">SHIP TO:</label>
                            <input type="text" name='zip-to' placeholder='ZIP code or City' value={shipTo} onChange={(e)=>setShipTo(e.target.value)} required />
                            <Link to='/vehicle_information'><button>NEXT</button></Link>
                    </Route>
                    <Route path='/vehicle_information'>
                        <VehicleInformation year = {year} setYear = {setYear} make={make} setMake={setMake} model={model} setModel={setModel}  setType ={setType}  setIsRunning = {setIsRunning}/>
                    </Route>
                    <Route path='/contact_information'>
                        <ContactInformation name={name} setName = {setName} number={number} setNumber = {setNumber} email ={email} setEmail = {setEmail} date = {date} setDate={setDate} />
                    </Route>
                    <Route path="/quote_submitted">
                        <QuoteSubmitted />
                    </Route>
                </Switch>
            </Router>
        </form>
    );
}

export default NewQuote;