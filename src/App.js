import { hot } from 'react-hot-loader/root';
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import LeagueInfo from './components/LeagueInfo/LeagueInfo';

function App() {
  return (
    <div >
      <Router>
      
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/leagueId/:id">
            <LeagueInfo></LeagueInfo>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default hot(App);
