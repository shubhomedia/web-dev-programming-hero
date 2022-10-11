import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data));
    }, [])

    return (
        <div>
            <h2>Post Details: {postId}</h2>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetails;