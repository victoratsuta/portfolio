import React, {Component} from 'react';
import ParallaxMousemove from 'react-parallax-mousemove';
import Pattern from './../parts/Pattern'
import Constants from '../../../constants/constants'

const style = {
    outter: {
        background: 'white',
        width: '100%',
        position: 'relative',
        overflow: 'hidden'
    },
    bgLayerStyle: {
        backgroundImage: 'url(../imgs/profil_city.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '110%',
        position: 'absolute',
        overflow: 'hidden',
        minHeight: '40vh',
        marginLeft: '-5%',
        marginBottom: '-2%',
        bottom : '0px'

    }
}


class Factoringvergelijken extends Component {


    render() {
        return (
            <div style={style.outter}>
                <div style={style.bgLayerStyle}/>

                <Pattern

                    classname="Factoringvergelijken"
                    logo='../imgs/logo_f.png'
                    url={Constants.factoringvergelijken}
                    effectClassIn='slideInDown'
                    effectClassOut='zoomOutUp'
                    technologies={_ => (

                        <div className={'technologies'}>

                        </div>
                    )}

                    description={_ => (

                        <div className={'description'}>
                            <p>
                                My team and I have developed the application build with Yii2.
                                Also I have made and designed some parts of the interface;
                                improvement of modules in the administration panel
                            </p>
                        </div>
                    )}

                    figure={_ => (

                        <div>
                            <span>View</span>
                            <span>factoring</span>
                        </div>
                    )}

                    logoDescription={_ => (
                        <p>
                            <p className={'paragraph'}>
                                Online factoring services
                            </p>
                        </p>
                    )}

                />

            </div>
        )
    }
}

export default Factoringvergelijken;
