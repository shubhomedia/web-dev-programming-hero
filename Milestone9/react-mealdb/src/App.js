import logo from './logo.svg';
import './App.css';
import MealCard from './Components/MealCard/MealCard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import MealSearch from './Components/MealSearch/MealSearch';
import { Box, Grid } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <MealCard></MealCard>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/mealsearch">
            <MealSearch></MealSearch>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

      </Router>

    </div >
  );
}

export default App;
