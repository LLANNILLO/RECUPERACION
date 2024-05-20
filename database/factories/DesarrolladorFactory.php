<?php

namespace Database\Factories;

use App\Models\Desarrollador;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Desarrollador>
 */
class DesarrolladorFactory extends Factory
{
    protected $model = Desarrollador::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nombre' => $this->faker->company,
            'ubicacion' => $this->faker->address,
            'logo' => '' //Ruta relativa vacia
        ];
    }
}
