<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Rating>
 */
class RatingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'movie_rating' => $this->faker->numberBetween(1, 5), 
            'movie_id' => $this->faker->unique()->randomNumber, 
            'user_id' => $this->faker->unique()->randomNumber
        ];
    }
}
