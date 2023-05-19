import './App.css';
import { useEffect, useState } from 'react';
import CountryNameAndFlag from './Components/CountryNameAndFlag/CountryNameAndFlag';

// const data = [{
//   "name": "Hannie Aspall",
//   "job": "Structural Engineer",
//   "salary": 19933
// }, {
//   "name": "Leone Miller",
//   "job": "Professor",
//   "salary": 13635
// }, {
//   "name": "Billie Proudman",
//   "job": "Accountant I",
//   "salary": 10997
// }, {
//   "name": "Abbie Goldingay",
//   "job": "Systems Administrator I",
//   "salary": 14164
// }, {
//   "name": "Sheilah Champley",
//   "job": "Occupational Therapist",
//   "salary": 17002
// }, {
//   "name": "Dolph Peetermann",
//   "job": "Marketing Assistant",
//   "salary": 15371
// }, {
//   "name": "Brandice Boxhall",
//   "job": "Senior Developer",
//   "salary": 16678
// }, {
//   "name": "Agace Mourant",
//   "job": "Help Desk Operator",
//   "salary": 12555
// }, {
//   "name": "Fawn Chick",
//   "job": "Technical Writer",
//   "salary": 15770
// }, {
//   "name": "Augusta Dounbare",
//   "job": "Systems Administrator I",
//   "salary": 15619
// }]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>React JS API Work</h1> */}
        {/* <h2> Total API Data: {data.length}</h2>
        {
          data.map(person => <Person name={person.name} job={person.job} salary={person.salary}></Person>)
        }
        <Counter></Counter> */}
        {/* <ExternalUsers></ExternalUsers> */}

        <CountryNameAndFlag></CountryNameAndFlag>
      </header>
    </div>
  );
}

// function ExternalUsers() {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(data => setUsers(data));
//   })
//   return (
//     <div>
//       <h2>External Users</h2>
//       <p>{users.length}</p>
//     </div>
//   )
// }

//Create Person Function Component
// function Person(props) {
//   return (
//     <div className="person">
//       <h3>Name : {props.name}</h3>
//       <h4>Job : {props.job}</h4>
//       <h5>Salary : ${props.salary}</h5>
//     </div>
//   );
// }

// //create friend component
// function Friend(props) {
//   return (
//     <div className="friend">
//       <h3>Phone: {props.phone}</h3>
//       <h3>Address: {props.address}</h3>
//       <h3>Name: {props.name}</h3>
//     </div>
//   );
// }

// //create function counter component
// function Counter() {
//   const [count, setCount] = useState(10);//useState(0) is a function
//   const handleIncrease = () => setCount(count + 10); //setCount(count + 1) is a function
//   const handleDecrease = () => setCount(count - 10); //setCount(count - 1) is a function
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={handleIncrease}>Increase</button> {/*handleIncrease is a function*/}
//       <button onClick={handleDecrease}>Decrease</button> {/*handleDecrease is a function*/}
//     </div>
//   );
// }

export default App;
