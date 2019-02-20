import React, {Component} from 'react';


import './lib/coalesce'
import setup from "./lib/coalesce";


class Abirix extends Component {

    constructor(props) {

        super(props)

        this.toggle = this.toggle.bind(this)

        this.state = {
            info: false
        }
    }

    componentDidMount(){
        setup()
    }

    toggle() {

        this.setState({
            info: !this.state.info
        })

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

                            <div className={'tech-container ' + (this.state.info ? 'd-none' : 'd-flex')}>
                                <div className={'row'}>
                                    <div className={'angular'}></div>
                                    <div className={'rxjs'}></div>
                                    <div className={'ts'}></div>
                                </div>
                                <div className={'row'}>
                                    <div className={'laravel'}></div>
                                    <div className={'php-unit'}></div>
                                    <div className={'mysql'}></div>
                                </div>
                            </div>

                            <div className={'info-container tzie-small '  + (this.state.info ? 'd-flex' : 'd-none')}>

                                I have completed writing the crm system in a team as senior developer,
                                designed and wrote the main system components, developed the database.
                                Used Angular as the interface development tool and Laravel as the backend API;
                                Complete test coverage;
                                Development with strict flow based on Agile princes;
                                Transfer data from legacy systems.

                            </div>

                            <div className={'arrow ' + (this.state.info ? 'arrow-up' : 'arrow-down')} onClick={this.toggle}></div>


                        </div>


                    </div>


                </main>


            </div>
        )

    }
}

export default Abirix

