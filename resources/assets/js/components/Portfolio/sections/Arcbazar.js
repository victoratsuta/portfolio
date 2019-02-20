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
}


class Arcbazar extends Component {


    render() {
        return (
            <ParallaxMousemove containerStyle={style.outter}>


                <Pattern

                    classname="Arcbazar"
                    logo='../imgs/arcbazar_logo.png'
                    url={Constants.arcbazr}
                    effectClassIn='flipInY'
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
                            <p className={'first'}>
                                My team and I have developed new features;
                            </p>

                            <p>
                                writing backend with Yii, Elasticsearch and MySQL;
                            </p>

                            <p className={'last'}>
                                also working with frontend new features
                            </p>
                        </div>
                    )}

                    figure={_ => (

                        <div>
                            <span>View</span>
                            <span>Arcbazar</span>
                        </div>
                    )}

                    logoDescription={_ => (

                            <p className={'paragraph'}>Create unique interie and landscape design</p>

                    )}

                />

            </ParallaxMousemove>
        )
    }
}

export default Arcbazar;
