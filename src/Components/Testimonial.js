import { useState } from "react";

const Testimonial = () => {
    const [testimonialsArray] = useState([
        {title:"Shocked!", name:'Ari', content:"Ok, so I’ve never had to transport a car personally and I went throes helm recently when I moved my home belongings, so I was anxious and hoping everything would work out and that my research would provide positive results. I was moving a classic car and received a ton of quotes for bid, and other broker services and everyone warned me about everyone else…it was awesome. So, I pulled the trigger with David and…in the end I got the top of the lower prices, a covered transport from CA to Tulsa and it was picked up within 24 hours of booking and delivered two days later in perfect condition. So, to sum up. I’m in shock. And it’s the good kind. Thank you David!", date:"1/20/2022 4:32:00 PM "},
        {title:"Car transportation",name:"Ed Aubourg ", content:"Great care of my Maserati - Great communication- great customer service- fast shipping- prompt delivery - great price. Highly recommend- will use service again", date:"8/11/2021 7:12:00 PM " },
        {title:"Everything went smooth ", name:"Marnica ", content:"Delivered on time as promised. I was very happy with the delivery of my two vehicles. I’ll be recommending their services to all my colleagues , as well travel frequently for work assignments.", date:"12/6/2021 5:54:00 PM "},
        {title:"Great service ", name:"Nuria", content:"They contacted me right away and give me a great quote, service was don’t in 24 hours The driver was very helpful I will recommend them to my family and friends", date:"11/19/2021 11:50:00 AM "},
        {title:"Great service & best price", name:"Angela", content:"They did a great job, even when a issue came up they handle it and made it as smooth as possible. Definitely would use them in the future and recommend them to others. ", date:"10/26/2021 9:09:00 AM "},
        {title:"Porsche Transport", name:"Christopher", content:"The delivery service was fast and efficient. Great customer service and constant updates. The fees were below the competition. Thank you Asap Shipping Express.", date:"9/30/2021 9:10:00 PM "}
    ])
    return ( 
        <div className='testimonial'>
            <h3>Recent Reviews</h3>
            <div className="slide_wrapper">
                {testimonialsArray.map((i, index)=>{
                    return(
                        <div key={index} className="slide">
                            <h4>{i.title}</h4>
                            <div className="customer">
                                <h5>{i.name}</h5>
                                <em>submitted on {i.date}</em>
                            </div>
                            <p>{i.content}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Testimonial;