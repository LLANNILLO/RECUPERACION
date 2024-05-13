@extends('layouts.plantillas')
@section('titulo', 'Zoológico')
@section('contenido')
    <header>
        <h1 class="text-3xl font-bold underline text-center my-8">Página principal del Zoológico</h1>
    </header>

    {{-- section con los diferentes animales en la abase de datos --}}
    <section class=" m-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center gap-10">
        @forelse ($animales as $animal)
            <article class="flex flex-col  justify-start items-center bg-gray-200 w-1/2 rounded-3xl ">
                {{-- imagen de cada uno de los animales --}}
                <picture class="w-full">
                    <img class="w-full rounded-t-3xl" src="{{ asset('assets/imagenes/animales/'. $animal['imagen'])}}" >
                </picture>
                {{-- informacion relacionada con cada animal --}}

                <div class="p-4">
                    <h2>{{$animal['especie']}}</h2>
                    <p>{{$animal['peso']}}</p>
                    <p>{{$animal['altura']}}</p>
                    <p>{{$animal['fechaNacimiento']}}</p>
                    <p>{{$animal['descripcion']}}</p>
                    <p>{{$animal['alimentacion']}}</p>
                </div>
            </article>
        @empty
            <h2>No existen animales en el zoologico</h2>
        @endforelse


    </section>
@endsection
