import React , {Component} from 'react';

class ScrollButton extends Component {

    scrollToTop() {

        $('.Navigation').children().first()[0].click();
    }

    render () {
        return <div className={'toTopAnchor'} onClick={ () => { this.scrollToTop(); }}/>
    }
}

export default ScrollButton;