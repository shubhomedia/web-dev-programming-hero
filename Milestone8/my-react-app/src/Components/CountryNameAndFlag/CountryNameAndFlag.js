import React, { useEffect, useState } from 'react';
import './CountryNameAndFlag.css';
const CountryNameAndFlag = () => {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data));
    }, [])

    return (
        <div>
            <h3>Total Country : {country.length}</h3>
            {
                country.map(country => <Country name={country.name.common} flag={country.flags.png} ></Country>)
            }
        </div>
    );
};

function Country(props) {
    return (
        <div className="country">
            <h5>Country Name : {props.name}</h5>
            <img src={props.flag} alt="" />
        </div>
    );
}

export default CountryNameAndFlag;