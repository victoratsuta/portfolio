<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/sitemap', 'SiteMapController@index');

Route::get('/', function () {

    $meta = [
        'title' => 'Viktor Atsuta | Senior Software Engineer - Official website',
        'description' => 'The official site of the professional web developer Viktor Atsuta. Development and optimization of web applications of any complexity.',
        'keywords' => 'Viktor Atsuta, Atsuta, official website, website development, Application Development',
    ];

    return view('main', ['meta' => $meta]);
})->name('main');

Route::get('/portfolio', function () {

    $meta = [
        'title' => 'Viktor Atsuta | Senior Software Engineer - Portfolio',
        'description' => 'List of developed projects, frontend and backend parts of web applications',
        'keywords' => 'Viktor Atsuta, Atsuta, official website, portfolio, project list, backend, frontend',
    ];

    return view('main', ['meta' => $meta]);
})->name('portfolio');

Route::get('/skills', function () {

    $meta = [
        'title' => 'Viktor Atsuta | Senior Software Engineer - Skills',
        'description' => 'The official site of the professional web developer Viktor Atsuta. List of technologies and skills',
        'keywords' => 'Viktor Atsuta, Atsuta, official website, web technologies, my skills',
    ];

    return view('main', ['meta' => $meta]);

})->name('skills');

Route::get('/contacts', function () {

    $meta = [
        'title' => 'Viktor Atsuta | Senior Software Engineer - Contact me',
        'description' => 'The official site of the professional web developer Viktor Atsuta. Contact form with me',
        'keywords' => 'Viktor Atsuta, Atsuta, official website, Feedback, contact me',
    ];

    return view('main', ['meta' => $meta]);

})->name('contacts');


Route::post('mail', 'MailController@index');
