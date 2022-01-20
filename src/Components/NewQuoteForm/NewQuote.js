import { useState,useEffect } from "react"
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import ContactInformation from "./ContactInformation"
import QuoteSubmitted from "./QuoteSubmitted"
import useFetch from "./useFetch"
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
    const [isPendin, setIsPendin] = useState(false)
    const [err, setErr] = useState(false)
    const [dat, setDat] = useState(null)
    const handleSubmit = (e)=>{
        console.log(shipFrom, shipTo)
        e.preventDefault()
    }
    // console.log(useFetch("Elk Grove Village,IL"))
    // console.log(shipFrom)
    const {data, isPending, error, isLimitUp} = useFetch(shipFrom)
    console.log(make)
    const handleOnChange = (e)=>{
        setShipFrom(e.target.value)
        // console.log(shipFrom)
        // console.log(error)
        setTimeout(() => {  
                if(e.target.value===''){
                    console.log('j')
                    setIsPendin(false)
                    setErr(false)
                    setDat(null)
                }else if(isLimitUp){
                    // console.log('k');
                    setIsPendin(false)
                    setErr(false)
                    setDat(null)
                }
                else if(error&&e.target.value.length<5){
                    console.log('a')
                    setIsPendin(true)
                    setErr(false)
                    setDat(null)
                }else if(error&&e.target.value.length>=5){
                    setErr(true)
                    setDat(null)
                    setIsPendin(false)
                }else{
                    setIsPendin(false)
                    setErr(false)
                    setDat(data)
                }
        }, 0);


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
                            <label htmlFor="zip-from">SHIP FROM:</label>
                            <div className="zip-from">
                                <input type="text" name='zip-from'  placeholder='ZIP code or City' value={shipFrom} onChange={(e)=>handleOnChange(e)} required/>
                                {isPendin&&<p>Searching...</p>}
                                {err&&<p>A zip code you provided was not found.</p>}
                                {data&&<p>{`${dat.city}, ${dat.state}, ${dat.zip_code}`}</p>}
                            </div>
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