import React , {Component} from 'react';
import Menu from './Menu';
import Smoke_Zone from './portfolio_sections/Smoke_Zone';
import History24 from './portfolio_sections/History24';
import WellHome from './portfolio_sections/WellHome';
import Factoring from './portfolio_sections/Factoring';

import {SectionsContainer, Section} from 'react-fullpage';


let options = {
    sectionClassName:     'section',
    anchors:                [
                            'smoke-zone',
                            'history24',
                            'welhome',
                            'factoring'
                            ],
    scrollBar:            false,
    navigation:           true,
    verticalAlign:        false,
    sectionPaddingTop:    '0px',
    sectionPaddingBottom: '0px',
    arrowNavigation:      true
};



class Portfolio extends Component {


    render(){
        return(
            <div className="demo-1">
                <div id="ip-container" className="ip-container" >
                    <Menu/>
                    <div  id="main_container">
                        <div>
                            <SectionsContainer className="container" {...options}>
                                <Section className="custom-section" verticalAlign="true">
                                    <Smoke_Zone/>
                                </Section>
                                <Section>
                                    <History24/>
                                </Section>
                                <Section>
                                    <WellHome/>
                                </Section>
                                <Section>
                                    <Factoring/>
                                </Section>
                            </SectionsContainer>
                        </div>
                    </div>
                </div>{/* /container */}
            </div>
        )
    }

}
export default Portfolio;
























