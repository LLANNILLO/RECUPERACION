<?php

use App\Http\Controllers\AnimalController;
use App\Http\Controllers\InicioController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', InicioController::class)->name('inicio');

Route::controller(AnimalController::class)->group(function () {
    Route::get('animales', 'index')->name('animales.index');
    Route::get('animales/crear', 'create')->name('animales.create');
    Route::get('animales/{animal}', 'show')->name('animales.show');
    Route::get('animales/{animal}/editar', 'edit')->name('animales.edit');
    Route::post('animales', 'store')->name('animales.store');
    Route::put('animales/{animal}', 'update')->name('animales.update');
});
