import { useEffect } from 'react';
import { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom'
import SimpleReactValidator from 'simple-react-validator'
import useForceUpdate from 'use-force-update';
const VehicleInformation = ({year, setYear, make, setMake, model, setModel, type, setType, isRunning, setIsRunning, validate}) => {
    let is_running = document.getElementsByClassName('is_running')
    let ship_type = document.getElementsByClassName('ship_type')
    const [rmvBtn, setRmvBtn] = useState(false)
    const handleVehicleCount = ()=>{
        setYear([...year,''])
        setMake([...make,''])
        setModel([...model,''])
        setIsRunning([...isRunning, 'Yes'])
        setType([...type, 'Open'])
    }
    // getting current year
    const currentYear = new Date().getFullYear()
    // validator
    const [validator] = useState(new SimpleReactValidator())

    const forceUpdate = useForceUpdate()
    const history = useHistory()

    const handleChange = (e, index, func, input)=>{
            let copy = [...input]
            copy[index] = e
            func(copy)
    }

    console.log(isRunning)
    useEffect(()=>{
        if(validate.some(i=>i==='')){
            history.push('/')
        }
        for(let i=0;i<is_running.length/2;i++){
            if(isRunning[i]==='Yes'){
                is_running[i*2].checked = true
            }else{
                is_running[i*2+1].checked = true
            }
        }
        for(let i=0;i<ship_type.length/2;i++){
            if(type[i]==='Open'){
                ship_type[i*2].checked = true
            }else{
                ship_type[i*2+1].checked = true
            }
        }
        if(year.length>1){
            setRmvBtn(true)
        }else{
            setRmvBtn(false)
        }
    },[handleVehicleCount])
    const handleNext =(e)=>{
        if(validator.allValid()){
            history.push('/contact_information')
        }else{
            validator.showMessages()
            forceUpdate()
        }
    }
    const handleRemove = (index)=>{
        const remove = (input, func)=>{
            let copy = [...input]
            copy.splice(index, 1)
            func(copy)
        }
        remove(make, setMake)
        remove(model, setModel)
        remove(type, setType)
        remove(isRunning, setIsRunning)
        remove(year, setYear)
    }
    return ( 
    <>
        <h4>Vehicle Information:</h4>
        { year.map((i, index)=>{
            return(
                <div key={index}>
                    {rmvBtn&&
                    <div className='indicator-and-close'>
                        <p>Vehicle:{index+1}</p>
                        <svg onClick={()=>handleRemove(index)} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
                    </div>}
                    <label  htmlFor="year">Year</label>
                    <input  value={year[index]} onChange={(e)=>handleChange(e.target.value, index, setYear, year)} type="text"  name='year' placeholder='Year' required/>
                    <span className='invalid-input-field'>
                        {validator.message(`year`, year[index], `required|min:1886,num|max:${currentYear},num`)}
                    </span>
                    <label htmlFor="make">Make</label>
                    <input value={make[index]} onChange={e=>handleChange(e.target.value, index, setMake, make)} type="text"  name='make' placeholder='Make' required/>
                    <span className='invalid-input-field'>
                        {validator.message('make', make[index], 'required')}
                    </span>
                    <label htmlFor="model">Model</label>
                    <input value={model[index]} onChange={e=>handleChange(e.target.value, index, setModel, model)} type="text"  name='model' placeholder='Model' required/>
                    <span className='invalid-input-field'>
                        {validator.message('model', model[index], 'required')}
                    </span>
                    <div className="radio_wrapper">
                        <p>Trailer Type:</p>
                        <label className="radio">
                            <input className="ship_type radio" onChange={e=>handleChange('Open', index, setType, type)} type="radio" name={`type_${index}`} required/>Open
                        </label>
                        <label className="radio">
                            <input className="ship_type radio" onChange={e=>handleChange('Enclosed', index, setType, type)} type="radio" name={`type_${index}`} required/>Enclosed
                        </label>
                        <span className='invalid-input-field'>
                            {validator.message('type', type, 'required')}
                        </span>
                        <p>Running?</p>
                        <label className="radio">
                            <input className='is_running radio' onChange={e=>handleChange('Yes', index, setIsRunning, isRunning)}  type="radio" name={`running_${index}`} required/>Yes
                        </label>
                        <label className="radio">
                            <input className='is_running radio'  onChange={e=>handleChange('No', index, setIsRunning, isRunning)}  type="radio" name={`running_${index}`} required/>No
                        </label>
                        <span className='invalid-input-field'>
                            {validator.message('running', isRunning, 'required')}
                        </span>
                    </div>
                </div>
            )
        })}
        <button onClick={handleVehicleCount}>+ Add Another Vehicle</button>
        <div className="btns">
            <button onClick={()=>history.push('/')}>{"< Previous"}</button>
            <button onClick={handleNext}>{"Next >"}</button>
        </div>
    </> 
    );
}

export default VehicleInformation;