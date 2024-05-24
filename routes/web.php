<?php

use App\Http\Controllers\FamiliaController;
use App\Http\Controllers\InicioController;
use App\Http\Controllers\VideojuegoController;
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

Route::controller(VideojuegoController::class)->group(function () {
    Route::get('videojuegos', 'index')->name('videojuegos.index');
    Route::get('videojuegos/crear', 'create')->name('videojuegos.create')->middleware(['auth', 'role:admin']);
    Route::get('videojuegos/{videojuego}', 'show')->name('videojuegos.show');
    Route::get('videojuegos/{videojuego}/editar', 'edit')->name('videojuegos.edit')->middleware(['auth', 'role:admin']);
    Route::post('videojuegos', 'store')->name('videojuegos.store');
    Route::put('videojuegos/{videojuego}', 'update')->name('videojuegos.update');
});

Route::controller(FamiliaController::class)->group(function () {
    Route::get('familias', 'index')->name('familias.index');
    Route::get('familias/crear', 'create')->name('familias.create')->middleware(['auth', 'role:admin']);
    Route::get('familias/{familias}', 'show')->name('familias.show');
    Route::get('familias/{familias}/editar', 'edit')->name('familias.edit')->middleware(['auth', 'role:admin']);
    Route::post('familias', 'store')->name('familias.store');
    Route::put('familias/{familias}', 'update')->name('familias.update');
});


//Ruta para la gestion por parte del administrador

Route::get('administrador', function () {
    return view('layouts.administrador.seleccionGestion');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});
