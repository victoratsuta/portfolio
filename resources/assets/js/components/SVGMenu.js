class SVGMenu {

    constructor(contactForm = null, el = document.getElementById('menu')) {
        this.path = window.location.href.split('/')[3].split('#');
        this.el = el;
        this.contactForm = contactForm;
        this.keys = {37: 1, 38: 1, 39: 1, 40: 1};
    }

    init() {
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

        this.isOpen = false;
        this.initEvents();
    };

    initEvents() {
        this.triggerBody.addEventListener('click', this.toggleBody.bind(this));
        this.trigger.addEventListener('click', this.toggle.bind(this));
    };

    toggleBody() {

        this.enableScroll();
        $('#main_container').animate({opacity: 1}, 500);
        this.path = window.location.href.split('/')[3].split('#');

        if (this.isOpen) {
            document.getElementById('main_container').style.opacity = 1;

            if (document.getElementById('img_loader').style.opacity != 0) {
                document.getElementById('img_loader').style.opacity = 1;
            }

            if (this.path[0] == 'contacts') {
                document.getElementById('mycontact_form_container').style.opacity = 1;
                document.getElementById('mapid').style.opacity = 1;
            }
            if (this.path[0] == 'portfolio') {
                $(".morph-shape").removeClass('Smoke_Zone__stroke History24__stroke WellHome__stroke Factoring__stroke');
            }
            classie.remove(this.el, 'menu--anim');
            setTimeout(() => {
                classie.remove(this.el, 'menu--open');
            }, 250);

            this.pathEl.stop().animate({'path': this.isOpen ? this.paths.close : this.paths.open}, 350, mina.easeout, () => {
                this.pathEl.stop().animate({'path': this.paths.reset}, 800, mina.elastic);
            });

            this.isOpen = !this.isOpen;

        }
    };

    toggle() {
        this.path = window.location.href.split('/')[3].split('#');

        if (this.isOpen) {

            this.enableScroll();

            $('#main_container').animate({opacity: 1}, 500);

            if (document.getElementById('img_loader').style.opacity != 0) {
                $('#img_loader').animate({opacity: 1}, 500);
            }

            if (this.contactForm == 'contact') {
                $('#mycontact_form_container').animate({opacity: 1}, 500);
                $('#mapid').animate({opacity: 1}, 500);
            }
            if (this.path[0] == 'portfolio') {
                $(".morph-shape").removeClass('Smoke_Zone__stroke History24__stroke WellHome__stroke Factoring__stroke');
            }
            classie.remove(this.el, 'menu--anim');
            setTimeout(() => {
                classie.remove(this.el, 'menu--open');
            }, 250);

        }
        else {

            this.disableScroll();

            if (document.getElementById('img_loader').style.opacity == '' || document.getElementById('img_loader').style.opacity == 1) {
                $('#img_loader').animate({opacity: 0.3}, 500);
            }
            if (this.path[1] !== 'welhome') {
                $('#main_container').animate({opacity: 0.3}, 500);
            }
            else {
                $('#main_container').animate({opacity: 0.1}, 500);
            }
            if (this.contactForm == 'contact') {
                $('#mycontact_form_container').animate({opacity: 0.3}, 500);
                $('#mapid').animate({opacity: 0.3}, 500);
            }

            if (this.path[1] == 'smoke-zone' || (this.path[0] == 'portfolio' && typeof this.path[1] == 'undefined')) {
                $(".morph-shape").addClass('Smoke_Zone__stroke');
            }
            if (this.path[1] == 'history24') {
                $(".morph-shape").addClass('History24__stroke');
            }
            if (this.path[1] == 'welhome') {
                $(".morph-shape").addClass('WellHome__stroke');
            }
            if (this.path[1] == 'factoring') {
                $(".morph-shape").addClass('Factoring__stroke');
            }
            classie.add(this.el, 'menu--anim');
            setTimeout(() => {
                classie.add(this.el, 'menu--open');
            }, 250);
        }
        this.pathEl.stop().animate({'path': this.isOpen ? this.paths.close : this.paths.open}, 350, mina.easeout, () => {
            this.pathEl.stop().animate({'path': this.paths.reset}, 800, mina.elastic);
        });

        this.isOpen = !this.isOpen;
    };

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
}

export default SVGMenu;
