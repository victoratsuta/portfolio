import React, {Component} from 'react';
import SVGMenu from './SVGMenu';
import Loading from './Loading';
import {withRouter} from 'react-router-dom'

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            svgMenu: null,
            loading: null
        };
        this.path = window.location.href.split('/')[3].split('#');
    }

    setSvgProp(prop) {
        this.setState({svgMenu: this.state.svgMenu = new SVGMenu(prop)});
    }

    setLoading(prop) {
        this.setState({loading: this.state.loading = new Loading(prop)});
    }

    clickHandler(type) {

        $("html, body").animate({scrollTop: 0}, "slow");
        $('#ip-container').addClass('unloaded');

        this.startLoading = () => {
            $('#ip-container').removeClass('loaded');
            $('#ip-container').removeClass('unloaded');

            if ($('#menu').hasClass('menu--anim') || $('#menu').hasClass('menu--open')) {
                $('.menu__handle').click();
            }
            switch (type) {

                case '':
                    this.props.history.push('/');
                    this.setSvgProp(null);
                    this.setLoading();
                    break;

                case 'skills':
                    this.props.history.push('/skills');
                    this.setLoading('hide_logo');
                    this.setSvgProp(null);
                    break;

                case 'contacts':
                    this.props.history.push('/contacts');
                    this.setLoading('hide_logo');
                    this.setSvgProp('contact');
                    break;

                case 'portfolio':
                    this.props.history.push('/portfolio');
                    this.setLoading('hide_logo');
                    this.setSvgProp(null);
                    break;
            }
            this.state.loading.init();
            this.state.svgMenu.init();
        };
        setTimeout(this.startLoading, 1000);
    }

    handleMenuStyle() {


        this.path = window.location.href.split('/')[3].split('#');

        if (this.path[1] == 'yandex' || (this.path[0] == 'portfolio' && typeof this.path[1] == 'undefined')) {
            $('.menu__ul').find('span').css('cssText', 'color : white !important');

            $('.menu__ul').find('i').css('cssText', 'color : white !important');

            $('.menu__ul').find('i').mouseenter(function () {
                $(this).css('cssText', 'color : #ED2025 !important');
            });
            $('.menu__ul').find('i').mouseleave(function () {
                $(this).css('cssText', 'color : white !important');
            })
        }

        if (this.path[1] == 'smoke-zone') {

            $('.menu__ul').find('span').css('cssText', 'color : #D40080 !important');

            $('.menu__ul').find('i').css('cssText', 'color : #5f656f !important');

            $('.menu__ul').find('i').mouseenter(function () {
                $(this).css('cssText', 'color : #D40080 !important');
            });
            $('.menu__ul').find('i').mouseleave(function () {
                $(this).css('cssText', 'color : #5f656f !important');
            })
        }


        if (this.path[1] == 'history24') {

            $('.menu__ul').find('span').css('cssText', 'color : #E6E6E6 !important');

            $('.menu__ul').find('i').css('cssText', 'color : #5f656f !important');

            $('.menu__ul').find('i').mouseenter(function () {
                $(this).css('cssText', 'color : #936229 !important');
            });
            $('.menu__ul').find('i').mouseleave(function () {
                $(this).css('cssText', 'color : #5f656f !important');
            })
        }
        if (this.path[1] == 'welhome') {

            $('.menu__ul').find('span').css('cssText', 'color : #E6E6E6 !important');

            $('.menu__ul').find('i').css('cssText', 'color : #5f656f !important');

            $('.menu__ul').find('i').mouseenter(function () {
                $(this).css('cssText', 'color : #E6E6E6 !important');
            });
            $('.menu__ul').find('i').mouseleave(function () {
                $(this).css('cssText', 'color : #5f656f !important');
            })
        }
        if (this.path[1] == 'factoring') {
            $('.menu__ul').find('span').css('cssText', 'color : #38925E !important');

            $('.menu__ul').find('i').css('cssText', 'color : #5f656f !important');

            $('.menu__ul').find('i').mouseenter(function () {
                $(this).css('cssText', 'color : #38925E !important');
            });
            $('.menu__ul').find('i').mouseleave(function () {
                $(this).css('cssText', 'color : #5f656f !important');
            })
        }
        if (this.path[0] == '' || this.path[0] != 'portfolio') {
            $('.menu__ul').find('span').css('cssText', 'color : deepskyblue !important');

            $('.menu__ul').find('i').css('cssText', 'color : #5f656f !important');

            $('.menu__ul').find('i').mouseenter(function () {
                $(this).css('cssText', 'color : deepskyblue');
            });
            $('.menu__ul').find('i').mouseleave(function () {
                $(this).css('cssText', 'color : #5f656f');
            })
        }
    }

    componentDidMount() {

        if (typeof  this.path[1] != 'undefined') {
            history.replaceState('', "", "portfolio");
        }
        if (this.path[0] == 'contacts') {
            this.setLoading('hide_logo');
            this.setSvgProp('contact');
        }
        if (this.path[0] == 'skills') {
            this.setLoading('hide_logo');
            this.setSvgProp(null);
        }
        if (this.path[0] == 'portfolio') {
            this.setLoading('hide_logo');
            this.setSvgProp(null);
        }
        if (this.path[0] == '') {
            this.setLoading('');
            this.setSvgProp(null);
        }
        this.state.loading.init();
        this.state.svgMenu.init();

    };

    render() {
        return (
            <div>
                <nav id="menu" className="menu">
                    <button className="menu__handle" onClick={this.handleMenuStyle.bind(this)}><span>Menu</span>
                    </button>
                    <div className="menu__inner">
                        <ul className="menu__ul">
                            <li onClick={this.clickHandler.bind(this, '')}>
                                <a>
                                    <i className={'icon fas fa-home'}></i>
                                    <span>Home</span>
                                </a>
                            </li>
                            <li onClick={this.clickHandler.bind(this, 'portfolio')}>
                                <a>
                                    <i className={'icon fas fa-rocket'}></i>
                                    <span>Portfolio</span>
                                </a>
                            </li>
                            <li onClick={this.clickHandler.bind(this, 'skills')}>
                                <a>
                                    <i className={'icon fas fa-cog'}></i>
                                    <span>Skills</span>
                                </a>
                            </li>
                            <li onClick={this.clickHandler.bind(this, 'contacts')}>
                                <a>
                                    <i className={'icon fas fa-envelope'}></i>
                                    <span>Contact me</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="morph-shape" data-morph-open="M300-10c0,0,295,164,295,410c0,232-295,410-295,410"
                         data-morph-close="M300-10C300-10,5,154,5,400c0,232,295,410,295,410">
                        <svg width="100%" height="100%" viewBox="0 0 600 800" preserveAspectRatio="none">
                            <path fill="none" d="M300-10c0,0,0,164,0,410c0,232,0,410,0,410"/>
                        </svg>
                    </div>
                </nav>
                {/* initial header */}
                <div className="ip-header" id="preloader_container">
                    <h1 className="ip-logo">

                        <img className="ip-inner " id="img_loader"
                             src={'../imgs/lion222.png'}
                             />
                    </h1>
                    <div className="ip-loader">
                        <svg className="ip-inner" width="60px" height="60px" viewBox="0 0 80 80">
                            <path className="ip-loader-circlebg"
                                  d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"/>
                            <path id="ip-loader-circle" className="ip-loader-circle"
                                  d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"/>
                        </svg>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Menu);
