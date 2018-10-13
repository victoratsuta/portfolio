import React, {Component} from 'react';
import Loading from './lib/Loading';
import {connect} from 'react-redux'
import './scss/Preloader.scss'
import {URLS} from './../../constants/urls'

function mapStateToProps(state) {
    return {
        preloader: state.preloader,
        page: state.page,
        menu: state.menu
    }
}

class Preloader extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (

                <div className="ip-header" id="preloader_container">
                    <h1 className="ip-logo">

                        <img className={"ip-inner " + (this.props.menu.status &&  URLS.main === this.props.page.page ? 'main-light' : 'main-dark')} id="img_loader"
                             src={'../imgs/logo.png'}
                             />
                    </h1>
                    <div className="ip-loader">
                        <svg className="ip-inner" width="60px" height="60px" viewBox="0 0 80 80">
                            <path className="ip-loader-circlebg"
                                  d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"/>
                            <path id="ip-loader-circle" className="ip-loader-circle"
                                  d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"/>
                        </svg>
                    </div>
                    <Loading/>
                </div>
        )
    }
}

export default connect(mapStateToProps)(Preloader);
