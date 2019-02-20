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
                                My team and I developed this system. The backend is build with Laravel and frontend with AngularJs;
                                a lot of components for API communication with marketplaces and payment operations;
                                development and design of new features
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
                                High load platform for wholesales on the largest marketplaces such as Amazon&nbsp;and&nbsp;Ebay</p>
                    )}

                />

        )
    }
}

export default C2Corner;