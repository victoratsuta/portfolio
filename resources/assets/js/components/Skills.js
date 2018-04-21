import React, {Component} from 'react';
import Menu from './Menu';
import SliderFx from './SliderFx';

class Skills extends Component {

    componentDidMount() {

        this.SliderFx = new SliderFx(document.getElementById('slideshow'), {
            easing: 'cubic-bezier(.8,0,.2,1)'
        });
        this.SliderFx.init();
    }

    render() {
        return (
            <div className="demo-1">
                <div id="ip-container" className="ip-container">
                    <Menu/>
                    <div id="main_container">
                        {/* main content */}
                        <div id="slideshow" className="slideshow for_fade" style={{height: '100vh !important'}}>
                            <ul>
                                <li>
                                    <div className="slide">
                                        <div className="backend_container">
                                            <div className="backend_section">
                                                <img src={'../imgs/skills/backand/python1.png'}/>
                                                <img src={'../imgs/skills/backand/nodejs.png'}/>
                                                <img src={'../imgs/skills/backand/php1.png'}/>
                                                <img src={'../imgs/skills/backand/nginx1.png'}/>
                                            </div>
                                            <div className="backend_section">
                                                <img src={'../imgs/skills/backand/composer.png'}/>
                                                <img src={'../imgs/skills/backand/mongo.png'}/>
                                                <img src={'../imgs/skills/backand/mysql1.png'}/>
                                                <img src={'../imgs/skills/backand/bash.png'}/>
                                            </div>
                                            <div className="backend_section">
                                                <img src={'../imgs/skills/backand/laravel3.png'}/>
                                                <img src={'../imgs/skills/backand/yii22.png'}/>
                                                <img src={'../imgs/skills/backand/zend2.png'}/>
                                                <img src={'../imgs/skills/backand/express1.png'}/>
                                            </div>
                                            <div className="backend_section">
                                                <img src={'../imgs/skills/backand/git1.png'}/>
                                                <img src={'../imgs/skills/other/ubuntu.png'}/>
                                                <img src={'../imgs/skills/other/docker.svg'}/>
                                                <img src={'../imgs/skills/backand/apache.png'}/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="slide">
                                        <div className="backend_container">
                                            <div className="backend_section">
                                                <img src={'../imgs/skills/frontend/html2.png'}/>
                                                <img src={'../imgs/skills/frontend/css2.png'}/>
                                                <img src={'../imgs/skills/frontend/js1.png'}/>
                                                <img src={'../imgs/skills/frontend/jquery1.png'}/>
                                            </div>
                                            <div className="backend_section">
                                                <img src={'../imgs/skills/frontend/angular.png'}/>
                                                <img src={'../imgs/skills/frontend/react2.png'}/>
                                                <img src={'../imgs/skills/frontend/bootstrap1.png'}/>
                                                <img src={'../imgs/skills/frontend/materialize.svg'}/>
                                            </div>
                                            <div className="backend_section">

                                                <img className="lowe_heihgt" src={'../imgs/skills/frontend/gulp.svg'}/>
                                                <img src={'../imgs/skills/frontend/webpack2.gif'}/>
                                                <img src={'../imgs/skills/frontend/yarn.png'}/>
                                                <img src={'../imgs/skills/frontend/npm.png'}/>
                                            </div>
                                            <div className="backend_section">
                                                <img src={'../imgs/skills/frontend/sass.png'}/>
                                                <img src={'../imgs/skills/frontend/less.png'}/>
                                                <img src={'../imgs/skills/frontend/stylus.png'}/>
                                                <img src={'../imgs/skills/frontend/mocha.png'}/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
        )

    }
}

export default Skills;
