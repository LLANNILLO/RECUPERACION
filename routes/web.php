<?php

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
    Route::get('videojuegos/crear', 'index')->name('videojuegos.index');
    Route::get('videojuegos/{videojuego}', 'show')->name('videojuegos.show');
    Route::get('videojuegos/{videojuego}/editar', 'edit')->name('videojuegos.edit');
    Route::post('videojuegos', 'store')->name('videojuegos.store');
    Route::put('videojuegos/{videojuego}', 'update')->name('videojuegos.update');
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
