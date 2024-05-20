<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Videojuego>
 */
class VideojuegoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nombre' => $this->faker->languageCode(),
            'descripcion' => $this->faker->languageCode(),
            'precio' => $this->faker->languageCode(),
            'imagen_id' => $this->faker->languageCode(),
            'desarrollador_id' => $this->faker->languageCode(),
        ];
    }
}
