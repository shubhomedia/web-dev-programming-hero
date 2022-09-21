import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
function App() {
  return (
    <div className="App">
      <Weather></Weather>
    </div>
  );
}

const Weather = () => {
  const [weather, setweather] = useState([]);
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0e4e48be15msh0555e6b5bc4ababp1a00c8jsn27b7137a7f37',
        'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
      }
    };

    fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5', options)
      .then(response => response.json())
      .then(data => setweather(data))
      .catch(err => console.error(err));
  }, [])
  return (
    <div>
      <h1>Name{weather}</h1>
    </div>
  );
};
export default App;
