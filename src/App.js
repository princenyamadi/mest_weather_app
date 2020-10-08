import React from 'react';
import {BrowserRouter as Router,
        Switch,
        Route,
        Link,

}from "react-router-dom";
import LoginScreen from './components/LoginScreen.jsx';
import HomeScreen  from './components/HomeScreen';


import './App.css';

function App() {
  return (
    <Router>

   
    <div className="App">
      
      <Switch>
        <Route exact path="/">
          <LoginScreen/>
        </Route>
        <Router path="/home">
          <HomeScreen/>
        </Router>
      </Switch>


      <HomeScreen/>
    </div>
    </Router>
  );
}

export default App;
