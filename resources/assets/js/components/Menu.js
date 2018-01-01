import React , {Component} from 'react';
import {Link, Router} from 'react-router';
var $ = require('jquery');

class Menu extends Component {

    clickHandler(type) {
        git
        $("html, body").animate({ scrollTop: 0 }, "slow");

        $('#img_loader').removeClass('Icon_shadow_show');
        $('#img_loader').removeClass('Icon_shadow_hide');
        $('#ip-container').addClass('unloaded');

        this.startLoading = () =>{
            $('#ip-container').removeClass('loaded');
            $('#ip-container').removeClass('unloaded');

            if($('#menu').hasClass('menu--anim') || $('#menu').hasClass('menu--open')){
                $('.menu__handle').click();
            }
            switch (type){

                case '':
                    path = window.location.href.split('/');
                    path = path[3].split('#');
                    this.context.router.push('/');
                    Loading();
                    SVGMenu();

                    if (path[0]=='skills' || path[0]=='contacts' || path[0]=='portfolio'){
                        printSkills();
                    }
                    break;

                case 'skills':
                    this.context.router.push('/skills');
                    Loading('hide_logo');
                    SVGMenu();
                    (function() {
                        new SliderFx( document.getElementById('slideshow'), {
                            easing : 'cubic-bezier(.8,0,.2,1)'
                        } );
                    })();
                    break;

                case 'contacts':
                    this.context.router.push('/contacts');
                    Loading('hide_logo');
                    SVGMenu('contact');
                    let mymap = L.map('mapid',{ zoomControl:false }).setView([44.58, 33.49], 13);
                    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidmljdG9yYXRzdXRhIiwiYSI6ImNqOW9iNnJjczJnaW8zM3MyeDdrcXBuN3oifQ.gIWOmeqEuCRHKmWb_AMXFQ', {
                        maxZoom: 18,
                        id: 'mapbox.dark',
                        accessToken: 'your.mapbox.access.token',
                    }).addTo(mymap);
                    let greenIcon = L.icon({
                        iconUrl: '../imgs/location-pin.png',
                        shadowUrl: '',

                        iconSize:     [38, 40], // size of the icon
                        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
                        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
                    });
                    L.marker([44.58, 33.49], {icon: greenIcon}).addTo(mymap);

                    break;

                case 'portfolio':
                    this.context.router.push('/portfolio');
                    Loading('hide_logo');
                    SVGMenu();

                    break;
            }

        };
        setTimeout(this.startLoading,1000);
    }

    handleMenuStyle(){
        let path = window.location.href.split('/')[3].split('#');
        let pathMain = path;


        if (path[1] == 'smoke-zone' || (path[0] == 'portfolio' && typeof path[1] == 'undefined')) {
            $('.menu__ul').find('span').css('cssText', 'color : #D40080 !important');
            $('.menu__ul').find('i').mouseenter(function () {
                $(this).css('cssText', 'color : #D40080 !important');
            });
            $('.menu__ul').find('i').mouseleave(function () {
                $(this).css('cssText', 'color : #5f656f !important');
            })
        }
        if (path[1] == 'history24') {

            $('.menu__ul').find('span').css('cssText', 'color : #E6E6E6 !important');
            $('.menu__ul').find('i').mouseenter(function () {
                $(this).css('cssText', 'color : #936229 !important');
            });
            $('.menu__ul').find('i').mouseleave(function () {
                $(this).css('cssText', 'color : #5f656f !important');
            })
        }
        if (path[1] == 'welhome') {

            $('.menu__ul').find('span').css('cssText', 'color : #E6E6E6 !important');
            $('.menu__ul').find('i').mouseenter(function () {
                $(this).css('cssText', 'color : #E6E6E6 !important');
            });
            $('.menu__ul').find('i').mouseleave(function () {
                $(this).css('cssText', 'color : #5f656f !important');
            })
        }
        if (path[1] == 'factoring') {
            $('.menu__ul').find('span').css('cssText', 'color : #38925E !important');
            $('.menu__ul').find('i').mouseenter(function () {
                $(this).css('cssText', 'color : #38925E !important');
            });
            $('.menu__ul').find('i').mouseleave(function () {
                $(this).css('cssText', 'color : #5f656f !important');
            })
        }
        if (pathMain[0] == '' || pathMain[0] != 'portfolio') {
            $('.menu__ul').find('span').css('cssText', 'color : deepskyblue !important');
            $('.menu__ul').find('i').mouseenter(function () {
                $(this).css('cssText', 'color : deepskyblue !important');
            });
            $('.menu__ul').find('i').mouseleave(function () {
                $(this).css('cssText', 'color : #5f656f !important');
            })
        }
    }
    render(){
        return(
            <div>
                <nav id="menu" className="menu">
                    <button className="menu__handle" onClick={this.handleMenuStyle.bind(this)}><span>Menu</span></button>
                    <div className="menu__inner">
                        <ul className="menu__ul">
                            <li onClick={this.clickHandler.bind(this,'')}><a><i className="fa fa-fw fa-home" /><span>Home<span /></span></a></li>
                            <li onClick={this.clickHandler.bind(this,'portfolio')}><a><i className="fa fa-fw fa-desktop" /><span>Portfolio<span /></span></a></li>
                            <li onClick={this.clickHandler.bind(this,'skills')}><a><i className="fa fa-fw fa-code" /><span>Skills<span /></span></a></li>
                            <li onClick={this.clickHandler.bind(this,'contacts')}><a><i className="fa fa-fw fa-envelope-open" /><span>Contact me<span /></span></a></li>
                        </ul>
                    </div>
                    <div className="morph-shape" data-morph-open="M300-10c0,0,295,164,295,410c0,232-295,410-295,410" data-morph-close="M300-10C300-10,5,154,5,400c0,232,295,410,295,410">
                        <svg width="100%" height="100%" viewBox="0 0 600 800" preserveAspectRatio="none">
                            <path fill="none" d="M300-10c0,0,0,164,0,410c0,232,0,410,0,410" />
                        </svg>
                    </div>
                </nav>
            {/* initial header */}
            <div className="ip-header" id="preloader_container">
                <h1 className="ip-logo">
                    <img className="ip-inner " id="img_loader" src={'../imgs/darkd_bl.png'} style={{maxWidth: 350,minWidth: 180, width: '20%'}} />
                </h1>
                <div className="ip-loader">
                    <svg className="ip-inner" width="60px" height="60px" viewBox="0 0 80 80">
                        <path className="ip-loader-circlebg" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z" />
                        <path id="ip-loader-circle" className="ip-loader-circle" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z" />
                    </svg>
                </div>
            </div>
        </div>
        )
    }
}
Menu.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default Menu;