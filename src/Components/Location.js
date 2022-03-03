import { Link } from "react-router-dom";
const Location = () => {
    return ( <div className="location">
        <div className="seal">
                <h3>Still have questions?</h3>
                <p className="seal_pad">Check-out:</p>
                <Link to="/faqs"><h4 className="faqs_btn">FAQs</h4></Link>
                <p className="seal_pad">OR</p>
                <p>Give us a callback at <a href="tel:(929) 419-5297">(555) 555-5555</a> to speak with one of our experienced transport specialists.</p>
            </div>
            <div className="contact_us_today">
                <h3>Contact us today.</h3>
                <div className="company-info">
                    <h3>ASAP Shipping Express</h3>
                    <div className="svg_text">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle cx="12" cy="9" r="2.5"/></svg>
                        <a >3824 W 14th St, Little Rock, AR 72204, USA</a>
                    </div>
                    <div className="svg_text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            <a href="tel:(929) 419-5297">(555) 555-5555</a>
                        </div>
                        <div className="svg_text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            <a href="mailto:info@asapshippingexpress.com">info@asapshippingexpress.com</a>
                        </div>
                        <div className="svg_text">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                            <a>Monday - Sunday: 9:00 AM - 6:00 PM</a>
                        </div>
                </div>
                <div>
                    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.6630182462595!2d-92.31892038476671!3d34.73888758042467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d2a4bb7a5b6895%3A0x14b47951e7947b38!2s3824%20W%2014th%20St%2C%20Little%20Rock%2C%20AR%2072204%2C%20USA!5e0!3m2!1sen!2s!4v1644106341681!5m2!1sen!2s" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
    </div> );
}

export default Location;