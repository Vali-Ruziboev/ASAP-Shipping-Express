import { useParams } from 'react-router-dom';
import { states } from './Data'
import Header from './Header'
import WeShipEveryWhere from './WeShipEveryWhere';
const State = () => {
    const { state } = useParams()
    if(Object.keys(states).includes(state)){
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
    }
}

export default State;