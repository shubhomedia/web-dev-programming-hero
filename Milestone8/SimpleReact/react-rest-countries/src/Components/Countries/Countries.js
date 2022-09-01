import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])
    return (
        <div>
            <h1>Total Country: {countries.length}</h1>
            {
                countries.map(country => <Country
                    name={country.name}
                    capital={country.capital}
                    population={country.population}
                    flag={country.flag}
                ></Country>
                )
            }
        </div>
    );
};

export default Countries;