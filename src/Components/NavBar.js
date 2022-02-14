import { Link } from "react-router-dom";
const NavBar = () => {
    return (  
        <ul className='navbar'>
            <li><a href="#header"> Get a Quote</a></li>
            <li><Link to='/faqs'>FAQs</Link></li>
            <li><Link to='step_by_step_guide'>Step-By-Step Guide</Link></li>
            <li><Link to='contact_us'>Contact Us</Link></li>
        </ul>
    );
}

export default NavBar;