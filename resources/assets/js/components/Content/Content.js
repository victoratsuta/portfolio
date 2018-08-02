import React, {Component} from 'react';
import Home from './../Home/Home'
import Skills from './../Skills/Skills'
import Contact from './../Contact/Contact'
import Portfolio from './../Portfolio/Portfolio'
import {URLS} from './../../constants/urls'

import {
    Route,
} from 'react-router-dom'

import './scss/Content.scss'
import {connect} from "react-redux";


function mapStateToProps(state) {
    return {
        menu: state.menu
    }
}

class Content extends Component {

    constructor(props) {

        super(props)

    }

    render() {
        return (
            <div id="main_container" className={this.props.menu.status ? 'main-light' : 'main-dark'}>
                <Route exact path={URLS.url_skills} component={Skills}/>
                <Route exact path={URLS.url_contacts} component={Contact}/>
                <Route exact path={URLS.url_portfolio} component={Portfolio}/>
                <Route exact path={URLS.url_home} component={Home}/>
            </div>
        )
    }

}

export default connect(mapStateToProps)(Content);











