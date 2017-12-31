import React , {Component} from 'react';
import Menu from './Menu';

class Home extends Component {

    render(){
        return(
            <div className="demo-1">
                <div id="ip-container" className="ip-container">
                    <Menu/>
                    <div id="main_container">
                        {/* main content */}
                        <div className="ip-main for_fade">
                            <div className="neon" contentEditable>ATSUTA VICTOR</div>
                            <div className="info">&lt; I am fullstack web developer /&gt;</div>
                            <div className="info label_tech">
                                <p>I work with technologies such as
                                    <span className="txt-rotate" data-period={2000} data-rotate="[ &quot; Laravel.&quot;, &quot; React.&quot;, &quot; Yii 2.&quot;, &quot; Node JS.&quot; ]" />
                                </p>
                            </div>
                            <div className="icon_container">
                                <a href="https://github.com/victoratsuta" target="_blank"><div className="git">
                                </div>
                                </a>
                                <a href="https://www.codewars.com/users/victoratsuta" target="_blank"><div className="codewars">
                                </div>
                                </a>
                                <a href="https://vk.com/atsuta_victor" target="_blank"><div className="vk">
                                </div>
                                </a>
                            </div>
                        </div>


                    </div>
                </div>{/* /container */}
            </div>
        )
    }
}
export default Home;
