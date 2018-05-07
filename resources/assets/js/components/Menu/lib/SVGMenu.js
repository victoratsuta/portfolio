import React, {Component} from 'react';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {toggleStatus, setStatusMenu} from '../../../actions/menu'

function mapStateToProps(state) {
    return {
        menu: state.menu,
        page: state.page
    }
}

function matchDispatchToProps(dispatch) {

    return bindActionCreators({setStatus: setStatusMenu, toggleStatus: toggleStatus}, dispatch)
}


class SVGMenu extends Component {

    constructor(props) {

        super(props)
        this.path = window.location.href.split('/')[3].split('#');
        this.keys = {37: 1, 38: 1, 39: 1, 40: 1};

    }

    componentDidMount() {
        this.init()
    }

    componentDidUpdate(prevProps) {

        if (this.props.page.statusReload) {
            setTimeout(() => {this.close()}, 500)
        }

    }

    init() {
        this.el = document.getElementById('menu');
        this.trigger = this.el.querySelector('button.menu__handle');
        this.triggerBody = document.getElementById('main_container');
        this.shapeEl = this.el.querySelector('div.morph-shape');

        var s = Snap(this.shapeEl.querySelector('svg'));
        this.pathEl = s.select('path');
        this.paths = {
            reset: this.pathEl.attr('d'),
            open: this.shapeEl.getAttribute('data-morph-open'),
            close: this.shapeEl.getAttribute('data-morph-close')
        };

        this.props.setStatus(false)
        this.initEvents();
    };

    initEvents() {
        this.triggerBody.addEventListener('click', this.toggleBody.bind(this));
        this.trigger.addEventListener('click', this.toggle.bind(this));
    };

    toggleBody() {


        if (this.props.menu.status) {
            this.enableScroll();


            // if (document.getElementById('img_loader').style.opacity != 0) {
            //     $('#img_loader').animate({opacity: 1}, 500);
            // }
            //
            // if (this.path[0] == 'contacts') {
            //     $('#mycontact_form_container').animate({opacity: 1}, 500);
            //     $('#mapid').animate({opacity: 1}, 500);
            // }


            classie.remove(this.el, 'menu--anim');
            setTimeout(() => {
                classie.remove(this.el, 'menu--open');
            }, 250);

            this.pathEl.stop().animate({'path': this.props.menu.status ? this.paths.close : this.paths.open}, 350, mina.easeout, () => {
                this.pathEl.stop().animate({'path': this.paths.reset}, 800, mina.elastic);
            });

            this.props.toggleStatus(this.props.menu.status)

        }
    };

    toggle() {

        // this.path = window.location.href.split('/')[3].split('#');

        if (this.props.menu.status) {

            this.enableScroll();

            //
            // if (document.getElementById('img_loader').style.opacity != 0) {
            //     $('#img_loader').animate({opacity: 1}, 500);
            // }
            //
            // if (this.contactForm == 'contact') {
            //     $('#mycontact_form_container').animate({opacity: 1}, 500);
            //     $('#mapid').animate({opacity: 1}, 500);
            // }

            classie.remove(this.el, 'menu--anim');
            setTimeout(() => {
                classie.remove(this.el, 'menu--open');
            }, 250);

        }
        else {

            this.disableScroll();

            // if (document.getElementById('img_loader').style.opacity == '' || document.getElementById('img_loader').style.opacity == 1) {
            //     $('#img_loader').animate({opacity: 0.3}, 500);
            // }
            // if (this.path[1] !== 'welhome' && this.path[1] !== 'yandex') {
            //     $('#main_container').animate({opacity: 0.3}, 500);
            // }
            // else {
            //     $('#main_container').animate({opacity: 0.1}, 500);
            // }
            // if (this.contactForm == 'contact') {
            //     $('#mycontact_form_container').animate({opacity: 0.3}, 500);
            //     $('#mapid').animate({opacity: 0.3}, 500);
            // }
            //


            classie.add(this.el, 'menu--anim');
            setTimeout(() => {
                classie.add(this.el, 'menu--open');
            }, 250);
        }
        this.pathEl.stop().animate({'path': this.props.menu.status ? this.paths.close : this.paths.open}, 350, mina.easeout, () => {
            this.pathEl.stop().animate({'path': this.paths.reset}, 800, mina.elastic);
        });

        this.props.toggleStatus(this.props.menu.status)
    };

    close() {

        this.enableScroll();

        classie.remove(this.el, 'menu--anim');
        setTimeout(() => {
            classie.remove(this.el, 'menu--open');
        }, 250);

        this.pathEl.stop().animate({'path': this.props.menu.status ? this.paths.close : this.paths.open}, 350, mina.easeout, () => {
            this.pathEl.stop().animate({'path': this.paths.reset}, 800, mina.elastic);
        });

        this.props.toggleStatus(this.props.menu.status)

    }

    preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;
    }

    preventDefaultForScrollKeys(e) {
        if (this.keys[e.keyCode]) {
            this.preventDefault(e);
            return false;
        }
    }

    disableScroll() {
        if (window.addEventListener) // older FF
            window.addEventListener('DOMMouseScroll', this.preventDefault, false);
        window.onwheel = this.preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
        window.ontouchmove = this.preventDefault; // mobile
        document.onkeydown = this.preventDefaultForScrollKeys;
    }

    enableScroll() {
        if (window.removeEventListener)
            window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
    }

    render() {
        return <div></div>
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(SVGMenu);
