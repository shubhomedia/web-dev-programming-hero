import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React JS API Work</h1>
        <Person></Person>
        <Friend phone="01700000000" address="Dhaka"></Friend>
      </header>
    </div>
  );
}

//Create Person Function Component
function Person() {
  return (
    <div className="person">
      <h3>This is Person Function</h3>
    </div>
  );
}

//create friend component
function Friend(props) {
  return (
    <div className="friend">
      <h3>Phone: {props.phone}</h3>
      <h3>Address: {props.address}</h3>
    </div>
  );
}

export default App;
