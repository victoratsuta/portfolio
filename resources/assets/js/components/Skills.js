import React, {Component} from 'react';
import Menu from './Menu';
import SliderFx from './SliderFx';

class Skills extends Component {

    createSlideShow(){
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
                        <div id="slideshow" className="slideshow for_fade" style={{height: '100vh !important'}} onLoad={this.createSlideShow.bind(this)}>
                            <ul>
                                <li>
                                    <div className="slide">
                                        <div className="backend_container">
                                            <div className="backend_section">
                                                <img src={'../imgs/skills/backand/apache.png'}/>
                                                <img src={'../imgs/skills/backand/nginx.png'}/>
                                                <img src={'../imgs/skills/backand/nodejs.png'}/>
                                                <img src={'../imgs/skills/backand/php.svg'}/>
                                            </div>
                                            <div className="backend_section">
                                                <img src={'../imgs/skills/backand/composer.png'}/>
                                                <img src={'../imgs/skills/backand/mongo.png'}/>
                                                <img src={'../imgs/skills/backand/mysql.png'}/>
                                                <img src={'../imgs/skills/backand/Oracle_Database.png'}/>
                                            </div>
                                            <div className="backend_section">
                                                <img src={'../imgs/skills/backand/zend.png'}/>
                                                <img src={'../imgs/skills/backand/yii.png'}/>
                                                <img src={'../imgs/skills/backand/yii2.png'}/>
                                                <img src={'../imgs/skills/backand/laravel.png'}/>
                                            </div>
                                            <div className="backend_section">
                                                <img src={'../imgs/skills/backand/suit.svg'}/>
                                                <img src={'../imgs/skills/backand/sugarcrm.png'}/>
                                                <img src={'../imgs/skills/backand/npm.png'}/>
                                                <img src={'../imgs/skills/backand/express.png'}/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="slide">
                                        <div className="backend_container">
                                            <div className="backend_section">
                                                <img src={'../imgs/skills/frontend/angular.png'}/>
                                                <img src={'../imgs/skills/frontend/html.png'}/>
                                                <img className="lowe_heihgt" src={'../imgs/skills/frontend/css.png'}/>
                                                <img className="lowe_heihgt" src={'../imgs/skills/frontend/js.png'}/>
                                            </div>
                                            <div className="backend_section">
                                                <img src={'../imgs/skills/frontend/react.png'}/>
                                                <img src={'../imgs/skills/frontend/doundation.png'}/>
                                                <img src={'../imgs/skills/frontend/materialize.svg'}/>
                                                <img src={'../imgs/skills/frontend/bootstrap.png'}/>
                                            </div>
                                            <div className="backend_section">
                                                <img className="lowe_heihgt" src={'../imgs/skills/frontend/gulp.svg'}/>
                                                <img src={'../imgs/skills/frontend/Webpack.png'}/>
                                                <img src={'../imgs/skills/frontend/yarn.png'}/>
                                                <img src={'../imgs/skills/frontend/npm.png'}/>
                                            </div>
                                            <div className="backend_section">
                                                <img src={'../imgs/skills/frontend/sass.png'}/>
                                                <img src={'../imgs/skills/frontend/less.png'}/>
                                                <img src={'../imgs/skills/frontend/jquery.gif'}/>
                                                <img src={'../imgs/skills/frontend/mocha.png'}/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="slide">
                                        <div className="backend_container">
                                            <div className="backend_section">
                                                <img src={'../imgs/skills/other/docker.svg'}/>
                                                <img src={'../imgs/skills/other/git.png'}/>
                                                <img src={'../imgs/skills/other/ubuntu.png'}/>
                                                <img src={'../imgs/skills/other/ph.png'}/>
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