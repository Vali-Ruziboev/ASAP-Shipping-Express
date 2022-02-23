import { useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition  } from 'react-transition-group';
import Header from "./Header";
import { faqsData } from "./Data";
import { useState } from "react";
import image from '../Pictures/faqs.jpg'

const Faqs = () => {
    const [clicked, setClicked] = useState(null)
    const handleClick = (i)=>{
        if(clicked ===i){
            setClicked(null)
        }else{
            setClicked(i)
        }
    }
    return ( 
        <>
            <Header image={image} intro='Frequently Asked Questions.'/>
            <div className="faqs">
                <h2>Frequently Asked Questions</h2>
                <div className="faqs-container">
                {faqsData.map((d, i)=>{
                    return (<div key={i} className="question">
                        <div onClick={()=>handleClick(i)} className="head">
                            <h3>{d.question}</h3>
                            {clicked===i?<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13H5v-2h14v2z"/></svg>:<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>}
                        </div>
                            {clicked===i&&<p>{d.answer}</p>}
                    </div>)
                })}
                </div>
            </div>
        </>
    );
}

export default Faqs;