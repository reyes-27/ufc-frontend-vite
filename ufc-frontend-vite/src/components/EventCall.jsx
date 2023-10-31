import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Bout from './Bout';

function EventCall() {
  const [eventData, setEventData] = useState(null);
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/events/${id}/`);
        setEventData(response.data.event);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [id]);

  if (eventData) {
    return (
      <div>
        <h1>{eventData.name}</h1>
        <p>{eventData.description}</p>
        {eventData.bouts.map((bout, index) => (
          <Bout key={bout.id} bout={bout} />
        ))}
        
      </div>
    );
  } else {
    return (
    <div>Loading...</div>
    );
  }
}

export default EventCall;

