import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './pages/Homepage';
import Navbar from './components/navbar';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <Navbar/>
      </div>
      <Switch>
        <Route exact path="/">
           <HomePage/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/projects">
          <Projects/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
