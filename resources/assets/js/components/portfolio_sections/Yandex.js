import React, {Component} from 'react';
import ParallaxMousemove from 'react-parallax-mousemove';
import config from "react-global-configuration";

const style = {
    Yandex__outter: {
        backgroundPosition: 'center',
        background: 'white',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        height: '100vh',
    },
}

class Yandex extends Component {

    constructor(props) {
        super(props);
        this.clickState = 1;
    }

    animateHistory() {
        if (this.clickState == 0) {
            $('.Yandex__technologis').removeClass('animated bounceIn').addClass('animated bounceOut');


            setTimeout(function () {

                $('.Yandex__technologis').css('display', 'none');

                $('.Yandex__logo_container').removeClass('animated bounceOut').addClass('animated bounceIn').css('display', 'flex');

            }, 500)

        }
        if (this.clickState == 1) {
            $('.Yandex__logo_container').removeClass('animated bounceIn').addClass('animated bounceOut');
            setTimeout(function () {

                $('.Yandex__logo_container').css('display', 'none');

                $('.Yandex__technologis').removeClass('animated bounceOut').addClass('animated bounceIn').css('display', 'flex');

            }, 500)
        }
        this.clickState = this.clickState ? 0 : 1;
    }

    render() {
        return (

            <ParallaxMousemove containerStyle={style.Yandex__outter}>

                <div className={'Yandex__inner'}>
                    <div className={'Yandex__technologis'}>
                        <div className={'Yandex__technologis_container'}>
                            <div>
                                <div className={'Yandex__js'}/>
                                <div className={'Yandex__webpack'}/>
                                <div className={'Yandex__less'}/>

                            </div>
                            <div>
                                <div className={'Yandex__jq'}/>
                                <div className={'Yandex__svg'}/>
                            </div>
                        </div>
                        <div className={'Yandex__Description YSText-Light'}>
                            Development of SPA on jquery and webpack

                            <br/>
                            Adaptive layout

                            <br/>
                            Optimization of productivity

                        </div>
                        <a href={config.get('yandex')} target={'blank'}>
                            <figure className={'Yandex__rotate_button'}>
                                <div>
                                    <span className={'YSText-Light'}>View</span>
                                    <span className={'YSText-Light'}>Play Game</span>
                                </div>
                            </figure>
                        </a>
                        <div className={'Yandex__arrow Yandex__arrow_hide'} onClick={this.animateHistory.bind(this)}/>
                    </div>
                    <div className={'Yandex__logo_container'}>
                        <img src={'../imgs/yandex/logo.png'} alt="Parallax Layer" className={'Yandex__logo'}/>

                        <p className={'Yandex__paragraph YSText-Light'}>
                            <b className={'Yandex__yndex-color'}>L</b>ight and relaxing game
                            <br/>
                            in honor of the holiday on <b className={'Yandex__yndex-color'}>F</b>ebruary 23
                            <br/>
                            for <b className={'Yandex__yndex-color'}>Y</b>andex maps
                        </p>

                        <div className={'Yandex__arrow Yandex__arrow_show general__arrow'}
                             onClick={this.animateHistory.bind(this)}/>
                    </div>
                </div>
            </ParallaxMousemove>
        )
    }
}

export default Yandex;