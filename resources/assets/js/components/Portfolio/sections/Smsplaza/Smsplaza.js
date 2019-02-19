import React, {Component} from 'react';


import './lib/pipeline'
import Constants from "../../../../constants/constants";


class Smsplaza extends Component {

    constructor(props) {

        super(props)

        this.toggle = this.toggle.bind(this)

        this.state = {
            info : false
        }
    }

    toggle(){

        this.setState({
            info: !this.state.info
        })

    }

    render() {

        return (
            <div className="demo-5 smsplaza">

                <main>
                    <div className="frame">
                    </div>

                    <div className="content content--canvas--smsplaza">

                        <div className={'smspalza-container'}>

                            <div className={'header'}>

                                <a
                                    target={'_blank'}
                                    href={Constants.smsplaza}
                                >
                                    <div className={'logo'}>
                                        SMSPLAZA
                                    </div>
                                </a>

                                <div className={'description'}>

                                    <a
                                        target={'_blank'}
                                        href={Constants.smsplaza}
                                    >
                                        Receive SMS Online | Verification Service
                                    </a>
                                </div>

                            </div>

                            <div className={'tech-container ' + (this.state.info ? 'd-none' : 'd-flex')}>
                                <div className={'row'}>
                                    <div className={'vue'}></div>
                                    <div className={'nuxt'}></div>
                                    <div className={'vuex'}></div>
                                </div>
                                <div className={'row'}>
                                    <div className={'vuetify'}></div>
                                    <div className={'webpack'}></div>
                                    <div className={'laravel'}></div>
                                </div>
                                <div className={'row'}>
                                    <div className={'mysql'}></div>
                                    <div className={'php-unit'}></div>
                                    <div className={'nova'}></div>
                                </div>
                            </div>

                            <div className={'info-container tzie-small ' + (this.state.info ? 'd-flex' : 'd-none')}>

                                I have been doing development and teamleading of the application with external smsbank equipment,
                                design architecture, development and code quality control as well.
                                I used Nuxtjs as a frontend tool to build the interface.
                                I also used Laravel as a backend framework for building the API,
                                Laravel Nova for building administration panel;
                                VueJs for building individual components.
                                I have done complete coverage tests and developed the infrastructure.

                            </div>

                            <div className={'arrow' + (this.state.info ? 'arrow-up' : 'arrow-down')} onClick={this.toggle}></div>

                            <a
                                className={'mt-50 description'}
                                target={'_blank'}
                                href={Constants.smsplaza}
                            >
                                CHECK IT OUT
                            </a>

                        </div>


                    </div>

                    {/*<h2 className="content__title">Swirl</h2>*/}

                </main>


            </div>
        )

    }
}

export default Smsplaza

