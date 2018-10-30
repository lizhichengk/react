import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import ControlPanel from './components/ControlPanel';
import store from './Stores/Store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {HashRouter,Route,Link} from 'react-router-dom';
import Home from './view/Home';
import About from './view/About';
import NotFound from './view/NotFound';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <Link to='/'><div>react App</div></Link>
                <Link to='/home' />Home
                <Link to='/About' />About
                <Link to='/notFound' />NotFound
                <Route path='/' exact component={App}></Route>
                <Route path='/home' component={Home}></Route>
                <Route path='/about' component={About}></Route>
                <Route path='/notFound' component={NotFound}></Route>
            </div>
        </HashRouter>
    </Provider>
    ,document.getElementById('root')
    );
registerServiceWorker();
