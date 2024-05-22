<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Desarrollador;
use App\Models\Imagen;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            FamiliaSeeder::class,
            DesarrolladorSeeder::class,
            ImagenSeeder::class,
            //Ultimo seeder con las claves foraneas
            VideojuegoSeeder::class,
            VideojuegoFamiliaSeeder::class,
            /*
              creacion de un usuario administrador con
              la capacidad de alterar los videojuegos y las familias
            */
            RoleAdminUserSeeder::class,
        ]);


    }
}
