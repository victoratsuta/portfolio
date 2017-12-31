import React, {Component} from 'react';
import ParallaxMousemove from 'react-parallax-mousemove';

const style = {
    outter: {
        backgroundPosition: 'center',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        height: '100vh',
        background: 'black',
    },
    bgLayerStyle: {
        backgroundImage: 'url(../imgs/chameleon.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '105vw',
        position: 'absolute',
        overflow: 'hidden',
        minHeight: '105vh',
        marginLeft: '-5%',
        marginBottom: '-2%',

    }
};

class Factoring extends Component {

    constructor(props)
    {
        super(props);
        this.clickState = 1;
    }

    animateFactoring()
    {
        if (this.clickState == 0) {
            $('.Factoring__technologis').removeClass('animated fadeInUp').addClass('animated fadeOutUp').css('display', 'none');
            $('.Factoring__logo_container').removeClass('animated fadeOutUp').addClass('animated fadeInUp').css('display', 'flex');
        }
        if (this.clickState == 1) {
            $('.Factoring__logo_container').removeClass('animated fadeInUp').addClass('animated fadeOutUp').css('display', 'none');
            $('.Factoring__technologis').removeClass('animated fadeOutUp').addClass('animated fadeInUp').css('display', 'flex');
        }
        this.clickState = this.clickState ? 0 : 1;
    }

    render()
    {
        return (

            <ParallaxMousemove containerStyle={style.outter} fullHeight={true}>
                <ParallaxMousemove.Layer layerStyle={style.bgLayerStyle} config={{
                    xFactor: 0.05,
                    yFactor: 0.05,
                    springSettings: {
                        stiffness: 50,
                        damping: 30
                    }
                }}>
                </ParallaxMousemove.Layer>

                <div className={'Factoring__inner'}>
                    <div className={'Factoring__technologis'}>
                        <div className={'Factoring__technologis_container'}>
                            <div>
                                <div className={'Factoring__yii2'}></div>
                                <div className={'Factoring__wordpress'}></div>
                                <div className={'Factoring__js'}></div>
                                <div className={'Factoring__php'}></div>
                            </div>
                            <div>
                                <div className={'Factoring__jq'}></div>
                                <div className={'Factoring__bootstrap'}></div>
                                <div className={'Factoring__mysql'}></div>
                                <div className={'Factoring__nginx'}></div>
                            </div>
                        </div>
                        <div className={'Factoring__Description'}>
                            Partial development of backend based on Yii 2 framework, admin panel, adaptive optimization
                            of front-end elements. Add support for new languages.
                        </div>
                        <a href={'http://factoringvergelijken.nl/'} target={'blank'}>
                            <figure className={'Factoring__rotate_button'}>
                                <div>
                                    <span>View</span>
                                    <span>FACTORING</span>
                                </div>
                            </figure>
                        </a>
                        <div className={'Factoring__arrow Factoring__arrow_hide'}
                             onClick={this.animateFactoring.bind(this)}/>
                    </div>
                    <div className={'Factoring__logo_container'}>
                        <img src={'../imgs/factoring2.png'} className={'Factoring__logo'}></img>
                        <h1 className={'Factoring__header'}>FACTORING</h1>
                        <p className={'Factoring__paragraph'}>
                            The international company for the provision of factoring services.</p>
                        <div className={'Factoring__arrow Factoring__arrow_show'}
                             onClick={this.animateFactoring.bind(this)}/>
                    </div>

                </div>
            </ParallaxMousemove>
        )
    }
}

export default Factoring;