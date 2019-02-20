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
                            <b>I</b> have build the game. This is SPA on jquery and <b>w</b>ebpack

                            <br/>
                            with Ada<b>p</b>tive <b>I</b>nterface

                            <br/>
                            and <b>o</b>ptimization of perform<b>a</b>nce
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
                        <b>S</b>imple and relaxing game
                        <br/>
                        In honor of <b>F</b>ebruary 23
                        <br/>
                        For <b>Y</b>andex maps
                    </p>
                )}

            />


        )
    }
}

export default Yandex;
