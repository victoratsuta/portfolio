import React, {Component} from 'react';
import ParallaxMousemove from 'react-parallax-mousemove';
import Constants from "../../../constants/constants";
import Pattern from './../parts/Pattern'
import {connect} from "react-redux";
import {URLS} from "../../../constants/urls";

const style = {
    outter: {
        backgroundPosition: 'center',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        height: '100vh',
    },
    bgLayerStyle: {
        backgroundImage: 'url(../imgs/history.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100vw',
        position: 'absolute',
        overflow: 'hidden',
        minHeight: '100vh',
        bottom : '0px'

    }
}

class History24 extends Component {

    componentWillReceiveProps(nextProps) {

        if (nextProps.page.page === URLS.history24) {

            $('#fp-nav ul li a span').addClass('history24-bg')

        } else {

            $('#fp-nav ul li a span').removeClass('history24-bg')

        }

    }


    render() {
        return (

            <div style={style.outter}>
                <div style={style.bgLayerStyle}/>

                <Pattern

                    classname="History24"
                    logo='../imgs/pantheon2.svg'
                    url={Constants.history24}
                    effectClassIn='zoomIn'
                    effectClassOut='zoomOut'
                    technologies={_ => (

                        <div className={'technologies'}>
                        </div>
                    )}

                    description={_ => (

                        <div className={'description'}>
                            <p>
                                I have build the educational platform,
                                based on the PHP framework - Laravel;
                                <span>
                                    designed the architecture of the system, wrote the frontend
                                using Bootstrap, Gulp, Jquery and other libraries
                                </span>
                            </p>
                        </div>
                    )}

                    figure={_ => (

                        <div>

                        </div>

                    )}

                    logoDescription={_ => (
                        <p>
                            <h1 className={'header'}>HISTORY.RF</h1>
                            <p className={'paragraph'}>Russian portal for online preparation for exams on history</p>
                        </p>
                    )}

                />

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        page: state.page,
        preloader: state.preloader,
    }
}

export default connect(mapStateToProps, {})(History24);

