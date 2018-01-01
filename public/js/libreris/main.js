/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */


var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

function printSkills() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};
printSkills();



var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove  = preventDefault; // mobile
    document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}




function SVGMenu(contactForm=null) {

    function SVGMenu( el, options ) {
        this.el = el;
        this.init();
    }

    SVGMenu.prototype.init = function() {
        this.trigger = this.el.querySelector( 'button.menu__handle' );
        this.triggerBody = document.getElementById('main_container');
        this.shapeEl = this.el.querySelector( 'div.morph-shape' );

        var s = Snap( this.shapeEl.querySelector( 'svg' ) );
        this.pathEl = s.select( 'path' );
        this.paths = {
            reset : this.pathEl.attr( 'd' ),
            open : this.shapeEl.getAttribute( 'data-morph-open' ),
            close : this.shapeEl.getAttribute( 'data-morph-close' )
        };

        this.isOpen = false;
        this.initEvents();
    };

    SVGMenu.prototype.initEvents = function() {
        this.triggerBody.addEventListener( 'click', this.toggleBody.bind(this) );
        this.trigger.addEventListener( 'click', this.toggle.bind(this) );
    };

    SVGMenu.prototype.toggleBody = function() {

        enableScroll();

        var self = this;
        path = window.location.href.split('/');
        path = path[3].split('#');

        if (this.isOpen){
            document.getElementById('main_container').style.opacity=1;

            if (document.getElementById('img_loader').style.opacity!=0){
                document.getElementById('img_loader').style.opacity=1;
            }

            if(path[0]=='contacts'){
                document.getElementById('mycontact_form_container').style.opacity=1;
                document.getElementById('mapid').style.opacity=1;
            }
            if(path[0] == 'portfolio'){
                $(".morph-shape").removeClass('Smoke_Zone__stroke History24__stroke WellHome__stroke Factoring__stroke');
            }
            classie.remove( self.el, 'menu--anim' );
            setTimeout( function() { classie.remove( self.el, 'menu--open' );	}, 250 );

            this.pathEl.stop().animate( { 'path' : this.isOpen ? this.paths.close : this.paths.open }, 350, mina.easeout, function() {
                self.pathEl.stop().animate( { 'path' : self.paths.reset }, 800, mina.elastic );
            } );

            this.isOpen = !this.isOpen;

        }
    };

    SVGMenu.prototype.toggle = function() {
        var self = this;

        path = window.location.href.split('/');
        path = path[3].split('#');

        if( this.isOpen ) {

            enableScroll();

            $('#main_container').animate({opacity:1},500);

            if (document.getElementById('img_loader').style.opacity!=0){
                $('#img_loader').animate({opacity:1},500);
            }

            if(contactForm=='contact'){
                $('#mycontact_form_container').animate({opacity:1},500);
                $('#mapid').animate({opacity:1},500);
            }
            if(path[0] == 'portfolio'){
                $(".morph-shape").removeClass('Smoke_Zone__stroke History24__stroke WellHome__stroke Factoring__stroke');
            }
            classie.remove( self.el, 'menu--anim' );
            setTimeout( function() { classie.remove( self.el, 'menu--open' );	}, 250 );

        }
        else {

            disableScroll();

            if (document.getElementById('img_loader').style.opacity=='' || document.getElementById('img_loader').style.opacity==1){
                $('#img_loader').animate({opacity:0.3},500);
            }
            if(path[1] !=='welhome'){
                $('#main_container').animate({opacity:0.3},500);
            }
            else{
                $('#main_container').animate({opacity:0.1},500);
            }
            if(contactForm=='contact'){
                $('#mycontact_form_container').animate({opacity:0.3},500);
                $('#mapid').animate({opacity:0.3},500);
            }

            if (path[1] == 'smoke-zone' || (path[0] == 'portfolio' && typeof path[1] == 'undefined')) {
                $(".morph-shape").addClass('Smoke_Zone__stroke');
            }
            if (path[1] == 'history24') {
                $(".morph-shape").addClass('History24__stroke');
            }
            if (path[1] == 'welhome') {
                $(".morph-shape").addClass('WellHome__stroke');
            }
            if (path[1] == 'factoring') {
                $(".morph-shape").addClass('Factoring__stroke');
            }
            classie.add( self.el, 'menu--anim' );
            setTimeout( function() { classie.add( self.el, 'menu--open' );	}, 250 );
        }
        this.pathEl.stop().animate( { 'path' : this.isOpen ? this.paths.close : this.paths.open }, 350, mina.easeout, function() {
            self.pathEl.stop().animate( { 'path' : self.paths.reset }, 800, mina.elastic );
        } );

        this.isOpen = !this.isOpen;
    };

    new SVGMenu( document.getElementById( 'menu' ) );

};
SVGMenu();