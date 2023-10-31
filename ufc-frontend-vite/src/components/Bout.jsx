import { useState } from "react";
import { Link } from "react-router-dom";

function Bout({ bout }) {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleVisibility = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <div key={bout.id} className='bout' onClick={toggleVisibility}>
        <h2>{bout.name}</h2>
        <div className="competitors">
          {bout.comperitors.map((competitor, index) => (
            <>
              <div key={competitor.id} className='competitor'>
              <Link to={`/fighter/${competitor.fighter.fighter_slug}/`} className='fighter-link'>{competitor.fighter.full_name}</Link>
              <img src={`http://127.0.0.1:8000${competitor.fighter.c_photo}`} style={{ display: isExpanded ? 'none' : 'block',}} alt="Hi" />
              <img src={`http://127.0.0.1:8000${competitor.fighter.f_photo}`} className={`f_photo_${index}`} style={{ display: isExpanded ? 'block' : 'none', width: 185 + "px", height: 643 + "px"}} alt="" />
              <hr className={`${competitor.corner == "RC" ? "red" : "blue"}-corner`} />
                <div className='competitor-stats' style={{ display: isExpanded ? 'block' : 'none' }}>
                  <p>Nickname: {competitor.fighter.nickname}</p>
                  <p>Reach: {competitor.fighter.reach}</p>
                  <p>Height: {competitor.fighter.height}</p>
                  <p>Leg Reach: {competitor.fighter.leg_reach}</p>
                  <p>Weight: {competitor.fighter.weight}</p>
                  <p>Corner: {competitor.corner}</p>
                </div>
                
              </div>
                {index != 1 && <h1>VS</h1>}
            </>
          ))}
        </div>
      </div>
    );
  }

export default Bout