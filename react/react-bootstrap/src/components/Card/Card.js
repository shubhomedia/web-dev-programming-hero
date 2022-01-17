import React from 'react';

const Card = (props) => {
    const {name,image,description} = props.item;
    return (
        <div>
            <div className="col">
        <div className="card">
          <img src={image} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Card;