<?php

namespace Database\Seeders;

use App\Models\Desarrollador;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DesarrolladorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

    //https://stackoverflow.com/questions/65891520/laravel-factory-sequence
    public function run(): void
    {
        $desarrolladores = [
            ['nombre' => 'Naughty Dog', 'ubicacion' => 'Santa Monica, CA, USA'],
            ['nombre' => 'Bungie', 'ubicacion' => 'Bellevue, WA, USA'],
            ['nombre' => 'CD Projekt Red', 'ubicacion' => 'Varsovia, Polonia'],
            ['nombre' => 'FromSoftware', 'ubicacion' => 'Tokyo, Japon'],
            // Agrega más desarrolladores aquí según sea necesario
        ];

        foreach ($desarrolladores as $desarrollador) {
            Desarrollador::factory()->create($desarrollador);
        }
    }
}
