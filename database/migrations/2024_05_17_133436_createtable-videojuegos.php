<?php

use App\Models\Desarrollador;
use App\Models\Familia;
use App\Models\Imagen;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('videojuegos',function(Blueprint $table){
            $table->id();
            $table->string('nombre');
            $table->string('descripcion');
            $table->integer('precio');
            $table->foreignIdFor(Familia::class)->constrained();
            $table->foreignId('imagenes_id')->constrained();
            $table->foreignId('desarrolladores_id')->constrained();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('videojuegos');
    }
};
