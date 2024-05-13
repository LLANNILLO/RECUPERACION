@extends('layouts.plantillas')
@section('titulo', $animal['especie'])
@section('contenido')
    <header>
        <h1 class="text-3xl font-bold underline text-center my-8">{{$animal['especie']}}</h1>
    </header>

    <main>
        {{-- Contenido de la especie--}}
        <div>
            <picture>
                <img src="{{asset('assets/imagenes/animales/' . $animal['imagen'])}}" >
            </picture>
        </div>
    </main>
@endsection
