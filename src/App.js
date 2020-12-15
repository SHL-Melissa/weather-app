import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Route, Switch, Link} from 'react-router-dom'

import './App.css'
import Home from './components/home'
import Berwick from './components/berwick'




const App = () => {


  return (
    <div className="App">
     <h1>WEB38 Cool Weather App</h1>
     <nav>
         <Link to='/berwick'>Berwick Weather</Link>
         <Link to='/'>Lambda Weather Home</Link>
     </nav>

     <Switch>
         <Route path='/berwick'>
             <Berwick />
         </Route>
         <Route exact path='/'>
             <Home />
         </Route>
     </Switch>
     <footer>
         <p>Made by WEB38</p>
     </footer>

    </div>
  );
};

export default App;