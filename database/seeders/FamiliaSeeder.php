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
        $nationalities = ['German', 'French'];

        Familia::factory()
            ->count(count($nationalities))
            ->sequence(fn ($sequence) => ['nombre' => $nationalities[$sequence->index]])
            ->create();
    }
}
