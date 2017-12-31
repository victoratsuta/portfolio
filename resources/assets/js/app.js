require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Home from './components/Home';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import Portfolio from './components/Portfolio';
console.log('change');
render(
        <Router history={browserHistory}>
            <Route path="/" component={Home}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/contacts" component={ContactMe}/>
            <Route path="/portfolio" component={Portfolio}/>
        </Router>
    ,
            document.getElementById('portfolio')
)











