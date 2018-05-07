import React, {Component} from 'react';
import SliderFx from './lib/SliderFx';
import './scss/Skills.scss'
class Skills extends Component {

    componentDidMount() {

        this.SliderFx = new SliderFx(document.getElementById('Skills_slideshow'), {
            easing: 'cubic-bezier(.8,0,.2,1)'
        });
        this.SliderFx.init();
    }

    render() {

        const imgPathBack = '../imgs/skills/backand/';
        const imgPathFront = '../imgs/skills/frontend/';
        const imgPathOther = '../imgs/skills/other/';

        return (

                <div id="Skills_slideshow" className="for_fade">
                    <ul>
                        <li>
                            <div className="slide">
                                <div >
                                    <div >
                                        <img src={imgPathBack + 'python1.png'}/>
                                        <img src={imgPathBack + 'nodejs.png'}/>
                                        <img src={imgPathBack + 'php1.png'}/>
                                        <img src={imgPathBack + 'nginx1.png'}/>
                                    </div>
                                    <div >
                                        <img src={imgPathBack + 'composer.png'}/>
                                        <img src={imgPathBack + 'mongo.png'}/>
                                        <img src={imgPathBack + 'mysql1.png'}/>
                                        <img src={imgPathBack + 'bash.png'}/>
                                    </div>
                                    <div >
                                        <img src={imgPathBack + 'laravel3.png'}/>
                                        <img src={imgPathBack + 'yii22.png'}/>
                                        <img src={imgPathBack + 'zend2.png'}/>
                                        <img src={imgPathBack + 'express1.png'}/>
                                    </div>
                                    <div >
                                        <img src={imgPathBack + 'git1.png'}/>
                                        <img src={imgPathOther + 'ubuntu.png'}/>
                                        <img src={imgPathOther + 'docker.svg'}/>
                                        <img src={imgPathBack + 'apache.png'}/>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="slide">
                                <div >
                                    <div >
                                        <img src={imgPathFront + 'html2.png'}/>
                                        <img src={imgPathFront + 'css2.png'}/>
                                        <img src={imgPathFront + 'js1.png'}/>
                                        <img src={imgPathFront + 'jquery1.png'}/>
                                    </div>
                                    <div >
                                        <img src={imgPathFront + 'angular.png'}/>
                                        <img src={imgPathFront + 'react2.png'}/>
                                        <img src={imgPathFront + 'bootstrap1.png'}/>
                                        <img src={imgPathFront + 'materialize.svg'}/>
                                    </div>
                                    <div >

                                        <img src={imgPathFront + 'redux.png'}/>
                                        <img src={imgPathFront + 'webpack2.gif'}/>
                                        <img src={imgPathFront + 'yarn.png'}/>
                                        <img src={imgPathFront + 'npm.png'}/>
                                    </div>
                                    <div >
                                        <img src={imgPathFront + 'sass.png'}/>
                                        <img src={imgPathFront + 'less.png'}/>
                                        <img src={imgPathFront + 'stylus.png'}/>
                                        <img src={imgPathFront + 'mocha.png'}/>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>


        )

    }
}

export default Skills;
