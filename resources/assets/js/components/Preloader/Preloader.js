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
                             src="data:image/png;base64,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"
                             />
                    </h1>
                    <div className="ip-loader">
                        <svg className="ip-inner" width="60px" height="60px" viewBox="0 0 80 80">
                            <path className="ip-loader-circlebg"
                                  d="M40,10C57. 351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"/>
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
