import React from 'react';
import './App.css';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
     
    <Switch> 
          <Route exact path="/search">
             <SearchPage/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
