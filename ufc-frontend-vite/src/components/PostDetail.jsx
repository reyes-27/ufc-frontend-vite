import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from 'react-player';
import ReactHtmlParser from 'react-html-parser';

function PostDetail() {
    const [post, setPost] = useState(null);
    const {id} = useParams(); // replace with dynamic id if needed

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/feed/post/${id}/`);
                setPost(response.data.post);
            } catch (error) {
                console.error('An error occurred while fetching the post:', error);
            }
        };

        fetchData();
    }, [id]);

    return post ? (
        <div className="post">
            {console.log(post)}
            <img src={post.cover} alt="" className="post-cover" />
            <h1>{post.title}</h1>
            <div>{ReactHtmlParser(post.description)}</div>
            <ReactPlayer url={post.demo} playing={false} controls={true} playIcon={true} className="video-player"  width={480} height={272} />
        </div>
    ) : (
        <div>Loading...</div>
    );
}

export default PostDetail;