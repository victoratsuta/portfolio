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

        width: '100vw',
        height: '100vh',
        position: 'absolute',
        overflow: 'hidden',
        background: 'rgba(0,0,0, 0.4)'

    }
}

class Houses extends Component {

    componentWillReceiveProps(nextProps) {

        if (nextProps.page.page === URLS.houses) {

            $('#fp-nav ul li a span').addClass('houses-bg')

        } else {

            $('#fp-nav ul li a span').removeClass('houses-bg')

        }

    }

    render() {
        return (

            <div style={style.outter}>
                <div style={style.bgLayerStyle}/>
                <Pattern

                    classname="Houses"
                    logo={null}
                    logoText={'HOOMES'}
                    url={''}
                    effectClassIn='zoomIn'
                    effectClassOut='zoomOut'
                    technologies={_ => (

                        <div className={'technologies'}>
                        </div>
                    )}

                    description={_ => (

                        <div className={'description'}>
                            <p>

                                I have developed the project, including the development of the backend part on Laravel,
                                and the frontend on VueJs; design of architecture;
                                code review of team members
                            </p>
                        </div>
                    )}

                    figure={_ => (

                        <div>
                           
                        </div>

                    )}

                    logoDescription={_ => (
                            <p className={'paragraph'}>The system for design and buying a construction project of building</p>
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

export default connect(mapStateToProps, {})(Houses);
