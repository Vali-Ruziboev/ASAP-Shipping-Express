import { useState } from "react"
import {BrowserRouter as Router, Route, Switch, useRouteMatch} from 'react-router-dom'
import ContactInformation from "./ContactInformation"
import QuoteSubmitted from "./QuoteSubmitted"
import { motion } from 'framer-motion'
import VehicleInformation from "./VehicleInformation"
import ZipCodes from "./ZipCodes"
const NewQuote = () => {
    const [shipFrom, setShipFrom] = useState('')
    const [shipTo, setShipTo] = useState('')
    const [year, setYear] = useState([''])
    const [make, setMake] = useState([''])
    const [model, setModel] = useState([''])
    const [type, setType] = useState(['Open'])
    const [isRunning, setIsRunning] = useState(['Yes'])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const zipCodes = [shipFrom, shipTo]
    const vehicleInfo = [year, make, model, type, isRunning]
    const handleSubmit = (e)=>{
        console.log(shipFrom, shipTo)
        e.preventDefault()
    }
    const { path } = useRouteMatch()
    console.log(path);
    const updatedPath = (()=>{
        if(path ==='/'){
            return path
        }else{
            return `${path}/`
        }
    })()
    console.log(updatedPath);
    return ( 
        <Router>
            <motion.form
            initial={{x:'100vw'}}
            animate={{x:0, transition:{duration:0.5, type:'spring', stiffness:200}}}
            id='new_quote' onSubmit={(e)=>handleSubmit(e)} className='quote-form'>
                <h1>GET A FREE QUOTE NOW</h1>
                <a href="tel:(929) 419-5297">(929) 419-5297</a>
                <div  className="or">
                    <span className='line'></span>
                    <span>OR</span>
                    <span className='line'></span>
                </div>
                    <Switch>
                        <Route exact path={`${path}`}>
                            <ZipCodes shipFrom={shipFrom} setShipFrom={setShipFrom} shipTo={shipTo} setShipTo={setShipTo} />
                        </Route>
                        <Route path={`${updatedPath}vehicle_information`}>
                            <VehicleInformation validate={zipCodes} year = {year} setYear = {setYear} make={make} setMake={setMake} model={model} setModel={setModel} type={type}  setType ={setType} isRunning={isRunning}  setIsRunning = {setIsRunning}/>
                        </Route>
                        <Route path={`${updatedPath}contact_information`}>
                            <ContactInformation validate={vehicleInfo} zipsValid={zipCodes} firstName={firstName} setFirstName = {setFirstName} lastName={lastName} setLastName={setLastName} number={number} setNumber = {setNumber} email ={email} setEmail = {setEmail} date = {date} setDate={setDate} />
                        </Route>
                        <Route path={`${updatedPath}quote_submitted`}>
                            <QuoteSubmitted />
                        </Route>
                    </Switch>
            </motion.form>
        </Router>
    );
}

export default NewQuote;