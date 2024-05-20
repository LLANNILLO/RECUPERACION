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
            $table->float('precio');

            // Clave foranea con desarrollador
            $table->unsignedBigInteger('desarrollador_id');
            $table->foreign('desarrollador_id')->references('id')->on('desarrolladores');

            // Clave foranea con imagenes
            $table->unsignedBigInteger('imagen_id');
            $table->foreign('imagen_id')->references('id')->on('imagenes');

            /* $table->foreignId('imagen_id')->constrained();
            $table->foreignId('desarrollador_id')->constrained(); */
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
