<?php

namespace Database\Seeders;

use App\Models\Familia;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FamiliaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $generos = ['Accion', 'Arcade', 'Aventura', 'Aventura Gráfica', 'Carreras', 'Deportes', 'Estrategia', 'Hack & Slash', 'Metroidvania', 'Puzzles', 'Roguelike', 'RPG', 'Rol', 'Sandbox','Shooter','Simulacion'];

        Familia::factory()
            ->count(count($generos))
            ->sequence(fn ($sequence) => ['nombre' => $generos[$sequence->index]])
            ->create();
    }
}
