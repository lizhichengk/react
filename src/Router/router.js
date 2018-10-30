import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../view/Home';
import About from '../view/About';
import NorFound from '../view/NotFound';

const Routes = () =>{
    <Router>
        <Route path='/home' component = {Home}/>
        <Route path='/about' component = {About}/>
        <Route path='/' component = {NorFound}/>
    </Router>
}
export default Routes;