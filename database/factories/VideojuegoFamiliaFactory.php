<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\VideojuegoFamilia>
 */
class VideojuegoFamiliaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'familia_id' => $this->faker->languageCode(),
            'videojuego_id' => $this->faker->languageCode(),

        ];
    }
}
