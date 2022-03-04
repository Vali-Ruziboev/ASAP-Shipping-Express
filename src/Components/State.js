import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { states } from './Data'
import Footer from './Footer';
import Header from './Header'
import PageNotFound from './PageNotFound';
import WeShipEveryWhere from './WeShipEveryWhere';
const State = () => {
    const { state } = useParams()
    const history = useHistory()
    useEffect(()=>{
        history.push(`/${state}`)
    },[])
    
    if(Object.keys(states).includes(state)){
        return (
            <div key={state}>
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
                <Footer />
            </div>
        );
    }else{
        return(
            <PageNotFound/>
        )
        
    }
}

export default State;