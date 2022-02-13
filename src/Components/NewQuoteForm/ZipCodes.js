import { useHistory, useRouteMatch } from 'react-router-dom'
import { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator'
import useForceUpdate from 'use-force-update';

const ZipCodes = ({ shipFrom, shipTo, setShipFrom, setShipTo }) => {
    const history = useHistory()
    const { path } = useRouteMatch()
    const updatedPath = (()=>{
        if(path ==='/'){
            return path
        }else{
            return `${path}/`
        }
    })()
    console.log(updatedPath);
    console.log(path);
     // validator
    const [validator] = useState(new SimpleReactValidator())
    const forceUpdate = useForceUpdate();
    const handleOnChange = (e)=>{
        setShipFrom(e.target.value)
        
        }
    const handleNext =(e)=>{
        if(validator.allValid()){
            history.push(`${updatedPath}vehicle_information`)
        }else{
            validator.showMessages()
            forceUpdate()
    }
    }
    return ( 
        <div className="zip_form">
            <div>
            <label htmlFor="zip_code">SHIP FROM:
                <input type="text" name='zip_code'  placeholder='ZIP code or City' value={shipFrom} onChange={(e)=>handleOnChange(e)} required/>
            </label>
                <span className='invalid-input-field'>
                    {validator.message('zipcode', shipFrom, 'required')}
                </span>
            </div>
            <div>
            <label>SHIP TO:
                    <input type="text" name='zip_code' placeholder='ZIP code or City' value={shipTo} onChange={(e)=>setShipTo(e.target.value)} required />
                </label>
                <span className='invalid-input-field'>
                        {validator.message('zipcode', shipTo, 'required')}
                </span>
            </div>
            <button onClick={handleNext}>{`NEXT >`}</button>
        </div>
    );
}

export default ZipCodes;