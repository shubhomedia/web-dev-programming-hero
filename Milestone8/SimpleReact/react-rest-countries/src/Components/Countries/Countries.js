import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

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
            <div className='country-container'>
                {
                    countries.map(listofcountry => <Country
                        key={listofcountry.alpha2Code}
                        country={listofcountry}
                        name={listofcountry.name}
                        flag={listofcountry.flag}
                        capital={listofcountry.capital}
                    ></Country>
                    )
                }
            </div>

        </div>
    );
};

export default Countries;