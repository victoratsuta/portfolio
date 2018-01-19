import React, {Component} from 'react';
import ParallaxMousemove from 'react-parallax-mousemove';
import config from "react-global-configuration";

const  style = {
    Smoke_Zone__outter: {
        background: 'black',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width:'100%',
        position: 'relative',
        overflow: 'hidden'
    },
    Smoke_Zone__bgLayerStyle: {
        position: 'absolute',
        height: '100%',
    }
};


class Smoke_Zone extends Component {

    constructor(props){
        super(props);
        this.clickState = 1;
    }

    animateSmoke() {
        if (this.clickState == 0) {
            $('.Smoke_Zone__technologis').removeClass('animated fadeInUp').addClass('animated fadeOutUp').css('display','none');
            $('.Smoke_Zone__logo_container').removeClass('animated fadeOutUp').addClass('animated fadeInUp').css('display','flex');
        }
        if (this.clickState == 1) {
            $('.Smoke_Zone__logo_container').removeClass('animated fadeInUp').addClass('animated fadeOutUp').css('display','none');
            $('.Smoke_Zone__technologis').removeClass('animated fadeOutUp').addClass('animated fadeInUp').css('display','flex');
        }
        this.clickState = this.clickState ? 0 : 1;
    }


    render() {
        return (
            <ParallaxMousemove containerStyle={style.Smoke_Zone__outter} >
                <ParallaxMousemove.Layer layerStyle={style.Smoke_Zone__bgLayerStyle} config={{
                    xFactor: 0.05,
                    yFactor: 0.05,
                    springSettings: {
                        stiffness: 50,
                        damping: 30
                    }
                }}>
                    <img src={'../imgs/2.png'}></img>
                </ParallaxMousemove.Layer>
                <div className={'Smoke_Zone__inner'}>
                    <div className={'Smoke_Zone__technologis'}>
                        <div className={'Smoke_Zone__technologis_container'} >
                            <div>
                                <div className={'Smoke_Zone__apache'}></div>
                                <div className={'Smoke_Zone__javascript'}></div>
                                <div className={'Smoke_Zone__jq'}></div>
                            </div>
                            <div>
                                <div className={'Smoke_Zone__mvc'}></div>
                                <div className={'Smoke_Zone__mysql'}></div>
                                <div className={'Smoke_Zone__php'}></div>
                            </div>
                        </div>
                        <div className ={'Smoke_Zone__Description'}>
                            Full development of an online store, the sale of tobacco products based on a unique MVC core.
                            Promotion and Support. Development of a flexible administrative system and a subsystem of content management.
                        </div>
                        <a href={config.get('smokeZone')} target={'blank'}>
                            <figure className={'Smoke_Zone__rotate_button'}>
                                <div>
                                    <span>View</span>
                                    <span>Smoke-Zone</span>
                                </div>
                            </figure>
                        </a>
                        <div className={'Smoke_Zone__arrow Smoke_Zone__arrow_hide'} onClick={this.animateSmoke.bind(this)}></div>
                    </div>
                    <div className={'Smoke_Zone__logo_container'} >
                        <img src={'../imgs/hookah3.svg'}  className={'Smoke_Zone__logo'}></img>
                        <h1 className={'Smoke_Zone__header'}>SMOKE-ZONE</h1>
                        <p className={'Smoke_Zone__paragraph'}>online store selling tobacco for shisha</p>
                        <div className={'Smoke_Zone__arrow Smoke_Zone__arrow_show general__arrow'} onClick={this.animateSmoke.bind(this)}></div>
                    </div>

                </div>

            </ParallaxMousemove>
    )
    }
}
export default Smoke_Zone;