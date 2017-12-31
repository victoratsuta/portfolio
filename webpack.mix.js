let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.webpackConfig({
    module: {
        rules: [{
            exclude: /node_modules/,
        }]
    }
});
mix.react('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css').options({
    postCss: [
        require('postcss-css-variables')()
    ]
})
    .babel([
    'public/js/libreris/snap.svg-min.js',
    'public/js/libreris/sliderFx.js',
    'public/js/libreris/server.rendering.helper.js',
    'public/js/libreris/main.js',
], 'public/js/libreris.js')
    .babel([
        'public/js/libreris/leaflet.js',
        'public/js/app.js',
        'public/js/libreris.js',
    ], 'public/js/js_pack.js')


    .sass('resources/assets/sass/pack/effect1.scss', 'public/css/pack').options({
    postCss: [
        require('postcss-css-variables')()
    ]
})
    .sass('resources/assets/sass/pack/sidebar.scss', 'public/css/pack').options({
    postCss: [
        require('postcss-css-variables')()
    ]
})
    .sass('resources/assets/sass/pack/contact_form.scss', 'public/css/pack').options({
    postCss: [
        require('postcss-css-variables')()
    ]
})
    .sass('resources/assets/sass/pack/slideshow.scss', 'public/css/pack').options({
    postCss: [
        require('postcss-css-variables')()
    ]
})
    .sass('resources/assets/sass/pack/tech.scss', 'public/css/pack').options({
    postCss: [
        require('postcss-css-variables')()
    ]
})
    .sass('resources/assets/sass/pack/animate.min.scss', 'public/css/pack').options({
    postCss: [
        require('postcss-css-variables')()
    ]
})
    .sass('resources/assets/sass/pack/demo.scss', 'public/css/pack').options({
    postCss: [
        require('postcss-css-variables')()
    ]
})
    .sass('resources/assets/sass/pack/leaflet.scss', 'public/css/pack').options({
    postCss: [
        require('postcss-css-variables')()
    ]
})
    .sass('resources/assets/sass/portfolio_sections/History24.scss', 'public/css/pack').options({
    postCss: [
        require('postcss-css-variables')()
    ]
})
    .sass('resources/assets/sass/portfolio_sections/Factoring.scss', 'public/css/pack').options({
    postCss: [
        require('postcss-css-variables')()
    ]
})
    .sass('resources/assets/sass/portfolio_sections/Smoke_Zone.scss', 'public/css/pack').options({
    postCss: [
        require('postcss-css-variables')()
    ]
})
    .sass('resources/assets/sass/portfolio_sections/WellHome.scss', 'public/css/pack').options({
    postCss: [
        require('postcss-css-variables')()
    ]
})
    .styles([
        'public/css/pack/History24.css',
        'public/css/pack/Factoring.css',
        'public/css/pack/Smoke_Zone.css',
        'public/css/pack/WellHome.css',

        'public/css/pack/normolize.css',
        'public/css/pack/demo.css',
        'public/css/pack/effect1.css',
        'public/css/pack/sidebar.css',
        'public/css/pack/contact_form.css',
        'public/css/pack/slideshow.css',
        'public/css/pack/tech.css',
        'public/css/pack/animate.min.css',
        'public/css/pack/font-awesome.min.css',
        'public/css/pack/fonts.css',
        'public/css/pack/leaflet.css',
    ], 'public/css/all.css')
    .styles([
        'public/css/app.css',
        'public/css/all.css',
    ], 'public/css/css_pack.css');


const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');

mix.webpackConfig({
    plugins: [
        new CopyWebpackPlugin([{
            from: 'resources/assets/imgs',
            to: 'imgs', // Laravel mix will place this in 'public/img'
        }]),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            plugins: [
                imageminMozjpeg({
                    quality: 80,
                })

            ]
        })
    ]
});