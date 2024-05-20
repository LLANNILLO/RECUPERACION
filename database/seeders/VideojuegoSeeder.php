<?php

namespace Database\Seeders;

use App\Models\Videojuego;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VideojuegoSeeder extends Seeder
{
    protected $model = Videojuego::class;
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        /*
            Los cuatro primeros productos iniciales de la tienda
            Se cumple el orden ascedente de los id dentro de imagenes
            y desarrolladores
        */

        //Revisar los factories para descubrir si se puede hacer de una manera más automatica
        $videojuegos = [
            [
                'nombre' => 'The last of us',
                'descripcion' => '',
                'precio' => '79.99',
                'imagen_id' => '1',
                'desarrollador_id' => '1',
            ],
            [
                'nombre' => 'Destiny 2',
                'descripcion' => '',
                'precio' => '0.00',
                'imagen_id' => '2',
                'desarrollador_id' => '2',
            ],
            [
                'nombre' => 'Cyberpunk 2077',
                'descripcion' => '',
                'precio' => '30',
                'imagen_id' => '3',
                'desarrollador_id' => '3',
            ],
            [
                'nombre' => 'Elden ring',
                'descripcion' => '',
                'precio' => '59.99',
                'imagen_id' => '4',
                'desarrollador_id' => '4',
            ],
        ];

        foreach ($videojuegos as $videojuego) {
            Videojuego::factory()->create($videojuego);
        }
    }
}
