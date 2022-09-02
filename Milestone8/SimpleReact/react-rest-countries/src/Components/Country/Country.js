import React from 'react';
import './Country.css';
const Country = (props) => {

    return (
        < div className='country' >
            {/* <h2>Name: {props.listofcountry.name}</h2> */}
            <h2>Name: {props.name}</h2>
            <h4>Capital: {props.capital}</h4>
        </div >
    );
};

export default Country;