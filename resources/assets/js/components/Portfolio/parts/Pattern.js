import React, {Component} from 'react';


class Pattern extends Component {

    constructor(props) {
        super(props);
        this.clasess = {

            show: 'animated ' + this.props.effectClassIn + ' flex',
            hide: 'animated ' + this.props.effectClassOut + ' none',

        }
        this.clickHandle = this.clickHandle.bind(this)
        this.state = {
            activeSide: true,
        }
    }

    clickHandle() {
        this.setState({
            activeSide: !this.state.activeSide
        })
    }

    render() {
        return (

            <div className={'Pattern ' + this.props.classname}>

                <div className={'technologies-container ' + (this.state.activeSide ? this.clasess.hide : this.clasess.show)}>

                    {this.props.technologies()}
                    {this.props.description()}

                    <a href={this.props.url} target={'blank'} className={'rotate_button'}>
                        <figure>
                            {this.props.figure()}
                        </figure>
                    </a>
                    <div className={'arrow hide'} onClick={this.clickHandle}/>
                </div>

                <div className={'logo-container ' + (this.state.activeSide ? this.clasess.show : this.clasess.hide)}>

                    <img src={this.props.logo}/>

                    {this.props.logoDescription()}

                    <div className={'arrow show'} onClick={this.clickHandle}/>

                </div>
            </div>

        )
    }
}

export default Pattern;
