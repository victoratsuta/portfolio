import React, {Component} from 'react';
import ParallaxMousemove from 'react-parallax-mousemove';
import Constants from "../../../constants/constants";
import Pattern from './../parts/Pattern'

const style = {
    Houses__outter: {
        backgroundPosition: 'center',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        height: '100vh',
    },
    Houses__bgLayerStyle: {
        backgroundImage: 'url(../imgs/city.jpg)',
        filter: 'opacity(50%) brightness(50%)',

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

class Houses extends Component {

    render() {
        return (

            <ParallaxMousemove containerStyle={style.Houses__outter}>
                <ParallaxMousemove.Layer layerStyle={style.Houses__bgLayerStyle} config={{
                    xFactor: 0.1,
                    yFactor: 0.1,
                    springSettings: {
                        stiffness: 30,
                        damping: 15
                    }
                }}>

                </ParallaxMousemove.Layer>

                <Pattern

                    classname="Houses"
                    logo={null}
                    logoText={'HOOMES'}
                    url={''}
                    effectClassIn='zoomIn'
                    effectClassOut='zoomOut'
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

                                Development of the project, including the development of the backend part on Laravel. And the frontend on VueJs. Design of architecture. Code review team members
                            </p>
                        </div>
                    )}

                    figure={_ => (

                        <div>
                           
                        </div>

                    )}

                    logoDescription={_ => (
                            <p className={'paragraph'}>A system for assembling and buying a project for building a house</p>
                    )}

                />

            </ParallaxMousemove>
        )
    }
}

export default Houses;
