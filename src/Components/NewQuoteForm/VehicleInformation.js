import { useEffect } from 'react';
import { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom'
import SimpleReactValidator from 'simple-react-validator'
import useForceUpdate from 'use-force-update';
const VehicleInformation = ({year, setYear, make, setMake, model, setModel, type, setType, isRunning, setIsRunning}) => {
    const [vehicleCount, setVehicleCount]=useState([1])
    const handleVehicleCount = ()=>{
        setVehicleCount([...vehicleCount, 1])
        setYear({...year,[vehicleCount.length]:''})
        setMake({...make,[vehicleCount.length]:''})
        setModel({...model,[vehicleCount.length]:''})
    }
    // refs
    const yes = useRef()
    const no = useRef()
    const open = useRef()
    const enclosed = useRef()
    // getting current year
    const currentYear = new Date().getFullYear()
    // validator
    const [validator] = useState(new SimpleReactValidator())

    const forceUpdate = useForceUpdate()
    const history = useHistory()

    const handleYear = (e, index)=>{
            setYear({...year, [index]:e})
    }
    console.log(year)
    useEffect(()=>{
        if(isRunning==='No'){
            no.current.checked = true
        }else{
            setIsRunning('Yes')
            yes.current.checked = true
        }
        if(type === "Enclosed"){
            enclosed.current.checked = true
        }else{
            setType('Open')
            open.current.checked = true
        }
    },[])
    const handleNext =(e)=>{
        console.log(validator.allValid())
        if(validator.allValid()){
            history.push('/contact_information')
        }else{
            validator.showMessages()
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
                    <label  htmlFor="year">Year</label>
                    <input  value={year[index]} onChange={(e)=>handleYear(e.target.value, index)} type="text"  name={`year_${index}`} placeholder='Year' required/>
                    <span className='invalid-input-field'>
                        {validator.message(`year`, year[index], `required|min:1886,num|max:${currentYear},num`)}
                    </span>
                    <label htmlFor="make">Make</label>
                    <input  value={make[index]} onChange={e=>setMake({...make, [index]:e.target.value})} type="text"  name='make' placeholder='Make' required/>
                    <span className='invalid-input-field'>
                        {validator.message('make', make[index], 'required')}
                    </span>
                    <label htmlFor="model">Model</label>
                    <input value={model[index]} onChange={e=>setModel({...model,[index]:e.target.value})} type="text"  name='model' placeholder='Model' required/>
                    <span className='invalid-input-field'>
                        {validator.message('model', model, 'required')}
                    </span>
                    <p>Trailer Type:</p>
                    <label>
                        <input ref={open} onChange={e=>setType('Open')} type="radio" name='type' required/>Open
                    </label>
                    <label >
                        <input ref={enclosed} onChange={e=>setType('Enclosed')} type="radio" name='type' required/>Enclosed
                    </label>
                    <span className='invalid-input-field'>
                        {validator.message('type', type, 'required')}
                    </span>
                    <p>Running?</p>
                    <label>
                        <input ref={yes} onChange={e=>setIsRunning('Yes')}  type="radio" name='running' required/>Yes
                    </label>
                    <label>
                        <input ref={no} onChange={e=>setIsRunning('No')}  type="radio" name='running' required/>No
                    </label>
                    <span className='invalid-input-field'>
                        {validator.message('running', isRunning, 'required|alpha')}
                    </span>
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