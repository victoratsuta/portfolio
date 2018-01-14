import PathLoader from './PathLoader';


class Loading {
    constructor(prop = '') {

        $('#img_loader').css('opacity', 1);
        this.prop = prop;
        this.support = {animations: window.Modernizr.cssanimations}
        this.container = document.getElementById('ip-container')
        this.animEndEventNames = {
            'WebkitAnimation': 'webkitAnimationEnd',
            'OAnimation': 'oAnimationEnd',
            'msAnimation': 'MSAnimationEnd',
            'animation': 'animationend'
        }
        this.animEndEventName = this.animEndEventNames[window.Modernizr.prefixed('animation')]
        this.header = this.container.querySelector('div.ip-header')
        this.loader = new PathLoader(document.getElementById('ip-loader-circle'))

    }

    init() {
        let onEndInitialAnimation = () => {
            if (this.support.animations) {
                window.removeEventListener(this.animEndEventName, onEndInitialAnimation);
            }
            $('.for_fade').css('visibility', 'hidden');
            this.startLoading();

             function showmain() {
                $('.for_fade').css('visibility', 'visible');
                $('.for_fade').addClass('animated fadeIn');
            }

            setTimeout(showmain, 1000);
        };

        // disable scrolling
        window.addEventListener('scroll', this.noscroll);

        // initial animation
        classie.add(this.container, 'loading');

        if (this.support.animations) {
            this.container.addEventListener(this.animEndEventName, onEndInitialAnimation);
        }
        else {
            onEndInitialAnimation();
        }
    }

    startLoading() {
        // simulate loading something..
        let simulationFn = (instance) => {
            let progress = 0,
                // var progress = 1,
                interval = setInterval(() => {
                    progress = Math.min(progress + Math.random() * 0.1, 1);

                    instance.setProgress(progress);

                    // reached the end
                    if (progress === 1) {

                        if (this.prop == 'hide_logo' || $(window).height() < 500) {
                            $('#img_loader').animate({
                                opacity: 0,
                            }, 500);
                        }
                        classie.remove(this.container, 'loading');
                        classie.add(this.container, 'loaded');
                        clearInterval(interval);

                        let onEndHeaderAnimation = (ev) => {

                            if (this.support.animations) {
                                if (ev.target !== this.header) return;
                                window.removeEventListener(this.animEndEventName, onEndHeaderAnimation);
                            }

                            classie.add(document.body, 'layout-switch');
                            window.removeEventListener('scroll', this.noscroll);
                        };

                        if (this.support.animations) {
                            this.header.addEventListener(this.animEndEventName, onEndHeaderAnimation);
                        }
                        else {
                            onEndHeaderAnimation();
                        }
                    }
                }, 160);
        };

        this.loader.setProgressFn(simulationFn);

    }
    noscroll() {
        window.scrollTo(0, 0);
    }
}

export default Loading;
