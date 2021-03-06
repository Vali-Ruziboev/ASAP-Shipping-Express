import { useState } from "react"
import {BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom'
import ContactInformation from "./ContactInformation"
import QuoteSubmitted from "./QuoteSubmitted"
import { motion } from 'framer-motion'
import VehicleInformation from "./VehicleInformation";
import ZipCodes from "./ZipCodes"
import emailjs, {init} from '@emailjs/browser';
init("user_1Ig2WajVAhHklQ3Nutlw2")

const NewQuote = ({ url }) => {
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

    const form = {
        firstName: firstName,
        lastName:lastName,
        email:email,
        number:number,
        from:shipFrom,
        to:shipTo,
        year:[...year],
        make:[...make],
        model:[...model],
        type:[...type],
        runs:[...isRunning],
        date:date,
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        emailjs.send('send_email_to_myself', 'template_q1nme44', form)
            .then(function(response) {
                setShipFrom('')
                setShipTo('')
                setYear([''])
                setMake([''])
                setModel([''])
                setType(['Open'])
                setIsRunning(['Yes'])
                setFirstName('')
                setLastName('')
                setNumber('')
                setEmail('')
                setDate('')
            }, function(error) {
                console.log('FAILED...', error);
            });
    }
    const history = useHistory()
    const updatedPath = (()=>{
        if(url ==='/'){
            return url
        }else{
            return `${url}/`
        }
    })()
    const handleNotFound= ()=>{
        history.push('/NotFound')
    }
    return ( 
        <Router>
            <motion.form
            initial={{x:'100vw'}}
            animate={{x:0, transition:{delay:0.5,duration:0.5, type:'spring', stiffness:200}}}
            id='new_quote' className='quote-form'>
                <h1>GET A FREE QUOTE NOW</h1>
                <a href="tel:(555) 555-5555">(555) 555-5555</a>
                <div  className="or">
                    <span className='line'></span>
                    <span>OR</span>
                    <span className='line'></span>
                </div>
                    <Switch>
                        <Route exact path={`${url}`}>
                            <ZipCodes shipFrom={shipFrom} setShipFrom={setShipFrom} shipTo={shipTo} setShipTo={setShipTo} />
                        </Route>
                        <Route path={`${updatedPath}vehicle_information`}>
                            <VehicleInformation validate={zipCodes} year = {year} setYear = {setYear} make={make} setMake={setMake} model={model} setModel={setModel} type={type}  setType ={setType} isRunning={isRunning}  setIsRunning = {setIsRunning}/>
                        </Route>
                        <Route path={`${updatedPath}contact_information`}>
                            <ContactInformation validate={vehicleInfo} zipsValid={zipCodes} firstName={firstName} setFirstName = {setFirstName} lastName={lastName} setLastName={setLastName} number={number} setNumber = {setNumber} email ={email} setEmail = {setEmail} date = {date} setDate={setDate} submit={handleSubmit}/>
                        </Route>
                        <Route path={`${updatedPath}quote_submitted`}>
                            <QuoteSubmitted />
                        </Route>
                        <Route path='/*'>
                            {()=>handleNotFound()}
                        </Route>
                    </Switch>
            </motion.form>
        </Router>
    );
}

export default NewQuote;