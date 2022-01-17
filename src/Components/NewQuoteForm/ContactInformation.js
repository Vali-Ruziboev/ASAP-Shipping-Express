import { useHistory, Link } from "react-router-dom";
const ContactInformation = ({ name, setName, number, setNumber, email, setEmail, date, setDate }) => {
    const history = useHistory()
    const previous = ()=>history.push('/vehicle_information')
    return ( 
        <div>
            <p>Contact Information</p>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' placeholder='Enter full name' value={name} onChange={e=>setName(e.target.value)} required />
            <label htmlFor="number">Phone Number</label>
            <input type="text" placeholder='(555) 555-5555' name='number' value={number} onChange={e=>setNumber(e.target.value)} required />
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" value={email} onChange={e=>setEmail(e.target.value)} required />
            <label htmlFor="date">Pickup Date</label>
            <input type="date" name="date" value={date} onChange={e=>setDate(e.target.value)} required />
            <button onClick={previous}>Previous</button>
            <Link to="/quote_submitted"><button>Submit</button></Link>

        </div>
    );
}

export default ContactInformation;