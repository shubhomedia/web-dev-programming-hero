import logo from './logo.svg';
import './App.css';
import GrandFather from './Components/GrandFather/GrandFather';
import { createContext, useCallback, useState } from 'react';

export const RingContext = createContext('Ring');




function App() {
  const [house, setHouse] = useState(1);
  const ornaments = 'Platinam Ring';
  return (
    <RingContext.Provider value={[ornaments, house]}>
      <div className="App">
        <button onClick={() => setHouse(house + 1)}>Buy New House</button>
        <GrandFather house={house} ornaments={ornaments}></GrandFather>
      </div>
    </RingContext.Provider>
  );
}

export default App;
