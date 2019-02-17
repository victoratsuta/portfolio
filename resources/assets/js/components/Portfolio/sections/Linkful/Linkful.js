import React, {Component} from 'react';


import './lib/swirl'
import Constants from "../../../../constants/constants";


class Linkful extends Component {

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
            <div className="demo-2 linkful">

                <main>
                    <div className="frame">
                    </div>

                    <div className="content content--canvas-linkful">

                        <div className={'linkful-container'}>

                            <div className={'header'}>

                                <a
                                    target={'_blank'}
                                    href={Constants.linksfulUrl}
                                >
                                    <div className={'logo'}></div>
                                </a>

                                <div className={'description'}>

                                    <a
                                        target={'_blank'}
                                        href={Constants.linksfulUrl}
                                    >
                                        LINKFUL - A STUNNING WAY TO CREATE A&nbsp;PERFECT ABOUT&nbsp;ME PAGE!
                                    </a>
                                </div>

                            </div>

                            <div className={'tech-container d-flex'}>
                                <div className={'row'}>
                                    <div className={'react'}></div>
                                    <div className={'redux-saga'}></div>
                                    <div className={'flow'}></div>
                                    <div className={'webpack'}></div>

                                    <div className={'laravel'}></div>
                                    <div className={'nova'}></div>
                                </div>
                                <div className={'row'}>
                                    <div className={'vue'}></div>
                                    <div className={'php-unit'}></div>

                                    <div className={'docker'}></div>
                                    <div className={'mongo'}></div>

                                    <div className={'mysql'}></div>
                                    <div className={'apache'}></div>
                                </div>
                            </div>

                            <div className={'info-container tzie-small d-none'}>

                                I have created, designed and developed this project.
                                I built the application using the most powerful and popular technologies.
                                The frontend of the user dashboard was built using React and Redux,
                                and also used Saga to manage the asynchronous actions.
                                The administration panel is built with Nova,
                                and separate components with Vue were also developed.
                                The backend is based on Laravel,
                                the Mysql and Mongo database for storing statistics.
                                The system is fully tested.
                                Infrastructure works on the basis of Docker and Continues Delivery.

                            </div>

                            <div className={'arrow arrow-down'} onClick={this.toggle}></div>

                            <a
                                className={'mt-50 description'}
                                target={'_blank'}
                                href={Constants.linksfulUrl}
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

export default Linkful

