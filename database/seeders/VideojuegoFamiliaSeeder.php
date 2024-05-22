<?php

namespace Database\Seeders;

use App\Models\VideojuegoFamilia;
use Database\Factories\VideojuegoFamiliaFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VideojuegoFamiliaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $videojuegos_familia = [
            [
                'familia_id' => '1',
                'videojuego_id' => '1'
            ],
            [
                'familia_id' => '2',
                'videojuego_id' => '1'
            ],
            [
                'familia_id' => '15',
                'videojuego_id' => '1'
            ],
            [
                'familia_id' => '14',
                'videojuego_id' => '2'
            ],
            [
                'familia_id' => '15',
                'videojuego_id' => '2'
            ],
            [
                'familia_id' => '1',
                'videojuego_id' => '3'
            ],
            [
                'familia_id' => '3',
                'videojuego_id' => '3'
            ],
            [
                'familia_id' => '12',
                'videojuego_id' => '3'
            ],
            [
                'familia_id' => '14',
                'videojuego_id' => '3'
            ],
            [
                'familia_id' => '15',
                'videojuego_id' => '3'
            ],
            [
                'familia_id' => '3',
                'videojuego_id' => '4'
            ],
            [
                'familia_id' => '12',
                'videojuego_id' => '4'
            ],
            [
                'familia_id' => '14',
                'videojuego_id' => '4'
            ],

        ];
        foreach ($videojuegos_familia as $videojuego_familia) {
            VideojuegoFamilia::factory()->create($videojuego_familia);
        }
    }
}
