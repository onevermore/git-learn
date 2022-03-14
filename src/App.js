import React, {useState, useEffect} from 'react';
import './App.css';
import './components/Drawer';
import classnames from 'classnames';
import {HomePage} from './pages/Home';
import {AboutPage} from './pages/About';
import {LessonsPage} from './pages/Lessons';
import {NavMenu} from './components/NavMenu';
import {Drawer} from './components/Drawer';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {



  return (
    <BrowserRouter>
      
    <Route render={()=> (
           <>
            <NavMenu/>
            <Drawer/>
           <Route path="/" exact component={HomePage} />
           <Route path="/courses" component={LessonsPage} />
           <Route path="/about" component={AboutPage} />
           </>

)} />


    </BrowserRouter>
  );
}

export default App;
