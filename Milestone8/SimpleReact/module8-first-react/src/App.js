import logo from './logo.svg';
import './App.css';

const nameValue = {
  Name: 'MD.Owes Quruny Shubho',
  Title: 'Web Developer'
}
function App() {
  return (
    <div className="App">
      <Person Name="Jamal" Title="Student"></Person>
      <Person></Person>
      <Person Name="Shubho" Title="Web Developer"></Person>
      <ProgrammingLang name="Go" year="2013"></ProgrammingLang>
      <ProgrammingLang name="Java" year="1993"></ProgrammingLang>
      <ProgrammingLang name="Python" year="1992"></ProgrammingLang>
    </div>
  );
}

function Person(props) {
  console.log(props);
  return (
    <div className="personCard">
      <h1>Name: {props.Name}</h1>
      <h2>Title: {props.Title}</h2>
    </div>
  );
}

function ProgrammingLang(props) {
  return (
    <div className="programmingLang">
      <h1>Programming Language Name: {props.name}</h1>
      <h2>Programming Language Year: {props.year}</h2>
    </div>
  );
}

export default App;
