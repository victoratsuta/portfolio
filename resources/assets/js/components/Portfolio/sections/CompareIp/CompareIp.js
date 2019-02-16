import React, {Component} from 'react';
import Slideshow from './lib/Slideshow';
import Constants from "../../../../constants/constants";

import './lib/wordFx';

class CompareIp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: 0,
            animateClass: 'hide'
        };
        this.showDescription = _ => {

            this.setState(
                {
                    animateClass: 'animated fadeIn'
                }
            )

        }
    }

    componentDidUpdate(prevProps){
        if(!this.props.preloader && prevProps.preloader){

            this.setState(
                {
                    visible: 1,
                }
            )

            this.slideshow = new Slideshow(document.querySelector('.slideshow'), this.showDescription)

        }
    }


    render() {
        return (
            <div className={'CompareIp'}>
                <div className={'content'}>
                    <div className={'slideshow'}>
                        <div className={'slide slide--current'}>
                            <div className={'slide__bg slide__bg--6'}></div>
                            <h2 style={{opacity: this.state.visible}} className={'word word--6'}>CompareIp</h2>

                            <div className={'description ' + this.state.animateClass}>
                                <p className={'word--6'}>Development of a portal for the search of enterprises for the
                                    establishment of patents for inventions</p>

                                <div className={'img-container'}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <a href={Constants.compareIp} target="_blank">
                                    <button className="draw-border">Live</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default CompareIp;



