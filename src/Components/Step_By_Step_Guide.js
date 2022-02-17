import Header from "./Header";
import { StepByStepGuideData } from "./Data"

const Step_By_Step_Guide = () => {
    return ( 
        <div className="guides_container">
            <Header />
            <h2>Step By Step Guide</h2>
            {StepByStepGuideData.map((d, i)=>{
                return(
                    <div key={i} className="guide_wrapper">
                        <div className="guide">
                            <h3>{`${i+1}. ${d.header}.`}</h3>
                            {d.body.split('\n').map(b=><p>{b}</p>)}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Step_By_Step_Guide;