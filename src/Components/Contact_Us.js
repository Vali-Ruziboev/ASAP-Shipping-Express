import image from '../Pictures/contact_us.jpg';
import { useState } from "react";
import Header from "./Header";
import { motion, AnimatePresence} from "framer-motion";
import emailjs, {init} from '@emailjs/browser';
init("user_1Ig2WajVAhHklQ3Nutlw2")
const Contact_Us = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [content, setContent] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [sending, setSending] = useState(false)
    const form = {
        email:email,
        name: name,
        content:content
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setSending(true)
        emailjs.send('send_email_to_myself', 'template_s8qxzx7', form)
            .then(function(response) {
                setName('')
                setEmail('')
                setContent('')
                setSending(false)
                setSubmitted(true)
                setTimeout(() => {
                    setSubmitted(false)
                }, 2000);
            }, function(error) {
                console.log('FAILED...', error);
            });
        
    }
    return ( 
        <div>
            <Header image={image} intro='Give us a call at (555) 555-5555 to talk to one of our specialists.' />
            <div className="contact_us_wrapper">
                <form className="contact_us" onSubmit={(e)=>handleSubmit(e)}>
                    <h3>Contact Us</h3>
                    <label>Your name *<input value={name} onChange={(e)=>setName(e.target.value)} required type="text" name="name" placeholder="Your name"/></label>
                    <label htmlFor="email">Your email *<input value={email} onChange={(e)=>setEmail(e.target.value)} required type="email"  name="email" placeholder="Your email"/></label>            
                    <label htmlFor="content">Your message *<textarea value={content} onChange={(e)=>setContent(e.target.value)} required name="content"cols="30" rows="10" placeholder="Your message"></textarea>
                    <AnimatePresence>{submitted&&<motion.span initial={{y:0, opacity:0}} animate={{y:-300, opacity:1, transition:{duration:1.5}}} exit={{y:-500,opacity:0}}><p>Delivered !!!</p></motion.span>}</AnimatePresence>
                    </label>
                    <button type="submit">{sending?<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M.01 0h24v24h-24V0z" fill="none"/><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>:'Send'}</button>
                </form>
            </div>
        </div>
    );
}

export default Contact_Us;