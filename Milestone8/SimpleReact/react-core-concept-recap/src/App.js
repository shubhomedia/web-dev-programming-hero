import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}



function Counter() {
  const [count, setcount] = useState(0);
  const handleIncrease = () => setcount(count + 1);
  const handleDecrease = () => setcount(count - 1);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrease}>Increase: </button>
      <button onClick={handleDecrease}>Decrease: </button>
    </div>
  )
}

export default App;
