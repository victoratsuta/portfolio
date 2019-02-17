import React, {Component} from 'react';


import './lib/coalesce'


class Abirix extends Component {

    constructor(props) {

        super(props)

        this.toggle = this.toggle.bind(this)

        this.state = {
            info: false
        }
    }

    toggle() {

        if (this.state.info) {

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
                info: false
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
                info: true
            })

        }

    }

    render() {

        return (
            <div className="demo-4 abirix">

                <main>
                    <div className="frame">
                    </div>

                    <div className="content content--canvas-abirix">

                        <div className={'abirix-container'}>

                            <div className={'header'}>

                                <div className={'logo'}>
                                    ABIRIX CRM
                                </div>

                                <div className={'description'}>

                                    crm system for sales company

                                </div>

                            </div>

                            <div className={'tech-container d-flex'}>
                                <div className={'row'}>
                                    <div className={'angular'}></div>
                                    <div className={'rxjs'}></div>
                                    <div className={'clarity'}></div>
                                </div>
                                <div className={'row'}>
                                    <div className={'laravel'}></div>
                                    <div className={'php-unit'}></div>
                                    <div className={'mysql'}></div>
                                </div>
                            </div>

                            <div className={'info-container tzie-small d-none'}>


                                Writing a crm system in a team as senior developer.
                                Design and writing of main system entities, database development.
                                Using Angular as an interface development tool and Laravel as a backend API.
                                Careful test coverage.
                                Development with strict flow based on Agile princes.
                                Transfer data from older systems.

                            </div>

                            <div className={'arrow arrow-down'} onClick={this.toggle}></div>


                        </div>


                    </div>


                </main>


            </div>
        )

    }
}

export default Abirix

