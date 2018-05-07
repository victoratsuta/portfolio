import React, {Component} from 'react';
import ParallaxMousemove from 'react-parallax-mousemove';
import Constants from "../../../constants/constants";
import Pattern from './../parts/Pattern'

const style = {

    Smoke_Zone__outter: {
        background: 'black',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
        position: 'relative',
        overflow: 'hidden'
    },
    Smoke_Zone__bgLayerStyle: {
        position: 'absolute',
        height: '100%',
    }
};


class Smoke_Zone extends Component {


    render() {
        return (
            <ParallaxMousemove containerStyle={style.Smoke_Zone__outter}>
                <ParallaxMousemove.Layer layerStyle={style.Smoke_Zone__bgLayerStyle} config={{
                    xFactor: 0.05,
                    yFactor: 0.05,
                    springSettings: {
                        stiffness: 50,
                        damping: 30
                    }
                }}>
                    <img src={'../imgs/2.png'}></img>
                </ParallaxMousemove.Layer>

                <Pattern

                    classname="Smoke_Zone"
                    logo='../imgs/hookah3.svg'
                    url={Constants.smokeZone}
                    effectClassIn='flipInX'
                    effectClassInOut='flipOutX'
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
                                Full development of an online store, the sale of tobacco products based on a unique MVC
                                core.
                                Promotion and Support. Development of a flexible administrative system and a subsystem
                                of content management.
                            </p>
                        </div>
                    )}

                    figure={_ => (

                        <div>
                            <span>View</span>
                            <span>Smoke-Zone</span>
                        </div>
                    )}

                    logoDescription={_ => (
                        <p>
                            <h1 className={'header'}>SMOKE-ZONE</h1>
                            <p className={'paragraph'}>online store selling tobacco for shisha</p>
                        </p>
                    )}

                />

            </ParallaxMousemove>
        )
    }
}

export default Smoke_Zone;
