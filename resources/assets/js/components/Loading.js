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
        this.loadingStarted = false;

    }

    init() {

        let self = this;
        function onEndInitialAnimation (){
            // if (self.support.animations) {
            //     console.log('simulate456');
            //     window.removeEventListener(self.animEndEventName, onEndInitialAnimation);
            // }
            if(self.loadingStarted) return;
            $('.for_fade').css('visibility', 'hidden');


            self.startLoading();

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

        this.loadingStarted = true;

        let self = this;
        function simulationFn(instance) {

            window.loadingFast ? self.progress = 1 : self.progress = 0;

                var interval = setInterval(function () {
                    // self.progress = Math.min(self.progress + Math.random() * 0.1, 1);
                    self.progress = 1;
                    instance.setProgress(self.progress);

                    // reached the end
                    if (self.progress === 1) {
                        window.loadingFast = true;
                        if (self.prop == 'hide_logo' || $(window).height() < 500) {
                            $('#img_loader').animate({
                                opacity: 0,
                            }, 500);
                        }
                        classie.remove(self.container, 'loading');
                        classie.add(self.container, 'loaded');
                        clearInterval(interval);

                        let onEndHeaderAnimation = (ev) => {

                            if (self.support.animations) {
                                if (ev.target !== self.header) return;
                                window.removeEventListener(self.animEndEventName, onEndHeaderAnimation);
                            }

                            classie.add(document.body, 'layout-switch');
                            window.removeEventListener('scroll', self.noscroll);
                        };

                        if (self.support.animations) {
                            self.header.addEventListener(self.animEndEventName, onEndHeaderAnimation);
                        }
                        else {
                            onEndHeaderAnimation();
                        }
                    }
                }, 80);
        };

        this.loader.setProgressFn(simulationFn);

    }
    noscroll() {
        window.scrollTo(0, 0);
    }
}

export default Loading;
