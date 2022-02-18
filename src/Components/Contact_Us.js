import Header from "./Header";

const Contact_Us = () => {
    return ( 
        <div>
            <Header />
            <div className="contact_us_wrapper">
                <form className="contact_us">
                    <h3>Contact Us</h3>
                    <label htmlFor="name">Your name</label>
                    <input type="text" name="name" placeholder="Your name"/>
                    <label htmlFor="email">Your email</label>
                    <input type="email"  name="email" placeholder="Your email"/>
                    <label htmlFor="content">Your message</label>
                    <textarea name="content"cols="30" rows="10" placeholder="Your message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact_Us;