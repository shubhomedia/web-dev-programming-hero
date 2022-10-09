import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css';
const Friend = (props) => {
    const { name, phone, website, id } = props.friend;
    const history = useHistory();
    const url = `/friend/${id}`;
    const handlefriend = () => {
        history.push(`/friend/${id}`)
    }
    return (
        <div className='friend-single'>
            <h2>I Am {name} </h2>
            <h4>Call Me {phone}</h4>
            <p>My  Web Address: <b>{website}</b></p>
            <Link to={url}>Visit</Link>
            <br />
            <button onClick={handlefriend}>Get Detail</button>
        </div >
    );
};

export default Friend;