import React, {Component} from 'react'
import ReactRotatingText from 'react-rotating-text'
import Constants from '../../constants/constants'
import {connect} from 'react-redux'
import './scss/Home.scss'


function mapStateToProps(state) {
    return {
        preloader: state.preloader,
    }
}


class Home extends Component {

    constructor(props) {

        super(props)
        this.drawReactRotatingText = this.drawReactRotatingText.bind(this)

    }

    drawReactRotatingText(){

        return this.props.preloader.preloader
            ? ''
            : <ReactRotatingText
                typingInterval={100}
                items={['Laravel', 'React', 'Angular', 'VueJs', 'NodeJs']}
            />
    }

    render() {
        return (
            <div className="ip-main for_fade">

                <div className={'Preivew'}>
                    <div className="Preivew__neon">VIKTOR ATSUTA</div>
                    <div className="Preivew__info">&lt; Senior Software Engineer /&gt;</div>
                    <div className="Preivew__info Preivew__label_tech">

                        <p>Working with technologies such as {this.drawReactRotatingText()}
                        </p>
                    </div>
                </div>


                <div className="Icons__icon_container">

                    <a href={Constants.instagramm} target="_blank">
                        <div
                        />
                    </a>
                    <a href={Constants.linkedin} target="_blank">
                        <div
                        />
                    </a>
                    <a href={Constants.linksful} target="_blank">
                        <div
                        />
                    </a>


                </div>

            </div>
        )
    }
}

export default connect(mapStateToProps)(Home);
