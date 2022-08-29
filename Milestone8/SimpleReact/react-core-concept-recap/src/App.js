import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <MyComponent job={'WebDev'} title={'WPDev'}></MyComponent>
      <MyComponent job={'DBDev'} title={'Laravel'}></MyComponent>
      <MyComponent job={'ReactJS'} title={'FrontEnd'}></MyComponent>
    </div>
  );
}

function MyComponent(props) {
  return (
    <div className='myComponent'>
      <h1>Hello From Shubho, This is My Component</h1>
      <h2>Job: {props.job}</h2>
      <h2>Title: {props.title}</h2>
    </div>
  );
}
// function LoadComments() {
//   const [comments, setcomments] = useState([]);
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(res => res.json())
//       .then(data => setcomments(data))
//   }, [])
//   return (
//     <div>
//       <h3>Load Comment:</h3>{
//         comments.map(comment => <Comment title={comment.title} body={comment.body}></Comment>)
//       }
//     </div>
//   )
// }

// function Comment(props) {
//   return (
//     <div>
//       <h4>{props.title}</h4>
//       <h5>{props.body}</h5>
//     </div>
//   )
// }

// function Counter() {
//   const [count, setcount] = useState(0);
//   const handleIncrease = () => setcount(count + 1);
//   const handleDecrease = () => setcount(count - 1);
//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={handleIncrease}>Increase: </button>
//       <button onClick={handleDecrease}>Decrease: </button>
//     </div>
//   )
// }

export default App;
