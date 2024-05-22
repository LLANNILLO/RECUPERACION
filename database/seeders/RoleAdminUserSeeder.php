<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleAdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

    //creamos permisos para el rol de admin
    private $permisos = [
        'videojuego-create',
        'videojuego-edit',
        'videojuego-delete',
        'familia-create',
        'familia-edit',
        'familia-delete',
    ];

    public function run(): void
    {

        foreach ($this->permisos as $permiso) {
            Permission::create(['name' => $permiso]);
        }

        $user_admin = User::create([
            'name' => 'Admin',
            'email' => '',
            'password' => Hash::make('WeLcOmE_tO_zOoToPiA'),

        ]);

        $role = Role::create(['name' => 'admin']);

        $permisos = Permission::pluck('id','id')->all();

        $role->syncPermissions($permisos);

        $user_admin->assignRole([$role->id]);
    }
}
