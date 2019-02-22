import React, {Component} from 'react';
import Constants from "../../../constants/constants";
import Pattern from './../parts/Pattern'

const style = {

    outter: {
        background: 'black',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
        position: 'relative',
        overflow: 'hidden'
    },
    bgLayerStyle: {
        position: 'absolute',
        height: '100%',
    }
};


class Smoke_Zone extends Component {


    render() {
        return (
            <div style={style.outter}>
                <div style={style.bgLayerStyle}>
                    <img src={'../imgs/2.png'}></img>
                </div>

                <Pattern

                    classname="Smoke_Zone"
                    logo='../imgs/hookah3.svg'
                    url={Constants.smokeZone}
                    effectClassIn='flipInX'
                    effectClassOut='flipOutX'
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
                                I have developed the online store, based on the unique MVC
                                core;
                                <span>
                                    promotion and support;
                                   development of a flexible administration panel with content management features
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
                            <h1 className={'header'}>SMOKE-ZONE</h1>
                            <p className={'paragraph'}>online shop selling tobacco for hookah</p>
                        </p>
                    )}

                />

            </div>
        )
    }
}

export default Smoke_Zone;
