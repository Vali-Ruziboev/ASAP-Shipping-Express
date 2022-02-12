import { Link } from "react-router-dom";
const NavBar = () => {
    return (  
        <ul className='navbar'>
            <li><a href="#header"> Get a Quote</a></li>
            <li><Link to='/faqs'>FAQs</Link></li>
            <li>Step-By-Step Guide</li>
            <li>Contact Us</li>
        </ul>
    );
}

export default NavBar;