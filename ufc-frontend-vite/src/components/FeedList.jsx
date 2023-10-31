import { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";
import axios from "axios";

function FeedList(){
    const [feedData, setFeed] = useState(null)
    useEffect(() => {
      const fetchdata = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/feed/")
            setFeed(response.data.results.posts)
        } catch (error) {
            console.log(error)
        }
      };
      fetchdata();
    
    }, [])
    
    if (feedData){
        return(
            <div className="feed-container">

            {feedData.map((post, index) => (
                <div key={index} className="post-list">
                    <img src={post.cover} alt=""  className="post-cover"  />
                    <Link to={`/post/${post.id}/`} className="post-link">{post.title}</Link>
                </div>
                
            ))}
            </div>
        )
    }else{
        return(
            <>
            <div>
                <h1>Loading...</h1>
            </div>
            </>
        )
    }
}

export default FeedList;