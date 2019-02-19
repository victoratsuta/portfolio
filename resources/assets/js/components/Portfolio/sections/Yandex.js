import React, {Component} from 'react';
import Constants from '../../../constants/constants'
import Pattern from './../parts/Pattern'

class Yandex extends Component {

    render() {

        return (

            <Pattern

                classname="Yandex"
                logo='../imgs/yandex/logo.png'
                url={Constants.yandex}
                effectClassIn='bounceIn'
                effectClassOut='bounceOut'
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
                        </div>
                    </div>
                )}

                description={_ => (

                    <div className={'description'}>
                        <p>
                            <b>D</b>evelopment of SPA on jquery and <b>w</b>ebpack

                            <br/>
                            Ada<b>p</b>tive <b>L</b>ayout

                            <br/>
                            <b>O</b>ptimization of prod<b>u</b>ctivity
                        </p>
                    </div>
                )}

                figure={_ => (

                    <div>
                        <span>Check it</span>
                        <span>Check it</span>
                    </div>
                )}

                logoDescription={_ => (
                    <p>
                        <b>L</b>ight and relaxing game
                        <br/>
                        in honor of the holiday on <b>F</b>ebruary 23
                        <br/>
                        for <b>Y</b>andex maps
                    </p>
                )}

            />


        )
    }
}

export default Yandex;
