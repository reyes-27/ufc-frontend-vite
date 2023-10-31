import axios from "axios";
import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function EventList(){
  const [events, setEventList] = useState(null)
  const {q} = useParams()
  useEffect(() => {
    const fetchData = async () => {
      try {
        let endpoint = `http://127.0.0.1:8000/api/events${ q ? `?q=${q}` : "/" }`
        const response = await axios.get(endpoint)
        setEventList(response.data.results.events)
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
  };
  fetchData()
},
[q] 
)
if (events){
  return(
    <div className="events-container">
      <ul className="nav nav-underline" style={{gap:50 + "px", margin:10 + "px"}}>
        <li className="nav-item">
          <Link className="nav-link" to={`/events/UP/`} style={{color:"#fe0000"}}>Upcomming events</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={`/events/FT/`} style={{color:"#fe0000"}}>Past events</Link>
        </li>
      </ul>
          <div className="event-list">
        {events.map((event) => (
          // <div key={event.id}>
          //   <Link to={`/event/${event.id}/`}>{event.name}</Link>
          // </div>
        <div className="card" style={{ width: "18rem", padding: 0 }} key={event.id}>
          <img src={event.cover} className="card-img-top" alt=":(" width={100 + "%"}/>
          <div className="card-body">
            <h5 className="card-title">{event.name}</h5>
            <p className="card-text">
              {event.description}
            </p>
            <Link to={`/event/${event.id}/`} className="btn btn-danger">
              {event.name} details
            </Link>
          </div>
        </div>
        ))}
        </div>
    </div>

  )
}else{
  return(
    <h1>Loading</h1>
  )
}
}

export default EventList;