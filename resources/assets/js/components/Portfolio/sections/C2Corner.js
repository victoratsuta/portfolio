import React, {Component} from 'react';
import ParallaxMousemove from 'react-parallax-mousemove';
import Constants from '../../../constants/constants'
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
        backgroundImage: 'url(../imgs/stars.jpg)',
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

class C2Corner extends Component {

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

                    classname="C2Corner"
                    logo='../imgs/logo_c2corner.png'
                    url={Constants.c2corner}
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
                                Development of backend on Laravel and frontend on AngularJs, components for API work, payment operations, development and design of new functionality
                            </p>
                        </div>
                    )}

                    figure={_ => (

                        <div>
                            <span>View</span>
                            <span>C2Corner</span>
                        </div>

                    )}

                    logoDescription={_ => (
                        <p>
                            <p className={'paragraph'}>
                                Highly loaded platform for wholesale purchases and sales on the largest marketplaces such as Amazon, Ebay</p>
                        </p>
                    )}

                />

            </ParallaxMousemove>
        )
    }
}

export default C2Corner;