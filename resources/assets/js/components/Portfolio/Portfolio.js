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
        this.options = {
            sectionClassName: 'section',
            anchors: [

                URLS.linkful,
                URLS.compareip,
                URLS.smsplaza,
                // URLS.c2corner,
                // URLS.factoringvergelijken,
                URLS.abirix,
                // URLS.arcbazar,
                // URLS.yandex,
                // URLS.cherryPick,
                // URLS.houses,
                // URLS.smokezone,
                // URLS.history24,
                // URLS.welhome,
            ],
            scrollBar: false,
            navigation: true,
            verticalAlign: false,
            sectionPaddingTop: '0px',
            sectionPaddingBottom: '0px',
            arrowNavigation: true,
            scrollCallback: (slide) => {
                this.setSlide(slide)
            }
        };
    }

    componentWillMount() {

        history.pushState("", document.title, window.location.pathname
            + window.location.search);

        this.props.setPage(URLS.linkful);

    }

    setSlide() {
        const path = window.location.href.split('/')[3].split('#')
        let page = path[1] ? path[1] : 'first-slide'

        this.props.setPage(page);

        console.log(this.props.page.page)

    }

    render() {
        return (

            <div>
                <ScrollToTopOnMount/>
                <SectionsContainer className="container" {...this.options}>


                    <Section>
                        <Linkful/>
                    </Section>

                    <Section>
                        <CompareIp/>
                    </Section>


                    <Section>
                        <Smsplaza/>
                    </Section>

                    {/*<Section>*/}
                        {/*<C2Corner/>*/}
                    {/*</Section>*/}


                    {/*<Section>*/}
                        {/*<Factoringvergelijken/>*/}
                    {/*</Section>*/}


                    <Section>
                        <Abirix/>
                    </Section>


                    {/*<Section>*/}
                        {/*<Arcbazar/>*/}
                    {/*</Section>*/}

                    {/*<Section>*/}
                        {/*<Yandex/>*/}
                    {/*</Section>*/}

                    {/*<Section>*/}
                        {/*<Houses/>*/}
                    {/*</Section>*/}

                    {/*<Section>*/}
                        {/*<Smoke_Zone/>*/}
                    {/*</Section>*/}

                    {/*<Section>*/}
                        {/*<History24/>*/}
                    {/*</Section>*/}

                    {/*<Section>*/}
                        {/*<WellHome/>*/}
                    {/*</Section>*/}

                </SectionsContainer>
                <ScrollButton/>
            </div>


        )
    }

}

export default connect(mapStateToProps, matchDispatchToProps)(Portfolio);
























