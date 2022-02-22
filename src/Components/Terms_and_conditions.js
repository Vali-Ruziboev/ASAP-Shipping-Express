import Header from "./Header";
import { terms_and_conditions } from './Data'

const Terms_and_conditions = () => {
    return ( 
        <div>
            <Header />
            <div className="terms_conditions">
                <h3>Terms and Conditions</h3>
                {terms_and_conditions.map((d, index)=>{
                    return(
                        <p key={index}>{`${index+1}.${d}`}</p>
                    )
                })}
            </div>
        </div>
    );
}

export default Terms_and_conditions;