import React, {Component} from 'react';
import ParallaxMousemove from 'react-parallax-mousemove';
import Constants from "../../../constants/constants";
import Pattern from './../parts/Pattern'

const style = {
    History24__outter: {
        backgroundPosition: 'center',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        height: '100vh',
    },
    History24__bgLayerStyle: {
        backgroundImage: 'url(../imgs/history.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '120vw',
        position: 'absolute',
        overflow: 'hidden',
        minHeight: '110vh',
        marginLeft: '-5%',
        marginBottom: '-2%',

    }
}

class History24 extends Component {

    render() {
        return (

            <ParallaxMousemove containerStyle={style.History24__outter}>
                <ParallaxMousemove.Layer layerStyle={style.History24__bgLayerStyle} config={{
                    xFactor: 0.05,
                    yFactor: 0.05,
                    springSettings: {
                        stiffness: 50,
                        damping: 30
                    }
                }}>

                </ParallaxMousemove.Layer>

                <Pattern

                    classname="History24"
                    logo='../imgs/pantheon2.svg'
                    url={Constants.history24}
                    effectClassIn='zoomIn'
                    effectClassOut='zoomOut'
                    technologies={_ => (

                        <div className={'technologies'}>
                            <div>
                                <div/>
                                <div/>
                                <div/>
                                <div/>
                            </div>
                            <div>
                                <div/>
                                <div/>
                                <div/>
                                <div/>
                            </div>
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

            </ParallaxMousemove>
        )
    }
}

export default History24;
