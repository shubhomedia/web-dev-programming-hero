import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadComments></LoadComments>
    </div>
  );
}

function LoadComments() {
  const [comments, setcomments] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setcomments(data))
  }, [])
  return (
    <div>
      <h3>Load Comment:</h3>{
        comments.map(comment => <Comment title={comment.title} body={comment.body}></Comment>)
      }
    </div>
  )
}

function Comment(props) {
  return (
    <div>
      <h4>{props.title}</h4>
      <h5>{props.body}</h5>
    </div>
  )
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
