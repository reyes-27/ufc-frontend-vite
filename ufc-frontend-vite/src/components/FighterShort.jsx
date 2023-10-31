import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EventsDetail() {
  const [data, setData] = useState(null);
  const [fighters, setFighters] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/events/1/');
        setData(response.data);
        setDataBouts(response.data.event.bouts);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  if (data && dataBouts) {
    const list_bouts = dataBouts.map((bout) =>
        <h1 >
            {bout.name}
        </h1>
    );

    return (
      <div>
        {list_bouts}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default EventsDetail;