import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards/Cards';
import { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import News from './Components/News/News';

function App() {
  const [news,setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-11-04&sortBy=publishedAt&apiKey=44be5ddc3196429099aea65c71369ed9')
    .then(res=>res.json())
    .then(data => setNews(data.articles));
  },[])
  return (
    <div>
      {news.length ===0 ? <span> Loading </span> : <span>Done</span> }
      {
        news.length ===0 ?
        <Spinner animation="border"/>
        :
        <Row xs={1} md={3} className="g-4">
        {
          news.map(nw => <News news={nw} ></News>)
        }
      </Row>
      }
      
    </div>
  );
}

export default App;
