import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

// const HeroDb = [
//   { name: 'Amir Khan', movie: 'Tare Zamen Par' },
//   { name: 'Salman Khan', movie: 'Tere Naam' },
//   { name: 'Sharuk Khan', movie: 'DDLJ' },
//   { name: 'Anil Kapor', movie: 'Slumdog Millionaire' }
// ];

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleincrease = () => setCount(count + 1);
  const handledecrease = () => setCount(count - 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleincrease}>Increase</button>
      <button onClick={handledecrease}>Decrease</button>
    </div>
  )
}

// function ActorName(props) {
//   return (
//     <div className="actorName">
//       <h1>Actor Name:{props.name}</h1>
//       <h2>Movie Name:{props.movie}</h2>
//     </div>
//   )
// }

// {
//   HeroDb.map(hero => <ActorName name={hero.name} movie={hero.movie}></ActorName>)
// }

// function Person(props) {
//   console.log(props);
//   return (
//     <div className="personCard">
//       <h1>Name: {props.Name}</h1>
//       <h2>Title: {props.Title}</h2>
//     </div>
//   );
// }

// function ProgrammingLang(props) {
//   return (
//     <div className="programmingLang">
//       <h1>Programming Language Name: {props.name}</h1>
//       <h2>Programming Language Year: {props.year}</h2>
//     </div>
//   );
// }


/* <Person Name="Jamal" Title="Student"></Person>
      <Person></Person>
      <Person Name="Shubho" Title="Web Developer"></Person>
      <ProgrammingLang name="Go" year="2013"></ProgrammingLang>
      <ProgrammingLang name="Java" year="1993"></ProgrammingLang>
      <ProgrammingLang name="Python" year="1992"></ProgrammingLang> */

export default App;
