import { useState } from "react"
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ContactInformation from "./ContactInformation"
import QuoteSubmitted from "./QuoteSubmitted"

import VehicleInformation from "./VehicleInformation"
import ZipCodes from "./ZipCodes"
const NewQuote = () => {
    const [shipFrom, setShipFrom] = useState('')
    const [shipTo, setShipTo] = useState('')
    const [year, setYear] = useState({0:''})
    const [make, setMake] = useState({0:''})
    const [model, setModel] = useState({0:''})
    const [type, setType] = useState({0:''})
    const [isRunning, setIsRunning] = useState({0:''})
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
            <a href="tel:(929) 419-5297">(929) 419-5297</a>
            <div  className="or">
                <span className='left-hand-of-or'></span>
                <span>OR</span>
                <span className='right-hand-of-or'></span>
            </div>
            <Router>
                <Switch>
                    <Route exact path='/'>
                            <ZipCodes shipFrom={shipFrom} setShipFrom={setShipFrom} shipTo={shipTo} setShipTo={setShipTo} />
                    </Route>
                    <Route path='/vehicle_information'>
                        <VehicleInformation year = {year} setYear = {setYear} make={make} setMake={setMake} model={model} setModel={setModel} type={type}  setType ={setType} isRunning={isRunning}  setIsRunning = {setIsRunning}/>
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