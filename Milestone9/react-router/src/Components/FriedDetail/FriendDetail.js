import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, []);

    return (
        <div>
            <h2>Friend Detail {friendId}</h2>
            <h3>Name:  {friend.name}</h3>
            <h5>Phone: {friend.phone}</h5>
            <p>Company: {friend.company?.name}</p>

        </div>
    );
};

export default FriendDetail;