import { useState } from 'react';
import { useHistory } from 'react-router-dom'
const VehicleInformation = () => {
    const [vehicleCount, setVehicleCount]=useState([1])
    const history = useHistory()
    return ( 
    <>
        <p>Vehicle Information:</p>
        { vehicleCount.map(i=>{
            return(
                <>
                    <label htmlFor="year">Year</label>
                    <input type="text"  name='year' placeholder='Year' required/>
                    <label htmlFor="make">Make</label>
                    <input type="text"  name='make' placeholder='Make' required/>
                    <label htmlFor="model">Model</label>
                    <input type="text"  name='model' placeholder='Model' required/>
                    <p>Trailer Type:</p>
                    <label>
                        <input type="radio" name='type' />Open
                    </label>
                    <label >
                        <input type="radio" name='type' />Enclosed
                    </label>
                    <p>Running?</p>
                    <label>
                        <input type="radio" name='runs'/>Yes
                    </label>
                    <label>
                        <input type="radio" name='runs'/>No
                    </label>
                </>
            )
        })}
        <p>Add Another Vehicle</p>
        <button onClick={()=>history.push('/')}>Previous</button>
        <button>Next</button>
    </> 
    );
}

export default VehicleInformation;