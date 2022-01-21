import { useHistory } from 'react-router-dom'
import { useState } from 'react/cjs/react.development';
import SimpleReactValidator from 'simple-react-validator'
import useForceUpdate from 'use-force-update';
import useFetch from "./useFetch"

const ZipCodes = ({ shipFrom, shipTo, setShipFrom, setShipTo }) => {
    const [isPendin, setIsPendin] = useState(false)
    const [err, setErr] = useState(false)
    const [dat, setDat] = useState(null)
    const {data, isPending, error, isLimitUp} = useFetch(shipFrom)
     // validator
    const [validator] = useState(new SimpleReactValidator())
    const forceUpdate = useForceUpdate();
    const handleOnChange = (e)=>{
        setShipFrom(e.target.value)
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
        const history = useHistory()
        const handleNext =(e)=>{
            if(validator.allValid()){
                history.push('/vehicle_information')
            }else{
                validator.showMessages()
                forceUpdate()
        }
    }
    return ( 
        <div>
            <label htmlFor="zip-from">SHIP FROM:</label>
            <div className="zip-from">
                <input type="text" name='zip-from'  placeholder='ZIP code or City' value={shipFrom} onChange={(e)=>handleOnChange(e)} required/>
                {isPendin&&<p>Searching...</p>}
                {err&&<p>A zip code you provided was not found.</p>}
                {data&&<p>{`${dat.city}, ${dat.state}, ${dat.zip_code}`}</p>}
                <p className='invalid-input-field'>
                    {validator.message('zipcode', shipFrom, 'required')}
                </p>
            </div>
            <label htmlFor="zip-to">SHIP TO:</label>
            <input type="text" name='zip-to' placeholder='ZIP code or City' value={shipTo} onChange={(e)=>setShipTo(e.target.value)} required />
            <p className='invalid-input-field'>
                    {validator.message('zipcode', shipTo, 'required')}
            </p>
            <button onClick={handleNext}>NEXT</button>
        </div>
    );
}

export default ZipCodes;