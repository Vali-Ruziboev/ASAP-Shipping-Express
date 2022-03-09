import { Link, useRouteMatch } from 'react-router-dom'
const QuoteSubmitted = () => {
    const { url } = useRouteMatch()
    const updatedPath = (()=>{
        if(url === '/quote_submitted'){
            return ''
        }else{
            return `/${url.split('/')[1]}`
        }
    })()
    return ( 
        <div className='submitted_quote'>
            <h1>Your Quote Request has been sent!</h1>
            <h1>Thank You</h1>
            <p>We will get back with you very shortly with the most competitive pricing and truck space availability.In the meantime, feel free to call us directly at (929) 419-5297 and one of our live agents will be able to assist you with all your transportation needs!</p>
            <Link to={updatedPath}><button>Request another quote</button></Link>
        </div>
    );
}

export default QuoteSubmitted;