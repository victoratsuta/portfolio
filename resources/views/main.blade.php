<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>

        {{--<!-- Global site tag (gtag.js) - Google Analytics -->--}}
        {{--<script async src="https://www.googletagmanager.com/gtag/js?id=UA-112254789-1"></script>--}}
        {{--<script>--}}
            {{--window.dataLayer = window.dataLayer || [];--}}
            {{--function gtag(){dataLayer.push(arguments);}--}}
            {{--gtag('js', new Date());--}}

            {{--gtag('config', 'UA-112254789-1');--}}
        {{--</script>--}}


    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="minimal-ui, width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">


    <!-- Chrome, Firefox OS and Opera -->
    <meta name="theme-color" content="#0E0D10">
    <!-- Windows Phone -->
    <meta name="msapplication-navbutton-color" content="#0E0D10">
    <!-- iOS Safari -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name=apple-mobile-web-app-status-bar-style content=#0E0D10>

    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Victor Atsuta | Web Master</title>

    <link rel="apple-touch-icon" sizes="180x180" href="{{asset('/favicons/apple-touch-icon.png')}}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{asset('/favicons/favicon-32x32.png')}}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{asset('/favicons/favicon-16x16.png')}}">
    <link rel="manifest" href="{{asset('/favicons/manifest.json')}}">
    <link rel="mask-icon" href="{{asset('/favicons/safari-pinned-tab.svg')}}" color="#65afc4">
    <meta name="theme-color" content="#ffffff">

    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Wire+One" rel="stylesheet">

    <link href="{{asset('css/app.css')}}" rel="stylesheet"
          type="text/css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css"
          integrity="sha512-M2wvCLH6DSRazYeZRIm1JnYyh22purTM+FDB5CsyxtQJYeKq83arPe5wgbNmcFXGqiSH2XR8dT/fJISVA1r/zQ=="
          crossorigin=""/>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
</head>
<body>

<div id="app">
</div>

<script src="{{asset('js/libraries/snap.svg.js')}}"></script>
<script src="{{asset('js/libraries/Modernizr.js')}}"></script>
<script src="{{asset('js/libraries/classie.js')}}"></script>
<script src="{{asset('js/app.js')}}"></script>

<script type='text/javascript'>
    window.__lo_site_id = 121800;

    (function() {
        var wa = document.createElement('script'); wa.type = 'text/javascript'; wa.async = true;
        wa.src = 'https://d10lpsik1i8c69.cloudfront.net/w.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wa, s);
    })();
</script>

</body>

</html>
