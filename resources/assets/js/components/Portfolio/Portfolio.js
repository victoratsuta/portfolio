import React, {Component} from 'react';

import Smoke_Zone from './sections/Smoke_Zone';
import History24 from './sections/History24';
import WellHome from './sections/WellHome';
import Yandex from './sections/Yandex';
import C2Corner from './sections/C2Corner';
// import CherryPick from './sections/CherryPick';
// import Houses from './sections/Houses';
import CompareIp from './sections/CompareIp/CompareIp';
import Arcbazar from './sections/Arcbazar';
import Factoringvergelijken from './sections/Factoringvergelijken';

import ScrollButton from './parts/ScrollButton';
import {ScrollToTopOnMount, Section, SectionsContainer} from 'react-fullpage';

import './scss/Portfolio.scss'
import {URLS} from './../../constants/urls'

import {connect} from "react-redux";
import {setPage} from "../../actions/page";
import {bindActionCreators} from "redux";
import Linkful from "./sections/Linkful/Linkful";
import Smsplaza from "./sections/Smsplaza/Smsplaza";
import Abirix from "./sections/Abirix/Abirix";
import Houses from "./sections/Houses";
import ReactFullpage from '@fullpage/react-fullpage';

function mapStateToProps(state) {
    return {
        page: state.page,
        preloader: state.preloader,
    }
}

function matchDispatchToProps(dispatch) {

    return bindActionCreators({setPage: setPage}, dispatch)

}

class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.setSlide = this.setSlide.bind(this)
        // this.options = {
        //     sectionClassName: 'section',
        //     anchors: [
        //
        //         URLS.linkful,
        //         URLS.compareip,
        //         URLS.smsplaza,
        //         URLS.c2corner,
        //         URLS.factoringvergelijken,
        //         URLS.abirix,
        //         URLS.arcbazar,
        //         URLS.yandex,
        //         // URLS.cherryPick,
        //         URLS.houses,
        //         // URLS.smokezone,
        //         URLS.history24,
        //         URLS.welhome,
        //     ],
        //     scrollBar: false,
        //     navigation: true,
        //     verticalAlign: false,
        //     sectionPaddingTop: '0px',
        //     sectionPaddingBottom: '0px',
        //     arrowNavigation: true,
        //     scrollCallback: (slide) => {
        //         this.setSlide(slide)
        //     }
        // };
    }

    componentWillMount() {

        // history.pushState("", document.title, window.location.pathname
        //     + window.location.search);
        //
        // this.props.setPage(URLS.linkful);

    }

    setSlide(page) {
        // const path = window.location.href.split('/')[3].split('#')
        //     let page = path[1] ? path[1] : URLS.first_slide

        this.props.setPage(page);

        console.log(this.props.page.page)

    }

    render() {
        return (

            <div>

                <ReactFullpage
                    navigation={true}
                    keyboardScrolling={true}
                    anchors={

                       [
                           URLS.linkful,
                           URLS.compareip,
                           URLS.smsplaza,
                           URLS.c2corner,
                           URLS.factoringvergelijken,
                           URLS.abirix,
                           URLS.arcbazar,
                           URLS.yandex,
                           URLS.houses,
                           URLS.history24,
                           URLS.welhome,
                       ]
                    }
                    onLeave={(origin, destination, direction) => {

                        this.setSlide(destination.anchor)
                    }}

                    render={({ state, fullpageApi }) => {
                        return (
                            <ReactFullpage.Wrapper>
                                <div className="section">
                                    <Linkful/>
                                </div>
                                <div className="section">
                                    <CompareIp/>
                                </div>
                                <div className="section">
                                    <Smsplaza/>
                                </div>
                                <div className="section">
                                    <C2Corner/>
                                </div>
                                <div className="section">
                                    <Factoringvergelijken/>
                                </div>
                                <div className="section">
                                    <Abirix/>
                                </div>
                                <div className="section">
                                    <Arcbazar/>
                                </div>
                                <div className="section">
                                    <Yandex/>
                                </div>
                                <div className="section">
                                    <Houses/>
                                </div>
                                <div className="section">
                                    <History24/>
                                </div>
                                <div className="section">
                                    <WellHome/>
                                </div>

                            </ReactFullpage.Wrapper>
                        );
                    }}
                />


            </div>


        )
    }

}

export default connect(mapStateToProps, matchDispatchToProps)(Portfolio);
























