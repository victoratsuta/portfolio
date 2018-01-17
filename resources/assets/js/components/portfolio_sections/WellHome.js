import React, {Component} from 'react';
import ParallaxMousemove from 'react-parallax-mousemove';

var $ = require('jquery');

const style = {
    outter: {
        background: 'white',
        width: '100%',
        position: 'relative',
        overflow: 'hidden'
    },
    bgLayerStyle: {
        backgroundImage: 'url(../imgs/Skyline.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '110%',
        position: 'absolute',
        overflow: 'hidden',
        minHeight: '40vh',
        marginLeft: '-5%',
        marginBottom: '-2%',

    }
}


class WellHome extends Component {

    constructor(props) {
        super(props);
        this.clickState = 1;
    }

    animateWellhome() {
        if (this.clickState == 0) {
            $('.WellHome__technologis').removeClass('animated fadeInUp').addClass('animated fadeOutUp').css('display', 'none');
            $('.WellHome__logo_container').removeClass('animated fadeOutUp').addClass('animated fadeInUp').css('display', 'flex');
        }
        if (this.clickState == 1) {
            $('.WellHome__logo_container').removeClass('animated fadeInUp').addClass('animated fadeOutUp').css('display', 'none');
            $('.WellHome__technologis').removeClass('animated fadeOutUp').addClass('animated fadeInUp').css('display', 'flex');
        }
        this.clickState = this.clickState ? 0 : 1;
    }


    render() {
        return (
            <ParallaxMousemove containerStyle={style.outter}>
                <ParallaxMousemove.Layer layerStyle={style.bgLayerStyle} config={{
                    xFactor: 0.05,
                    yFactor: 0.05,
                    springSettings: {
                        stiffness: 50,
                        damping: 30
                    }
                }}>
                </ParallaxMousemove.Layer>

                <div style={style.inner} className={'WellHome__inner'}>
                    <div className={'WellHome__technologis'}>
                        <div className={'WellHome__technologis_container'}>
                            <div>
                                <div className={'WellHome__sugar'}/>
                                <div className={'WellHome__php'}/>
                                <div className={'WellHome__zend'}/>
                                <div className={'WellHome__mysql'}/>
                            </div>
                            <div>
                                <div className={'WellHome__nginx'}/>
                                <div className={'WellHome__js'}/>
                                <div className={'WellHome__jquery'}/>
                            </div>
                        </div>
                        <div className={'WellHome__Description'}>
                            <p>
                                Development of of a closed CRM system for the automation of business processes in the
                                company engaged in the sale of real estate - <b><a href={'http://www.welhome.ru/'}
                                                                                   target={'blank'}>Welhome</a></b>,
                                based on SugarCRM. Designing the database and system architecture. Integration with
                                existing enterprise systems.
                            </p>
                        </div>
                        <div className={'WellHome__arrow WellHome__arrow_hide'}
                             onClick={this.animateWellhome.bind(this)}></div>
                    </div>

                    <div className={'WellHome__logo_container'}>
                        <img src={'../imgs/wh.jpg'} className={'WellHome__logo'}></img>
                        <h1 style={style.header} className={'WellHome__header'}>WELHOME</h1>
                        <p style={style.paragraph} className={'WellHome__paragraph'}>CRM system for auto-business
                            processes</p>
                        <div className={'WellHome__arrow WellHome__arrow_show general__arrow'}
                             onClick={this.animateWellhome.bind(this)}></div>
                    </div>
                </div>

            </ParallaxMousemove>
        )
    }
}

export default WellHome;