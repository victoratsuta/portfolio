import React, {Component} from 'react';
import ParallaxMousemove from 'react-parallax-mousemove';
import config from "react-global-configuration";

const style = {
    History24__outter: {
        backgroundPosition: 'center',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        height: '100vh',
    },
    History24__bgLayerStyle: {
        backgroundImage: 'url(../imgs/history.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '120vw',
        position: 'absolute',
        overflow: 'hidden',
        minHeight: '110vh',
        marginLeft: '-5%',
        marginBottom: '-2%',

    }
}

class History24 extends Component {

    constructor(props) {
        super(props);
        this.clickState = 1;
    }

    animateHistory() {
        if (this.clickState == 0) {
            $('.History24__technologis').removeClass('animated zoomIn').addClass('animated zoomOut');

            setTimeout(function () {

                $('.History24__technologis').css('display', 'none');

                $('.History24__logo_container').removeClass('animated zoomOut').addClass('animated zoomIn').css('display', 'flex');

            }, 500)

        }
        if (this.clickState == 1) {
            $('.History24__logo_container').removeClass('animated zoomIn').addClass('animated zoomOut');


            setTimeout(function () {

                $('.History24__logo_container').css('display', 'none');

                $('.History24__technologis').removeClass('animated zoomOut').addClass('animated zoomIn').css('display', 'flex');

            }, 500)
        }
        this.clickState = this.clickState ? 0 : 1;
    }

    render() {
        return (

            <ParallaxMousemove containerStyle={style.History24__outter}>
                <ParallaxMousemove.Layer layerStyle={style.History24__bgLayerStyle} config={{
                    xFactor: 0.05,
                    yFactor: 0.05,
                    springSettings: {
                        stiffness: 50,
                        damping: 30
                    }
                }}>

                </ParallaxMousemove.Layer>

                <div className={'History24__inner'}>
                    <div className={'History24__technologis'}>
                        <div className={'History24__technologis_container'}>
                            <div>
                                <div className={'History24__laravel'}/>
                                <div className={'History24__gulp'}/>
                                <div className={'History24__jq'}/>
                                <div className={'History24__js'}/>
                            </div>
                            <div>
                                <div className={'History24__bootstrap'}/>
                                <div className={'History24__mysql'}/>
                                <div className={'History24__php'}/>
                                <div className={'History24__sass'}/>
                            </div>
                        </div>
                        <div className={'History24__Description'}>
                            Full development of the educational platform for the preparation for the USE on history,
                            based on the PHP framework Laravel.
                            Designing the architecture of the system, writing the frontend
                            using Bootstrap, Gulp, Jquery and many different libraries.
                        </div>
                        <a href={config.get('history')} target={'blank'}>
                            <figure className={'History24__rotate_button'}>
                                <div>
                                    <span>View</span>
                                    <span>History.RF</span>
                                </div>
                            </figure>
                        </a>
                        <div className={'History24__arrow History24__arrow_hide'} onClick={this.animateHistory.bind(this)}/>
                    </div>
                    <div className={'History24__logo_container'}>
                        <img src={'../imgs/pantheon2.svg'} alt="Parallax Layer" className={'History24__logo'}/>
                        <h1 className={'History24__header'}>HISTORY.RF</h1>
                        <p className={'History24__paragraph'}>All-Russian portal of online preparation for the unified
                            state exam on history</p>
                        <div className={'History24__arrow History24__arrow_show general__arrow'} onClick={this.animateHistory.bind(this)}/>
                    </div>
                </div>
            </ParallaxMousemove>
        )
    }
}

export default History24;