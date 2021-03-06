import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import NewQuote from "./NewQuoteForm/NewQuote";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Link, useLocation, useRouteMatch } from "react-router-dom";


const Header = ({image, intro}) => {
    const { url } = useRouteMatch()
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    useEffect(()=>{
        if(navigator.userAgent.match(/Android|Mobile/i)){
            setIsMobile(true)
        }
        if(document.documentElement.clientWidth<675&&!isMobile){
            setIsMobile(true)
            
        }
    },[ ])
    const [int, setInt] = useState('')
    const [img, setImg] = useState('')
    useEffect(()=>{
        setImg(image)
        setInt(intro)
    },[image, intro])

    const location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    const anim = useAnimation()
    const sequence = async ()=>{
        await anim.start({
            y:0,
            width:10,
            transition:{delay:0.5, duration:0.5}
        })
        await anim.start({
            y:0,
            width:'100vw',
            transition:{duration:0.5}
        })
    }
    useEffect(()=>{
        sequence()
        window.addEventListener('resize', (e)=>{
            if(document.documentElement.clientWidth<=675&&!isMobile){
                setIsMobile(true)
                
            }
            else if(document.documentElement.clientWidth>675){
                setIsMobile(false)
            }
        })
    }, [])
    
    return ( 
        <header style={{background:`linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) , url(${img})`}} id='header'>
            <div className="nav-wrapper">     
                <motion.div initial={{translateY:-100}}
                animate={{translateY:0, transition:{duration:0.5}}}
                className="contact-us">
                    <div className="phone-number">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        <a href="tel:(929) 419-5297">(555) 555-5555</a>
                    </div>
                    <div className="email-address">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        <a href="mailto:info@asapshippingexpress.com">info@asapshippingexpress.com</a>
                    </div>
                </motion.div>
                <motion.div initial={{y:-200,width:10,}}
                animate={anim}
                className="navbar-wrapper">
                    <Link to='/'><motion.h1
                    initial={{x:'-200vh'}}
                    animate={{x:0, transition:{delay:1.5, duration:0.6, type:'spring',stiffness:50}}}
                    >ASAP SHIPPING EXPRESS</motion.h1></Link>
                    {!isMobile && <motion.div className="navbar-wrapper-wrap" 
                    initial={{scale:0}}
                    animate={{scale:1, transition:{delay:2.1, duration:0.6, type:'spring',stiffness:150}}}
                    ><NavBar /></motion.div>}
                    {isMobile && <motion.svg
                    initial={{scale:0}}
                    animate={{scale:1, transition:{delay:2.1, duration:0.6, type:'spring',stiffness:50}}}
                    onClick = {()=>setIsMenuClicked(true)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></motion.svg>}

                    
                </motion.div>
            </div>
                    <AnimatePresence>{isMenuClicked && <div 
                    onClick={()=>{setIsMenuClicked(false)}} 
                    className='popup-wrapper'>
                            <motion.div 
                            initial={{scale:0}} 
                            animate={{scale:1, transition:{type:"spring",stiffness:250}}} 
                            exit={{scale:0}}>
                            <motion.svg className="exit_icon" animate={{rotate:360, transition:{duration:0.4, delay:0.2}}} xmlns="http://www.w3.org/2000/svg" height="24px" strokeWidth="4" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></motion.svg>
                                <NavBar/>
                            </motion.div>
                        
                    </div>}</AnimatePresence>
            <div className="header_body">
                <motion.h1 initial={{opacity:0, y:-100}} animate={{opacity:1, y:0, transition:{delay:1, duration:2}}} className="intro">{int}</motion.h1>
                <NewQuote url={url} />  
            </div>
        </header>
    );
}

export default Header;