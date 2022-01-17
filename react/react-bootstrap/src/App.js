import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';

function App() {
  const item = [
    {name:'first name',description:'lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20',
    image : 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png'
  },{name:'first name',description:'lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20',
  image : 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png'
},{name:'first name',description:'lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20',
image : 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png'
},{name:'first name',description:'lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20',
image : 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png'
},{name:'first name',description:'lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20',
image : 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png'
},{name:'first name',description:'lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20',
image : 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png'
},{name:'first name',description:'lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20',
image : 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png'
},{name:'first name',description:'lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20',
image : 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png'
}
  ]
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 p-5">
      {
        item.map (item=><Card
        item={item}
        ></Card>)
      }
    </div>
  );
}

export default App;
