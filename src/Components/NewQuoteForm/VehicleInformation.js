import { useEffect } from 'react';
import { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom'
import SimpleReactValidator from 'simple-react-validator'
import useForceUpdate from 'use-force-update';
const VehicleInformation = ({year, setYear, make, setMake, model, setModel, type, setType, isRunning, setIsRunning}) => {
    let is_running = document.getElementsByClassName('is_running')
    let ship_type = document.getElementsByClassName('ship_type')
    const [vehicleCount, setVehicleCount]=useState([1])
    const handleVehicleCount = ()=>{
        setVehicleCount([...vehicleCount, 1])
        setYear({...year,[vehicleCount.length]:''})
        setMake({...make,[vehicleCount.length]:''})
        setModel({...model,[vehicleCount.length]:''})
        setIsRunning({...isRunning, [vehicleCount.length]:'Yes'})
        setType({...type, [vehicleCount.length]:'Open'})
    }
    // getting current year
    const currentYear = new Date().getFullYear()
    // validator
    const [validator] = useState(new SimpleReactValidator())

    const forceUpdate = useForceUpdate()
    const history = useHistory()

    const handleYear = (e, index)=>{
            setYear({...year, [index]:e})
    }
    console.log(isRunning)
    useEffect(()=>{
        for(let i=0;i<Object.keys(isRunning).length;i++){
            if(isRunning[i]==='No'){
                is_running[2*i+i].checked = true
            }else{
                is_running[2*i].checked = true
            }
        }
        
        for(let i=0;i<Object.keys(type).length;i++){
            if(type[i] === "Enclosed"){
                ship_type[2*i+1].checked = true
            }else{
                ship_type[2*i].checked = true
            }
        }
    },[vehicleCount])
    const handleNext =(e)=>{
        console.log(validator.allValid())
        if(validator.allValid()){
            history.push('/contact_information')
        }else{
            validator.showMessages()
            forceUpdate()
        }
    }
    const handleRemove = (index)=>{
        const rs = new Promise(()=>{
            if(Object.keys(year).length>index){
                const pr = new Promise(()=>{
                    for(let i = index; i<Object.keys(year).length-1;i++){
                        let next_value = {...year}
                        next_value[i] = Object.values(year)[i+1]
                        return setYear(next_value)
                    }
                })
                pr.then(()=>{
                    let newObj1 = {...year}
                    delete newObj1[Object.keys(year).length-1]
                    return setYear(newObj1)
                })
            }
            if(Object.keys(isRunning).length>index){
                const pr = new Promise(()=>{for(let i = index; i<Object.keys(isRunning).length-1;i++){
                    let next_value = {...isRunning}
                    next_value[i] = Object.values(isRunning)[i+1]
                    return setIsRunning(next_value)
                }})
                pr.then(()=>{
                    let newObj2 = {...isRunning}
                    delete newObj2[Object.keys(isRunning).length-1]
                    return setIsRunning(newObj2)
                })
            }
            if(Object.keys(type).length>index){
                const pr = new Promise(()=>{
                    for(let i = index; i<Object.keys(type).length-1;i++){
                    let next_value = {...type}
                    next_value[i] = Object.values(type)[i+1]
                    return setType(next_value)
                }})
                pr.then(()=>{
                    let newObj3 = {...type}
                    delete newObj3[Object.keys(type).length-1]
                    return setType(newObj3)
                })
            }
        })
        rs.then(()=>setVehicleCount(vehicleCount.slice(1)))
        
        // delete make[index];
        // delete model[index];
        // delete type[index];
        // delete isRunning[index];
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
                        <svg onClick={()=>handleRemove(index)} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
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
                        {validator.message('model', model[index], 'required')}
                    </span>
                    <p>Trailer Type:</p>
                    <label>
                        <input className="ship_type" onChange={e=>setType({...type,[index]:'Open'})} type="radio" name={`type_${index}`} required/>Open
                    </label>
                    <label >
                        <input className="ship_type" onChange={e=>setType({...type,[index]:'Enclosed'})} type="radio" name={`type_${index}`} required/>Enclosed
                    </label>
                    <span className='invalid-input-field'>
                        {validator.message('type', type, 'required')}
                    </span>
                    <p>Running?</p>
                    <label>
                        <input className='is_running' onChange={e=>setIsRunning({...isRunning,[index]:'Yes'})}  type="radio" name={`running_${index}`} required/>Yes
                    </label>
                    <label>
                        <input className='is_running'  onChange={e=>setIsRunning({...isRunning,[index]:'No'})}  type="radio" name={`running_${index}`} required/>No
                    </label>
                    <span className='invalid-input-field'>
                        {validator.message('running', isRunning, 'required')}
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