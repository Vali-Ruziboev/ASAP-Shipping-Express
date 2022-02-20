import { useState, useRef } from "react";
import Header from "./Header";
import emailjs, {init} from '@emailjs/browser';
init("user_1Ig2WajVAhHklQ3Nutlw2")
const Contact_Us = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [content, setContent] = useState('')
    const form = {
        email:email,
        name: name,
        content:content
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        emailjs.send('send_email_to_myself', 'template_s8qxzx7', form)
            .then(function(response) {
                setName('')
                setEmail('')
                setContent('')
            }, function(error) {
                console.log('FAILED...', error);
            });
        
    }
    return ( 
        <div>
            <Header />
            <div className="contact_us_wrapper">
                <form className="contact_us" onSubmit={(e)=>handleSubmit(e)}>
                    <h3>Contact Us</h3>
                    <label>Your name *<input value={name} onChange={(e)=>setName(e.target.value)} required type="text" name="name" placeholder="Your name"/></label>
                    <label htmlFor="email">Your email *<input value={email} onChange={(e)=>setEmail(e.target.value)} required type="email"  name="email" placeholder="Your email"/></label>            
                    <label htmlFor="content">Your message *<textarea value={content} onChange={(e)=>setContent(e.target.value)} required name="content"cols="30" rows="10" placeholder="Your message"></textarea></label>
                    
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact_Us;