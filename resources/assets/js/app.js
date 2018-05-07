require('./bootstrap');

import React from 'react';
import {render} from 'react-dom';
import {
    BrowserRouter as Router,
} from 'react-router-dom'

import Content from './components/Content/Content'
import Preloader from './components/Preloader/Preloader'
import Menu from './components/Menu/Menu'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers/index'

import './app.scss'

const store = createStore(reducers)

// Жить было бы проще если бы у жизни был исходный код ...

render(
    <Router>
        <div className="global-wrapper">
            <Provider store={store}>
                <div id="ip-container" className="ip-container">

                    <div>
                        <Menu/>
                        <Preloader/>
                    </div>

                    <Content/>

                </div>
            </Provider>
        </div>
    </Router>
    ,
    document.getElementById('app')
)











