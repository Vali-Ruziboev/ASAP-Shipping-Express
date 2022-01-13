import { motion } from "framer-motion"
const NewQuote = () => {
    return ( 
        <form className='quote-form'>
            <h1>GET A FREE QUOTE NOW</h1>
            <p initial={{scale:0}} animate={{scale:1, originX:0}} transition={{ type: "spring"}}>(929) 419-5297</p>
            <div  className="or">
                <span className='left-hand-of-or'></span>
                <span>OR</span>
                <span className='right-hand-of-or'></span>
            </div>
            <label htmlFor="zip-from">SHIP FROM:</label>
            <input type="text" name='zip-from' placeholder='ZIP code or City' required/>
            <label htmlFor="zip-to">SHIP TO:</label>
            <input type="text" name='zip-to' placeholder='ZIP code or City' required />
            <motion.button initial={{scale:0}} animate={{scale:1, transition:{type:"spring", duration:1, stiffness:250}}}>NEXT</motion.button>
        </form>
    );
}

export default NewQuote;