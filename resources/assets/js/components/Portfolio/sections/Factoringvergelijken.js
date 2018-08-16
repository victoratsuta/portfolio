import React, {Component} from 'react';
import ParallaxMousemove from 'react-parallax-mousemove';
import Pattern from './../parts/Pattern'
import Constants from '../../../constants/constants'

const style = {
    outter: {
        background: 'white',
        width: '100%',
        position: 'relative',
        overflow: 'hidden'
    },
    bgLayerStyle: {
        backgroundImage: 'url(../imgs/profil_city.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '110%',
        position: 'absolute',
        overflow: 'hidden',
        minHeight: '40vh',
        marginLeft: '-5%',
        marginBottom: '-2%',

    }
}


class Factoringvergelijken extends Component {


    render() {
        return (
            <ParallaxMousemove containerStyle={style.outter}>
                <ParallaxMousemove.Layer layerStyle={style.bgLayerStyle} config={{
                    xFactor: 0.05,
                    yFactor: 0.05,
                    springSettings: {
                        stiffness: 50,
                        damping: 30
                    }
                }}>

                </ParallaxMousemove.Layer>

                <Pattern

                    classname="Factoringvergelijken"
                    logo='../imgs/logo_f.png'
                    url={Constants.factoringvergelijken}
                    effectClassIn='bounceIn'
                    effectClassOut='zoomOutUp'
                    technologies={_ => (

                        <div className={'technologies'}>
                            <div>
                                <div/>
                                <div/>
                                <div/>
                            </div>
                            <div>
                                <div/>
                                <div/>
                                <div/>
                            </div>
                        </div>
                    )}

                    description={_ => (

                        <div className={'description'}>
                            <p>
Development in the team application on Yii2, interface design. Modification of modules in the administration panel
                            </p>
                        </div>
                    )}

                    figure={_ => (

                        <div>
                            <span>View</span>
                            <span>factoring</span>
                        </div>
                    )}

                    logoDescription={_ => (
                        <p>
                            <p className={'paragraph'}>
                                System for providing factoring services
                            </p>
                        </p>
                    )}

                />

            </ParallaxMousemove>
        )
    }
}

export default Factoringvergelijken;
