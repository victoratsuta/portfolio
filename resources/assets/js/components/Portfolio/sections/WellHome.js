import React, {Component} from 'react';
import ParallaxMousemove from 'react-parallax-mousemove';
import Pattern from './../parts/Pattern'

const style = {
    outter: {
        background: 'white',
        width: '100%',
        position: 'relative',
        overflow: 'hidden'
    },
    bgLayerStyle: {
        backgroundImage: 'url(../imgs/Skyline.png)',
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


class WellHome extends Component {


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

                    classname="WellHome"
                    logo='../imgs/wh.jpg'
                    url={''}
                    effectClassIn='lightSpeedIn'
                    effectClassOut='lightSpeedOut'
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
                            </div>
                        </div>
                    )}

                    description={_ => (

                        <div className={'description'}>
                            <p>
                                I have developed CRM system in order
                                to automate business processes in the
                                company engaged in the sale of real estate - <b><a href={'http://www.welhome.ru/'}
                                                                                   target={'blank'}>Welhome</a></b>
                                <span>,
                                based on SugarCRM; designed the database and system architecture; integration with
                                existing enterprise systems</span>
                            </p>
                        </div>
                    )}

                    figure={_ => (

                        <div>

                        </div>
                    )}

                    logoDescription={_ => (
                        <p>
                            <h1 className={'header'}>WELHOME</h1>
                            <p className={'paragraph'}>CRM system for real estate company</p>
                        </p>
                    )}

                />

            </ParallaxMousemove>
        )
    }
}

export default WellHome;
