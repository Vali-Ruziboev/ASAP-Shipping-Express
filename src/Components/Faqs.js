import { useLocation } from "react-router-dom";
import Header from "./Header";

const Faqs = () => {
    const location = useLocation()
    console.log(location);
    return ( 
        <>
            <Header />
            <div>
                <h2>Faqs</h2>
            </div>
        </>
    );
}

export default Faqs;