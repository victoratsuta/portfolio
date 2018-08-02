import React, {Component} from 'react';
import ParallaxMousemove from 'react-parallax-mousemove';
import Pattern from './../parts/Pattern'

const style = {
    outter: {
        background: 'white',
        width: '100%',
        position: 'relative',
        overflow: 'hidden'
    },
}


class CherryPick extends Component {


    render() {
        return (
            <ParallaxMousemove containerStyle={style.outter}>



                <Pattern

                    classname="CherryPick"
                    logo='../imgs/cherries.svg'
                    url={''}
                    effectClassIn='jello'
                    effectClassOut='zoomOutUp'
                    technologies={_ => (

                        <div className={'technologies'}>
                            <div>
                                <div/>
                                <div/>
                                <div/>
                            </div>
                            <div>
                                <div/>
                                <div/>
                            </div>
                        </div>
                    )}

                    description={_ => (

                        <div className={'description'}>
                            <p>
                                Development of a portal for job search in the French area. Designing and writing the backend of the project. Building a restful API, with documentation on Swagger. Automatic functional tests.
                            </p>
                        </div>
                    )}

                    figure={_ => (

                        <div>

                        </div>
                    )}

                    logoDescription={_ => (
                        <p>
                            <h1 className={'header'}>CherryPick</h1>
                            <p className={'paragraph'}>
                                A platform for job search and job posting.</p>
                        </p>
                    )}

                />

            </ParallaxMousemove>
        )
    }
}

export default CherryPick;
