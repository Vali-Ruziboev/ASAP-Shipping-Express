import { useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { states } from './Data'
import Header from './Header'
import PageNotFound from './PageNotFound';
import WeShipEveryWhere from './WeShipEveryWhere';
const State = () => {
    const location = useLocation()
    const { state } = useParams()
    const history = useHistory()
    console.log(location.pathname, `${state}/vehicle_information`);
    useEffect(()=>{
        console.log('pushing');
        history.push(`/${state}`)
    },[])
    if(location.pathname==`/${state}/vehicle_information`||location.pathname==`/${state}/contact_information`||location.pathname==`/${state}/`||location.pathname==`/${state}/quote_submitted`){
        history.push(`/${state}`)
    }
    if(Object.keys(states).includes(state)&&location.pathname===`/${state}`){
        console.log(states[state][0].title);
        return (
            <div>
                <Header intro={states[state][0].title} image={states[state][0].img}/>
                <div className="state">
                    {states[state].map((s, index)=>{
                        return(
                            <div key={index} className="paragraph">
                                <h1>{s.header}</h1>
                                {s.content.split('\n').map((sp, i)=>{
                                    return(<p key={i}>{sp}</p>)
                                })}
                            </div>
                        )
                    })}
                </div>
                <WeShipEveryWhere/>
            </div>
        );
    }else{
        <PageNotFound/>
    }
}

export default State;