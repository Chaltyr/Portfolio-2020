import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage';
import About from './pages/about';
import Projects from './pages/projects';
import Layout from './components/Layout';
import Contact from './pages/contact';

function App() {
  return (
    <Layout>
         <div className="App" >
      
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
        <Route path="/contact">
          <Contact/>
        </Route>
      </Switch>
    </div>
    <footer style={{
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: '10px',
      paddingTop: '10px',
      backgroundColor: 'black',
      color: 'white'

    }}>
      Made by<a href="www.linkedin.com/in/louis-wong-king-dinn-22a156118"> Louis Wong</a> @ 2020
    </footer>
    </Layout>
 
  );
}

export default App;
