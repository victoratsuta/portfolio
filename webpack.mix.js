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

    .babel([
        'public/js/libreris/preloadder.js',
        'public/js/app.js',
    ], 'public/js/bundle.js')
    .babel([
        'public/js/libreris/snap.svg-min.js',
        'public/js/libreris/sliderFx.js',
        'public/js/libreris/server.rendering.helper.js',
        'public/js/libreris/main.js',
    ], 'public/js/libraries.js')

    .sass('resources/assets/sass/app.scss', 'public/css').options({
    postCss: [
        require('postcss-css-variables')()
    ]
})
    .sass('resources/assets/sass/libreris.scss', 'public/css').options({
    postCss: [
        require('postcss-css-variables')()
    ]
})

    .styles([
        'public/css/app.css',
        'public/css/libreris.css',

    ], 'public/css/bundle.css');

// const ImageminPlugin = require('imagemin-webpack-plugin').default;
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const imageminMozjpeg = require('imagemin-mozjpeg');
//
// mix.webpackConfig({
//     plugins: [
//         new CopyWebpackPlugin([{
//             from: 'resources/assets/imgs',
//             to: 'imgs', // Laravel mix will place this in 'public/img'
//         }]),
//         new ImageminPlugin({
//             test: /\.(jpe?g|png|gif|svg)$/i,
//             plugins: [
//                 imageminMozjpeg({
//                     quality: 80,
//                 })
//
//             ]
//         })
//     ]
// });