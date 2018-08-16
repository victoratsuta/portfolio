import React, {Component} from 'react';

import Smoke_Zone from './sections/Smoke_Zone';
import History24 from './sections/History24';
import WellHome from './sections/WellHome';
import Yandex from './sections/Yandex';
import C2Corner from './sections/C2Corner';
import CherryPick from './sections/CherryPick';
import Houses from './sections/Houses';
import CompareIp from './sections/CompareIp/CompareIp';
import Arcbazar from './sections/Arcbazar';
import Factoringvergelijken from './sections/Factoringvergelijken';

import ScrollButton from './parts/ScrollButton';
import {ScrollToTopOnMount, SectionsContainer, Section} from 'react-fullpage';

import './scss/Portfolio.scss'
import {URLS} from './../../constants/urls'

import {connect} from "react-redux";
import {setPage} from "../../actions/page";
import {bindActionCreators} from "redux";

function mapStateToProps(state) {
    return {
        page : state.page,
        preloader: state.preloader,
    }
}

function matchDispatchToProps(dispatch) {

    return bindActionCreators({setPage : setPage}, dispatch)

}

class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.options = {
            sectionClassName: 'section',
            anchors: [
                URLS.compareip,
                URLS.c2corner,
                URLS.arcbazar,
                URLS.factoringvergelijken,
                // URLS.cherryPick,
                // URLS.houses,
                URLS.yandex,
                URLS.smokezone,
                URLS.history24,
                URLS.welhome,
            ],
            scrollBar: false,
            navigation: true,
            verticalAlign: false,
            sectionPaddingTop: '0px',
            sectionPaddingBottom: '0px',
            arrowNavigation: true,
            scrollCallback : (slide) => {this.setSlide(slide)}
        };
    }

    setSlide(){
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
                        <CompareIp preloader={this.props.preloader.preloader}/>
                    </Section>
                    <Section>
                        <C2Corner/>
                    </Section>
                    {/*<Section>*/}
                        {/*<CherryPick/>*/}
                    {/*</Section>*/}
                    {/*<Section>*/}
                        {/*<Houses/>*/}
                    {/*</Section>*/}
                    <Section>
                        <Arcbazar/>
                    </Section>
                    <Section>
                        <Factoringvergelijken/>
                    </Section>
                    <Section>
                        <Yandex/>
                    </Section>
                    <Section>
                        <Smoke_Zone/>
                    </Section>
                    <Section>
                        <History24/>
                    </Section>
                    <Section>
                        <WellHome/>
                    </Section>
                </SectionsContainer>
                <ScrollButton/>
            </div>


        )
    }

}

export default connect(mapStateToProps, matchDispatchToProps)(Portfolio);
























