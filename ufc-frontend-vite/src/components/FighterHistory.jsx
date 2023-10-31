import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

function FighterHistory(){
    const [fights, setFights] = useState(null)
    const {slug} = useParams()
    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/participations/${slug}/`)
                setFights(response.data)
            } catch (error) {
                console.log(error)
            }

        }; fetchData()
    },
    [slug])

    if (fights){
        return(
            <>
            <div className="fight-history">
                {fights.map((fight, index) => (
                    <div className="fight-small" key={index}>
                        <h1>{fight.name}</h1>
                        <div className="img-container">
                         {fight.comperitors.map((competitor, i) => (
                            <div className="f_container" key={i}>
                               <img src={`http://127.0.0.1:8000/${competitor.fighter.c_photo}/`} alt="" />
                               {competitor.victory == true ? <h3>Victory</h3> : <h3>Loss</h3>}
                            </div>
                            
                        ))}   
                        </div>
                        
                    </div>
                ))}
            </div>
            </>
        )
    }else{
        return(
            <>
            <div>
                <h1>No data</h1>
            </div>
            </>
        )
    }
}
export default FighterHistory;