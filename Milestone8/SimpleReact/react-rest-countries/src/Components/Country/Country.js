import React from 'react';

const Country = (props) => {
    return (
        < div className='country' >
            <h2>Name: {props.name}</h2>
            <h3>Capital: {props.capital}</h3>
            <h4>Population: {props.population}</h4>
            <img className='flag' src={props.flag}></img>
        </div >
    );
};

export default Country;