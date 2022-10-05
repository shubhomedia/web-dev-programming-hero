import logo from './logo.svg';
import './App.css';
import Card from './Components/Card/Card';
import { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import News from './Components/News/News';

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=44be5ddc3196429099aea65c71369ed9')
      .then(res => res.json())
      .then(data => setNews(data.articles));
  }, []);

  return (
    <div className="App">
      {news.length === 0 ?
        <Spinner animation="border" variant="primary" />
        :
        <Row xs={1} md={3} className="g-4">
          {
            news.map(nw => <News news={nw}></News>)
          }
        </Row>
      }
    </div>
  );
}

export default App;
