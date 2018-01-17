require('./bootstrap');
import React from 'react';
import {render} from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

import Home from './components/Home';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import Portfolio from './components/Portfolio';

render(
    <Router>
        <div>
            <Route exact path="/skills" component={Skills}/>
            <Route exact path="/contacts" component={ContactMe}/>
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/" component={Home}/>
        </div>
    </Router>
    ,
    document.getElementById('portfolio')
)











