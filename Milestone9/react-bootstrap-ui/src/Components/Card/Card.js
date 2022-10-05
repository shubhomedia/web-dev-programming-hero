import React from 'react';
import './Card.css';
import { Button } from 'react-bootstrap';
const Card = (props) => {
    const { name, image, description } = props.item;
    return (
        <div>

            <div className="col">
                <div className="card">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <Button variant='danger'>Show More</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;