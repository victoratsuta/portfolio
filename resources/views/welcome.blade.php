<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Atsuta Victor | Web Master</title>

    <link rel="apple-touch-icon" sizes="180x180" href="{{asset('/favicons/apple-touch-icon.png')}}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{asset('/favicons/favicon-32x32.png')}}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{asset('/favicons/favicon-16x16.png')}}">
    <link rel="manifest" href="{{asset('/favicons/manifest.json')}}">
    <link rel="mask-icon" href="{{asset('/favicons/safari-pinned-tab.svg')}}" color="#65afc4">
    <meta name="theme-color" content="#ffffff">

    <link href="{{asset('css/css_pack.css')}}" rel="stylesheet" type="text/css">
    <script src="{{asset('js/preloadder.js')}}" ></script>

</head>
<body>
    <div id="portfolio">
    </div>
    <script src="{{asset('js/js_pack.js')}}" ></script>

</body>

</html>