import React, {Component} from 'react';
import ParallaxMousemove from 'react-parallax-mousemove';
import Constants from '../../../constants/constants'
import Pattern from './../parts/Pattern'

class C2Corner extends Component {

    render() {
        return (

                <Pattern

                    classname="C2Corner"
                    logo={null}
                    logoText={'C2CORNER'}
                    url={Constants.c2corner}
                    effectClassIn='zoomIn'
                    effectClassOut='zoomOut'
                    technologies={_ => (

                        <div className={'technologies'}>
                            <div>
                                <div/>
                                <div/>
                                <div/>
                                <div/>
                            </div>
                            <div>
                                <div/>
                                <div/>
                                <div/>
                                <div/>
                            </div>
                        </div>
                    )}

                    description={_ => (

                        <div className={'description'}>
                            <p>
                                Development of backend on Laravel and frontend on AngularJs, components for API work, payment operations, development and design of new functionality
                            </p>
                        </div>
                    )}

                    figure={_ => (

                        <div>
                            <span>View</span>
                            <span>C2Corner</span>
                        </div>

                    )}

                    logoDescription={_ => (
                        <p className={'paragraph'}>
                                Highly loaded platform for wholesale purchases and sales on the largest marketplaces such as Amazon, Ebay</p>
                    )}

                />

        )
    }
}

export default C2Corner;