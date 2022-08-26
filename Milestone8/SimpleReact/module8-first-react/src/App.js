import logo from './logo.svg';
import './App.css';

const nameValue = {
  Name: 'MD.Owes Quruny Shubho',
  Title: 'Web Developer'
}
function App() {
  return (
    <div className="App">
      <Person></Person>
    </div>
  );
}

function Person() {
  return (
    <div className="personCard">
      <h1>Name: {nameValue.Name}</h1>
      <h2>Title: {nameValue.Title}</h2>
    </div>
  );
}

export default App;
