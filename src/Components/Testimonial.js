import { useState, useEffect } from "react";
import { MdStarRate } from 'react-icons/md'
import { motion, useAnimation } from "framer-motion";
import Header from "./Header";
import picture from '../Pictures/Car_Carrier1-desktop.jpg'

const Testimonial = () => {
    const f_star = new Array(5).fill('')
    const [testimonialsArray] = useState([
        {title:"Shocked!", name:'Ari', content:"Ok, so I’ve never had to transport a car personally and I went throes helm recently when I moved my home belongings, so I was anxious and hoping everything would work out and that my research would provide positive results. I was moving a classic car and received a ton of quotes for bid, and other broker services and everyone warned me about everyone else…it was awesome. So, I pulled the trigger with David and…in the end I got the top of the lower prices, a covered transport from CA to Tulsa and it was picked up within 24 hours of booking and delivered two days later in perfect condition. So, to sum up. I’m in shock. And it’s the good kind. Thank you David!", date:"1/20/2022 4:32:00 PM "},
        {title:"Car transportation",name:"Ed Aubourg ", content:"Great care of my Maserati - Great communication- great customer service- fast shipping- prompt delivery - great price. Highly recommend- will use service again", date:"8/11/2021 7:12:00 PM " },
        {title:"Everything went smooth ", name:"Marnica ", content:"Delivered on time as promised. I was very happy with the delivery of my two vehicles. I’ll be recommending their services to all my colleagues , as well travel frequently for work assignments.", date:"12/6/2021 5:54:00 PM "},
        {title:"Great service ", name:"Nuria", content:"They contacted me right away and give me a great quote, service was don’t in 24 hours The driver was very helpful I will recommend them to my family and friends", date:"11/19/2021 11:50:00 AM "},
        {title:"Great service & best price", name:"Angela", content:"They did a great job, even when a issue came up they handle it and made it as smooth as possible. Definitely would use them in the future and recommend them to others. ", date:"10/26/2021 9:09:00 AM "},
        {title:"Porsche Transport", name:"Christopher", content:"The delivery service was fast and efficient. Great customer service and constant updates. The fees were below the competition. Thank you Asap Shipping Express.", date:"9/30/2021 9:10:00 PM "}
    ])
    const handleSlideBack = ()=>{
        const slideWrap = document.getElementsByClassName("slides_wrapper")[0]
        const slideWidth = document.getElementsByClassName("slide")[0].clientWidth
        slideWrap.scrollLeft -=slideWidth
    }
    const handleSlideNext = ()=>{
        const slideWrap = document.getElementsByClassName("slides_wrapper")[0]
        const slideWidth = document.getElementsByClassName("slide")[0].clientWidth
        slideWrap.scrollLeft +=slideWidth
    }
    const [isPositoin, setIsPosition] = useState(false)

    const checkScrollHeight = ()=>{
        if(document.getElementsByClassName("why-asap-shipping-wrapper")[0]){
            const indicator = document.getElementsByClassName("why-asap-shipping-wrapper")[0].getBoundingClientRect()
            const top = indicator.top
            const scroll = window.scrollY + indicator.height
                if(scroll+100>top){
                    setIsPosition(true)
                    return true
                }
        }
    }

    useEffect(()=>{
        const check = checkScrollHeight()
        if(!check){
            window.addEventListener('scroll', function handle(){
                    const m = checkScrollHeight()
                    if(m){
                        window.removeEventListener('scroll', handle)
                    }
            })
        }
    },[])
   
    const animate = useAnimation()
    const initial_left = {
        x:'-100vw',
        backgroundColor:'rgba(0,0,0,0.2)'
    }
    const initial_right = {
        x:'100vw',
        backgroundColor:'rgba(0,0,0,0.2)'
    }
    const sequence = async()=>{
            await animate.start(i=>(
            {
                x:0, 
                backgroundColor:'rgba(0,0,0,0.2)', 
                rotate:720, 
                transition:{delay:0.1+i,duration:1.5}
            }))
            await animate.start(i=>({
                backgroundColor:'rgba(0,0,0,0)',
                transition:{delay:i, duration:1}
            }))
    }
    useEffect(()=>{
        sequence()
    }, [checkScrollHeight])
    return (
        <>
            <Header image={picture} intro='Ship Your Vehicle with ASAP Shipping Express.' />
            <div className='testimonial'>
                <h3>Recent Reviews</h3>
                <div className="slides">
                    <svg onClick={handleSlideBack} className='arrow' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="6 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path  d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"/></svg>
                    <svg onClick={handleSlideNext} className='arrow'  xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="-6 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g></svg>
                    <div className="slides_wrapper">
                        {testimonialsArray.map((i, index)=>{
                            return(
                                <div key={index}  className="slide" >
                                    <div className="slide_container">
                                        <div className="review_header">
                                            <h4>{i.title}</h4>
                                            <div className="five_star">
                                                {f_star.map((f, index)=>{return(<MdStarRate color='yellow' key={index}/>)})}
                                            </div> 
                                        </div>
                                        <div className="customer">
                                            <h5>{i.name}</h5>
                                            <em>submitted on {i.date}</em>
                                        </div>
                                        <p className='content'>{i.content}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="why-asap-shipping-wrapper">
                    {isPositoin&&<motion.h1
                    initial={{y:-50, opacity:0}}
                    animate={{y:0, opacity:1, transition:{duration:2}}}
                    >Why ASAP Shipping Express?</motion.h1>}
                    {isPositoin && <div className="reason-wrapper">
                        <motion.div
                            initial={{y:-50, opacity:0}}
                            animate={{y:0, opacity:1, transition:{duration:2}}}
                        className="indicator-wrapper">
                            <div className="reason">
                                <span className='indicator'>20</span>
                                <h4>Year of Experience</h4>
                            </div>
                            <div className="reason">
                                <div className="indicator">
                                    <span>72</span>
                                    <span>K</span>
                                </div>
                                <h4>Happy Customers</h4>
                            </div>
                            <div className="reason">
                                <div className="indicator">
                                    <span>100</span>
                                    <span>K+</span>
                                </div>
                                <h4>Vehicles Shipped</h4>
                            </div>
                        </motion.div>
                        <motion.div
                        initial={initial_left}
                        animate={animate}
                        custom={0} 
                        className="reason">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>
                            <h4>No Down payment to scedule</h4>
                            <p>NO down payment is required to book your order and you will not be charged any payment untill we confirm a carrier for your vehicle.We will contact you to let you know when your order is dispatched. </p>
                        </motion.div>
                        <motion.div
                        custom={0.2} 
                        initial={initial_right}
                        animate={animate}
                        className="reason">
                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M11,13V9c0-0.55-0.45-1-1-1H6V6h5V4H8.5V3h-2v1H5C4.45,4,4,4.45,4,5v4c0,0.55,0.45,1,1,1h4v2H4v2h2.5v1h2v-1H10 C10.55,14,11,13.55,11,13z"/><polygon points="19.59,12.52 13.93,18.17 11.1,15.34 9.69,16.76 13.93,21 21,13.93"/></g></g></svg>
                            <h4>Price Guarantee</h4>
                            <p>Our State-of-art car shipping cost quoting technology allows us to provide you with the best price to ship your car 100% of the time with no hidden fees.</p>
                        </motion.div>
                        <motion.div
                        custom={0.4} 
                        initial={initial_left}
                        animate={animate}
                        className="reason">
                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><circle cx="12" cy="6" r="2"/><path d="M21,16v-2c-2.24,0-4.16-0.96-5.6-2.68l-1.34-1.6C13.68,9.26,13.12,9,12.53,9h-1.05c-0.59,0-1.15,0.26-1.53,0.72l-1.34,1.6 C7.16,13.04,5.24,14,3,14v2c2.77,0,5.19-1.17,7-3.25V15l-3.88,1.55C5.45,16.82,5,17.48,5,18.21C5,19.2,5.8,20,6.79,20H9v-0.5 c0-1.38,1.12-2.5,2.5-2.5h3c0.28,0,0.5,0.22,0.5,0.5S14.78,18,14.5,18h-3c-0.83,0-1.5,0.67-1.5,1.5V20h7.21 C18.2,20,19,19.2,19,18.21c0-0.73-0.45-1.39-1.12-1.66L14,15v-2.25C15.81,14.83,18.23,16,21,16z"/></g></g></svg>
                            <h4>5-Star, Stress Free Service</h4>
                            <p>
                                We are 5 rated shipping service with Better Business Bureau, and have many reviews from customers on Google, Transport review and more!. Your car will get from point A to point B without you having to break a single sweat.
                            </p> 
                        </motion.div>
                        <motion.div
                        custom={0.6} 
                        initial={initial_right}
                        animate={animate}
                        className="reason">
                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><path d="M12,2L4,5v6.09c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V5L12,2z M18,11.09c0,4-2.55,7.7-6,8.83 c-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25l6,2.25V11.09z"/></g></svg>
                            <h4>Fully Covered</h4>
                            <p>The total cost includes full coverage insurance. We verify that all of our car transport carriers have their own active cargo insurance at all times.</p>
                        </motion.div>
                        <motion.div
                        custom={0.8} 
                        initial={initial_left}
                        animate={animate}
                        className="reason">
                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24"/><g><path d="M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1C4.76,14.04,4.39,14,4,14 c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2 c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85C21.93,14.21,20.99,14,20,14 c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M16.24,13.65c-1.17-0.52-2.61-0.9-4.24-0.9 c-1.63,0-3.07,0.39-4.24,0.9C6.68,14.13,6,15.21,6,16.39V18h12v-1.61C18,15.21,17.32,14.13,16.24,13.65z M8.07,16 c0.09-0.23,0.13-0.39,0.91-0.69c0.97-0.38,1.99-0.56,3.02-0.56s2.05,0.18,3.02,0.56c0.77,0.3,0.81,0.46,0.91,0.69H8.07z M12,8 c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,8,12,8 M12,6c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3 C15,7.34,13.66,6,12,6L12,6z"/></g></svg>
                            <h4>Experienced Specialists</h4>
                            <p>Our Transport Specialists and Customer Service Representatives are here to help! Our experienced transport team is trained to handle every aspect of the shipping process from start to finish.</p>
                        </motion.div>
                        <motion.div
                        custom={1} 
                        initial={initial_right}
                        animate={animate}
                        className="reason">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5l1.96 2.5H17V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.22-3c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9H8.22zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>
                            <h4>16K+ Auto Carriers</h4>
                            <p>Our auto transporter company has a huge network of haulers who are personally vetted auto shipping experts, ensuring your vehicle is transported by trusted members of the industry. These vehicle transport companies will treat your car like their own.</p>
                        </motion.div>
                    </div>}
                </div>
            </div>
        </>
    );
}

export default Testimonial;