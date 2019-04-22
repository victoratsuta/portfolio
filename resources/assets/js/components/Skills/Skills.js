import React, { Component } from 'react';
import SliderFx from './lib/SliderFx';
import './scss/Skills.scss';

const imgPathBack = '../imgs/skills/backand/';
const imgPathFront = '../imgs/skills/frontend/';
const imgPathOther = '../imgs/skills/other/';

class Skills extends Component {
  componentDidMount () {
    this.SliderFx = new SliderFx(document.getElementById('Skills_slideshow'), {
      easing: 'cubic-bezier(.8,0,.2,1)'
    });
    this.SliderFx.init();
  }

  render () {
    return (

      <div id="Skills_slideshow" className="for_fade">
        <ul>
          <li>
            <div className="slide">
              <div>
                <div>
                  <img src={imgPathBack + 'python1.png'}/>
                  <img src={imgPathBack + 'nodejs.png'}/>
                  <img src={imgPathBack + 'php1.png'}/>
                  <img src={imgPathBack + 'nginx1.png'}/>
                </div>
                <div>
                  <img src={imgPathBack + 'graphql .jpeg'}/>
                  <img src={imgPathBack + 'mongo.png'}/>
                  <img src={imgPathBack + 'mysql1.png'}/>
                  <img src={imgPathBack + 'bash.png'}/>
                </div>
                <div>
                  <img src={imgPathBack + 'laravel3.png'}/>
                  <img src={imgPathBack + 'lumen-logo.png'}/>
                  <img src={imgPathBack + 'yii2.png'}/>
                  <img src={imgPathBack + 'express1.png'}/>
                </div>
                <div>
                  <img src={imgPathBack + 'git.png'}/>
                  <img src={imgPathOther + 'ubuntu.png'}/>
                  <img src={imgPathOther + 'docker.svg'}/>
                  <img src={imgPathBack + 'apache.png'}/>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div>
                <div>

                  <img src={imgPathFront + 'js1.png'}/>
                  <img src={imgPathFront + 'vue.png'}/>
                  <img src={imgPathFront + 'nuxt.png'}/>
                  <img src={imgPathFront + 'vuex.png'}/>
                </div>
                <div>
                  <img src={imgPathFront + 'ts.png'}/>
                  <img src={imgPathFront + 'angular.png'}/>
                  <img src={imgPathFront + 'rxjs.png'}/>
                  <img src={imgPathFront + 'clarity.png'}/>

                </div>
                <div>
                  <img src={imgPathFront + 'react.png'}/>
                  <img src={imgPathFront + 'redux.png'}/>
                  <img src={imgPathFront + 'redux-saga.png'}/>
                  <img src={imgPathFront + 'flow.png'}/>

                </div>
                <div>
                  <img src={imgPathFront + 'sass.png'}/>
                  <img src={imgPathFront + 'less.png'}/>
                  <img src={imgPathFront + 'yarn.png'}/>
                  <img src={imgPathFront + 'webpack.png'}/>

                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="slide">
              <div>
                <div>
                  <img src={imgPathFront + 'html2.png'}/>
                  <img src={imgPathFront + 'css2.png'}/>
                  <img src={imgPathFront + 'jquery.png'}/>
                  <img src={imgPathFront + 'npm.png'}/>

                </div>
                <div>
                  <img src={imgPathFront + 'bootstrap1.png'}/>
                  <img src={imgPathFront + 'enzym.png'}/>
                  <img src={imgPathFront + 'jest.png'}/>
                  <img src={imgPathFront + 'eslint.png'}/>
                </div>
                <div>
                </div>
                <div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

    );
  }
}

export default Skills;
