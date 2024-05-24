@extends('layouts.plantillas.administrador')
@section('titulo', 'Gestion Aplicacion')
@section('contenido')

    <header class="flex justify-center items-center w-full bg-blue-500 border-b-2 border-t-2 border-blue-600">
        <h1 class="text-5xl font-bold text-blue-50 py-11 ">Gestion del contenido de la web</h1>
    </header>
    <main class="w-full h-80vh flex justify-center items-center  gap-52">
        <div
            class="bg-videojuegos-img bg-cover rounded-md bg-center transform transition-transform duration-500 hover:scale-105 ">
            <a href="{{ route('videojuegos.create') }}"
                class=" w-20vw h-60vh border-2 rounded-md border-blue-500 flex justify-center items-center bg-blue-400">C</a>
        </div>
        <div
            class="bg-familias-img bg-cover rounded-md bg-center  transform transition-transform duration-500 hover:scale-105">
            <a href="{{ route('videojuegos.create') }}"
                class="w-20vw h-60vh border-2 rounded-md border-blue-500 flex justify-center items-center bg-blue-400">C</a>
        </div>
    </main>
@endsection
