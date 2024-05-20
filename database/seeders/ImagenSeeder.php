<?php

namespace Database\Seeders;

use App\Models\Imagen;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ImagenSeeder extends Seeder
{
    protected $model = Imagen::class;
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        $imagenes = [
            [
                'url' => './imagenes/videojuegos/the-last-of-us.jpg',
                'extension' => '.jpeg'
            ],
            [
                'url' => './imagenes/videojuegos/destiny-2.jpg',
                'extension' => '.jpeg'
            ],
            [
                'url' => './imagenes/videojuegos/cyberpunk-2077.jpg',
                'extension' => 'jpeg'
            ],
            [
                'url' => './imagenes/videojuegos/elden-ring.jpg',
                'extension' => 'jpeg'
            ],

        ];

        foreach ($imagenes as $imagen) {
            Imagen::factory()->create($imagen);
        }
    }
}
