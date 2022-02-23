import Header from "./Header";
import { StepByStepGuideData } from "./Data"
import image from '../Pictures/Step-By-Step_Guide.jpg'

const Step_By_Step_Guide = () => {
    return ( 
        <div className="guides_container">
            <Header image={image} intro='We walk you through all the important steps to prepare your vehicle for transportation.'/>
            <div className="guides">
                <h2>Step By Step Guide</h2>
                {StepByStepGuideData.map((d, i)=>{
                    return(
                        <div key={i} className="guide_wrapper">
                            <div className="guide">
                                <h3>{`${i+1}. ${d.header}.`}</h3>
                                {d.body.split('\n').map((b, index)=><p key={index}>{b}</p>)}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Step_By_Step_Guide;