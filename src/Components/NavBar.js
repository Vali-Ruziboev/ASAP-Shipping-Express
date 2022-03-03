import { Link } from "react-router-dom";
const NavBar = () => {
    return (  
        <ul className='navbar'>
            <li><a href="#header"> Get a Quote</a></li>
            <li><Link to='/faqs'>FAQs</Link></li>
            <li><Link to='step_by_step_guide'>Step-By-Step Guide</Link></li>
            <Link to='contact_us'><li>Contact Us</li></Link>
        </ul>
    );
}

export default NavBar;