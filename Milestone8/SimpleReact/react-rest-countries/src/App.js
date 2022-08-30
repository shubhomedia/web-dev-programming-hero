import logo from './logo.svg';
import './App.css';
// import React, { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">

    </div>
  );
}

// function Countries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v2/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, [])
//   return (
//     <div>
//       <h2>Travel Around The World!</h2>
//       <h3>Country Avaiable: {countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name} capital={country.capital} ></Country>)
//       }
//     </div>
//   )
// }

// function Country(props) {
//   return (
//     <div>
//       <h2>Country Name : {props.name}</h2>
//       <h4>Country Capital : {props.capital}</h4>
//     </div>
//   )
// }
export default App;
