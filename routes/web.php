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
    return view('welcome');
});
Route::get('/portfolio', function () {
    return view('welcome');
});
Route::get('/skills', function () {
    return view('welcome');
});
Route::get('/contacts', function () {
    return view('welcome');
});
Route::post('mail', 'MailController@index');