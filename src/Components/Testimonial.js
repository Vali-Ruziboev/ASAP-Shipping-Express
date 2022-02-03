import { useState, useRef } from "react";
import { MdStarRate } from 'react-icons/md'
import { motion, AnimatePresence } from "framer-motion";

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
    const [isPreviewed, setIsPreviewed] = useState(false)
    const [previewContent, setPreviewContent] = useState('')
    const handlePreview = (index)=>{
        setIsPreviewed(true)
        setPreviewContent(testimonialsArray[index].content)
        
    }
    const handleClose = ()=>{
        setIsPreviewed(false)
    }
    const [margin, setMargin]= useState(0)
    const handleSlideBack = ()=>{
        const slide=document.getElementsByClassName("slide")[0]
        if(margin>0){
            slide.style.marginLeft = `${-margin+100}vw`
            setMargin(margin-100)

        }
    }
    const handleSlideNext = ()=>{
        const slide=document.getElementsByClassName("slide")
        if(margin<(slide.length-1)*100){
            slide[0].style.marginLeft = `${-margin-100}vw`
            setMargin(margin+100)
        }
    }
    const checkContentHeight = (index)=>{
        if(document.getElementsByClassName("content")[index]){
            let e = document.getElementsByClassName("content")[index]
            const topDifference = Math.round(e.getBoundingClientRect().top)-Math.round(e.parentNode.parentNode.getBoundingClientRect().top)
            const elementHeight = e.clientHeight+topDifference
            const parentHeight = Math.round(e.parentNode.parentNode.getBoundingClientRect().height)
            if(parentHeight>elementHeight){
                return false
            }else{
                return true
            }
            
        }
    }
    return ( 
        <div className='testimonial'>
            <h3>Recent Reviews</h3>
            <div className="slides_wrapper">
                <div className="slide_navigator">
                    <svg onClick={handleSlideBack} className='arrow' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="6 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path  d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"/></svg>
                    <svg onClick={handleSlideNext} className='arrow'  xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="-6 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g></svg>
                </div>
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
                                {checkContentHeight(index)&& <div className="legend"><p onClick={(e)=>handlePreview(index)}>Read more</p></div>}
                            </div>
                        </div>
                    )
                })}
            </div>
            <AnimatePresence>{isPreviewed&&
                <motion.div 
                className="review_preview" 
                initial={{scale:0}}
                animate={{scale:1, transition:{type:"spring",stiffness:200}}} 
                exit={{scale:0}}>
                <div>
                    <motion.svg onClick={handleClose} className="exit_icon" animate={{rotate:360, transition:{duration:0.4, delay:0.2}}} xmlns="http://www.w3.org/2000/svg" height="24px" strokeWidth="4" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></motion.svg>
                    <p>
                    {previewContent}
                    </p>
                </div>
                </motion.div> 
            }</AnimatePresence>
            <div className="why-asap-shipping-wrapper">
                <h3>Why you should book with ASAP Shipping Express:</h3>
                <div className="reason-wrapper">
                    <div className="reason">
                        <span className='green-num'>20</span>
                        <p>Year of Experience</p>
                    </div>
                    <div className="reason">
                        <div className="indicator">
                            <span className="green-num">71</span>
                            <span>K</span>
                        </div>
                        <p>Happy Customers</p>
                    </div>
                    <div className="reason">
                        <div className="indicator">
                            <span className='geen-num'>100</span>
                            <span>K+</span>
                        </div>
                        <p>Vehicles Shipped</p>
                    </div>
                    <div className="reason">
                        <h4>No Down payment to scedule</h4>
                        <p>NO down payment is required to book your order and you will not be charged any payment untill we confirm a carrier for your vehicle.We will contact you to let you know when your order is dispatched. </p>
                    </div>
                    <div className="reason">
                        <h4>Price Guarantee</h4>
                        <p>Our State-of-art car shipping cost quoting technology allows us to provide you with the best price to ship your car 100% of the time with no hidden fees.</p>
                    </div>
                    <div className="reason">
                        <h4>5-Star, Stress Free Service</h4>
                        <p>
                            We are 5 rated shipping service with Better Business Bureau, and have many reviews from customers on Google, Transport review and more!. Your car will get from point A to point B without you having to break a single sweat.
                        </p> 
                    </div>
                    <div className="reason">
                        <h4>Fully Covered</h4>
                        <p>The total cost includes full coverage insurance. We verify that all of our car transport carriers have their own active cargo insurance at all times.</p>
                    </div>
                    <div className="reason">
                        <h4>Experienced Specialists</h4>
                        <p>Our Transport Specialists and Customer Service Representatives are here to help! Our experienced transport team is trained to handle every aspect of the shipping process from start to finish.</p>
                    </div>
                    <div className="reason">
                        <h4>16K+ Auto Carriers</h4>
                        <p>Our auto transporter company has a huge network of haulers who are personally vetted auto shipping experts, ensuring your vehicle is transported by trusted members of the industry. These vehicle transport companies will treat your car like their own.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;