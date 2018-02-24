import React, {Component} from 'react';
import Menu from './Menu';
import Smoke_Zone from './portfolio_sections/Smoke_Zone';
import History24 from './portfolio_sections/History24';
import WellHome from './portfolio_sections/WellHome';
// import Factoring from './portfolio_sections/Factoring';
import Yandex from './portfolio_sections/Yandex';
import ScrollButton from './ScrollButton';
import {ScrollToTopOnMount, SectionsContainer, Section} from 'react-fullpage';


let options = {
    sectionClassName: 'section',
    anchors: [
        'yandex',
        'smoke-zone',
        'history24',
        'welhome',
        // 'factoring'
    ],
    scrollBar: false,
    navigation: true,
    verticalAlign: false,
    sectionPaddingTop: '0px',
    sectionPaddingBottom: '0px',
    arrowNavigation: true
};


class Portfolio extends Component {


    render() {
        return (
            <div className="demo-1">
                <div id="ip-container" className="ip-container">
                    <Menu/>
                    <div id="main_container">
                        <div>
                            <ScrollToTopOnMount/>
                            <SectionsContainer className="container" {...options}>
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
                                {/*<Section>*/}
                                {/*<Factoring/>*/}
                                {/*</Section>*/}
                            </SectionsContainer>
                        </div>
                    </div>
                    <ScrollButton/>
                </div>
            </div>
        )
    }

}

export default Portfolio;
























