const NewQuote = () => {
    return ( 
        <form class='quote-form'>
            <h1>GET A FREE QUOTE NOW</h1>
            <p>(929) 419-5297</p>
            <div className="or">
                <span className='left-hand-of-or'></span>
                <span>OR</span>
                <span className='right-hand-of-or'></span>
            </div>
            <label htmlFor="zip-from">SHIP FROM:</label>
            <input type="text" name='zip-from' placeholder='ZIP code or City' />
            <label htmlFor="zip-to">SHIP TO:</label>
            <input type="text" name='zip-to' placeholder='ZIP code or City' />
            <button>NEXT</button>
        </form>
     );
}
 
export default NewQuote;