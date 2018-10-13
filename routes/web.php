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

Route::get('/', function () {

    $meta = [
        'title' => 'Victor Atsuta | Web Master - Official website',
        'description' => 'The official site of the professional web developer Victor Atsuta. Development and optimization of web applications of any complexity.',
        'keywords' => 'Victor Atsuta, Atsuta, official website, website development, Application Development',
    ];

    return view('main', ['meta' => $meta]);
});
Route::get('/portfolio', function () {

    $meta = [
        'title' => 'Victor Atsuta | Web Master - Portfolio',
        'description' => 'List of developed projects, frontend and backend parts of web applications',
        'keywords' => 'Victor Atsuta, Atsuta, official website, portfolio, project list, backend, frontend',
    ];

    return view('main', ['meta' => $meta]);
});
Route::get('/skills', function () {

    $meta = [
        'title' => 'Victor Atsuta | Web Master - Skills',
        'description' => 'The official site of the professional web developer Victor Atsuta. List of technologies and skills',
        'keywords' => 'Victor Atsuta, Atsuta, official website, web technologies, my skills',
    ];

    return view('main', ['meta' => $meta]);

});
Route::get('/contacts', function () {

    $meta = [
        'title' => 'Victor Atsuta | Web Master - Contact me',
        'description' => 'The official site of the professional web developer Victor Atsuta. Contact form with me',
        'keywords' => 'Victor Atsuta, Atsuta, official website, Feedback, contact me',
    ];

    return view('main', ['meta' => $meta]);

});


Route::post('mail', 'MailController@index');
