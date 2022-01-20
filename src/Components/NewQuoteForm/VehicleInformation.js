import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom'
import SimpleReactValidator from 'simple-react-validator'
import useForceUpdate from 'use-force-update';
const VehicleInformation = ({year, setYear, make, setMake, model, setModel, setType, setIsRunning}) => {
    const [vehicleCount, setVehicleCount]=useState([1])
    const [invalid, setInvalid] = useState(false)
    const handleVehicleCount = ()=>{
        setVehicleCount([...vehicleCount, 1])
    }
    const currentYear = new Date().getFullYear()
    const validator = new SimpleReactValidator()
    const forceUpdate = useForceUpdate()
    const history = useHistory()
    const handleYear = (e)=>{
        if((/\d/g).test(e)&&e>1000&&e<=currentYear){
            console.log('valid input')
            setYear(e)
            setInvalid(false)
        }else{
            console.log('invalid input')
            setYear(e)
            setInvalid(true)
        }
        
    }
    const handleNext =(e)=>{
        // e.preventDefault()
        console.log(validator.allValid())
        if(validator.allValid()){
            history.push('/contact_information')
        }else{
            // console.log(validator.showMessages())
            forceUpdate()
        }
    }
    return ( 
    <>
        <p>Vehicle Information:</p>
        { vehicleCount.map((i, index)=>{
            return(
                <div key={index}>
                    {index>0&&
                    <div className='indicator-and-close'>
                        <p>Vehicle:{index+1}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
                    </div>}
                    <label className={invalid?'invalid_input':''} htmlFor="year">Year</label>
                    <input className={invalid?'invalid input':'input'} value={year} onChange={e=>handleYear(e.target.value)} type="text"  name='year' placeholder='Year' required/>
                    {validator.message('year', year, [`required`, 'numeric', {max:currentYear, type:'num'}, {min:10, type:'num'}])}
                    <label htmlFor="make">Make</label>
                    <input className='input' value={make} onChange={e=>setMake(e.target.value)} type="text"  name='make' placeholder='Make' required/>
                    <label htmlFor="model">Model</label>
                    <input className='input' value={model} onChange={e=>setModel(e.target.value)} type="text"  name='model' placeholder='Model' required/>
                    <p>Trailer Type:</p>
                    <label>
                        <input onChange={e=>setType('Open')} type="radio" name='type' required/>Open
                    </label>
                    <label >
                        <input onChange={e=>setType('Enclosed')} type="radio" name='type' required/>Enclosed
                    </label>
                    <p>Running?</p>
                    <label>
                        <input onChange={e=>setIsRunning('Yes')}  type="radio" name='runs' required/>Yes
                    </label>
                    <label>
                        <input onChange={e=>setIsRunning('No')}  type="radio" name='runs' required/>No
                    </label>
                </div>
            )
        })}
        <p onClick={handleVehicleCount}>Add Another Vehicle</p>
        <button onClick={()=>history.push('/')}>Previous</button>
        <button onClick={handleNext}>Next</button>
    </> 
    );
}

export default VehicleInformation;