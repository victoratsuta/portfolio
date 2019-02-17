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

        if(this.state.info){

            $('.info-container')
                .removeClass('d-flex')
                .addClass('d-none')

            $('.tech-container')
                .removeClass('d-none')
                .addClass('d-flex')

            $('.arrow')
                .removeClass('arrow-up')
                .addClass('arrow-down')


            this.setState({
                info : false
            })

        } else {

            $('.info-container')
                .removeClass('d-none')
                .addClass('d-flex')

            $('.tech-container')
                .removeClass('d-flex')
                .addClass('d-none')

            $('.arrow')
                .removeClass('arrow-down')
                .addClass('arrow-up')

            this.setState({
                info : true
            })

        }

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

                            <div className={'tech-container d-flex'}>
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

                            <div className={'info-container tzie-small d-none'}>

                                Development and teamleading the application with external smsbank equipment.
                                Design architecture, development and code quality control.
                                I used Nuxtjs as a front-end tool to build an interface.
                                Laravel as a backend framework for building an API.
                                Laravel Nova for building administration panel,
                                with VueJs for building individual components.
                                Coverage tests, and the development of infrastructure.

                            </div>

                            <div className={'arrow arrow-down'} onClick={this.toggle}></div>

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

