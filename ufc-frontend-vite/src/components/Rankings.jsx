import React, {useState, useEffect} from 'react'
import axios from 'axios'

function RankingList(){
  	// Defining states values
    const [rankingsData, setRankingData] = useState(null)
		// use useEffect function
    useEffect(() => {
		// fetch data asynchronously, with try and catch for better error handilng
      const fetchData = async () => {
        try {
          const response = await axios.get("http://127.0.0.1:8000/api/rankings/")
          setRankingData(response.data.rankings)
        } catch (error) {
          console.error("Error at fetching data", error)
        }
      }
      fetchData();
    },
    []
  )
  if (rankingsData){
    return (
        <div className='rankings-container'>
          
            {rankingsData.map((ranking, index) => (
              <div key={index} className='ranking-container'>
                <h3>{ranking.weight_division.name}</h3>
                {ranking.fighters.map((fighter, i) => (
                  <div key={i} className={fighter.champion ? "champion-ranking-spot" : "ranking-spot"}>
                    {fighter.champion ? <img src={`http://127.0.0.1:8000/${fighter.fighter.c_photo}/`} /> : null}
                    <h4>{fighter.champion ? 'Champion' : null}</h4>
                  <h5><strong>{fighter.champion == false ? fighter.rank_number : null}</strong> {fighter.fighter.full_name}</h5>
                    {/* <h4>{fighter.interm_champion ? 'IC' : null}</h4> */}
                  </div>
                ))}
              </div>
            ))}
        </div>
    )
  }else{
    return (
      <h1>No data...</h1>
    )
  }
}
export default RankingList