import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Error from './components/Error';
import Follow from './pages/Follow';
import SliderComp from './components/SliderComp';
 
function App(){
  return (      
    <BrowserRouter>
    <div>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About}/>
          <Route path="/follow" component={Follow}/>
          <Route component={Error}/>
        </Switch>
    </div> 
  </BrowserRouter>
  )
};
  

 
export default App;
