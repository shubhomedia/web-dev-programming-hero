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
                countries.map(listofcountry => <Country
                    country={listofcountry}
                    name={listofcountry.name}
                    capital={listofcountry.capital}
                ></Country>
                )
            }
        </div>
    );
};

export default Countries;