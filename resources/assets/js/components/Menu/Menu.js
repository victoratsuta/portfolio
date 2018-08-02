import React, {Component} from 'react';
import SVGMenu from './lib/SVGMenu';
import {URLS} from './../../constants/urls'
import {connect} from "react-redux";
import {setPage, reloadPage} from "../../actions/page";
import {bindActionCreators} from "redux";
import Loading from './../Preloader/lib/Loading'

import './scss/Menu.scss'
import Slideshow from "../Portfolio/sections/CompareIp/lib/Slideshow";

let styleClasses = {}

styleClasses[URLS.main] = 'effects-normal'
styleClasses[URLS.contacts] = 'effects-normal'
styleClasses[URLS.skills] = 'effects-normal'
styleClasses[URLS.welhome] = 'effects-welhome'
styleClasses[URLS.history24] = 'effects-history24'
styleClasses[URLS.smokezone] = 'effects-smoke-zone'
styleClasses[URLS.yandex] = 'effects-yandex'

styleClasses[URLS.compareip] = 'effects-compareIp'
styleClasses[URLS.first_slide] = 'effects-compareIp'
styleClasses[URLS.portfolio] = 'effects-compareIp'

styleClasses[URLS.c2corner] = 'effects-c2corner'
styleClasses[URLS.cherryPick] = 'effects-cherry'
styleClasses[URLS.houses] = 'effects-house'

const styleStroke = {}

styleStroke[URLS.main] = 'stroke-normal'
styleStroke[URLS.contacts] = 'stroke-normal'
styleStroke[URLS.skills] = 'stroke-normal'
styleStroke[URLS.welhome] = 'stroke-welhome'
styleStroke[URLS.history24] = 'stroke-history24'
styleStroke[URLS.smokezone] = 'stroke-smoke-zone'
styleStroke[URLS.yandex] = 'stroke-yandex'

styleStroke[URLS.c2corner] = 'stroke-c2corner'
styleStroke[URLS.cherryPick] = 'stroke-cherry'

styleStroke[URLS.compareip] = 'stroke-compareIp'
styleStroke[URLS.first_slide] = 'stroke-compareIp'
styleStroke[URLS.portfolio] = 'stroke-compareIp'

function mapStateToProps(state) {
    return {
        menu: state.menu,
        page: state.page,
        preloader: state.preloader,
    }
}

function matchDispatchToProps(dispatch) {

    return bindActionCreators({setPage: setPage, reloadPage: reloadPage}, dispatch)

}

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            effectStyle : styleClasses[this.props.page.page],
            styleStroke : styleStroke[this.props.page.page]
        }

        this.clickHandler = this.clickHandler.bind(this)
        this.menuStyleHandler = this.menuStyleHandler.bind(this)
    }

    clickHandler(page) {
        this.props.setPage(page)
        this.props.reloadPage(true)
    }

    menuStyleHandler(){

        this.setState({
            effectStyle : styleClasses[this.props.page.page],
            styleStroke : styleStroke[this.props.page.page]
        })

    }

    render() {
        return (
            <nav id="menu" className="menu">
                <button className="menu__handle" onClick={this.menuStyleHandler}><span>Menu</span>
                </button>
                <div className="inner">
                    <ul className={this.state.effectStyle}>

                        <li onClick={() => this.clickHandler()}>
                            <a>
                                <i className={'icon fas fa-home'}/>
                                <span>Home</span>
                            </a>
                        </li>

                        <li onClick={() => this.clickHandler(URLS.portfolio)}>
                            <a>
                                <i className={'icon fas fa-rocket'}/>
                                <span>Portfolio</span>
                            </a>
                        </li>

                        <li onClick={() => this.clickHandler(URLS.skills)}>
                            <a>
                                <i className={'icon fas fa-cog'}/>
                                <span>Skills</span>
                            </a>
                        </li>

                        <li onClick={() => this.clickHandler(URLS.contacts)}>
                            <a>
                                <i className={'icon fas fa-envelope'}/>
                                <span>Contact me</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={'morph-shape ' + (this.props.menu.status ? this.state.styleStroke : '')}
                     data-morph-open="M300-10c0,0,295,164,295,410c0,232-295,410-295,410"
                     data-morph-close="M300-10C300-10,5,154,5,400c0,232,295,410,295,410">
                    <svg width="100%" height="100%" viewBox="0 0 600 800" preserveAspectRatio="none">
                        <path fill="none" d="M300-10c0,0,0,164,0,410c0,232,0,410,0,410"/>
                    </svg>
                </div>

                <SVGMenu/>

            </nav>
        )
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Menu);

