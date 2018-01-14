    class PathLoader {
    constructor(el) {
        this.el = el;
        // clear stroke
        this.el.style.strokeDasharray = this.el.style.strokeDashoffset = this.el.getTotalLength();

    }

    _draw(val) {
        this.el.style.strokeDashoffset = this.el.getTotalLength() * (1 - val);
        // this.el.style.strokeDashoffset =0;
    }

    setProgress(val, callback) {
        this._draw(val);
        if (callback && typeof callback === 'function') {
            // give it a time (ideally the same like the transition time) so that the last progress increment animation is still visible.
            setTimeout(callback, 200);
            // setTimeout( callback, 0 );
        }
    }

    setProgressFn(fn) {

        if (typeof fn === 'function') {
            fn(this);
        }
    }
}

export default PathLoader;
