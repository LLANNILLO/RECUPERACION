<?php

use App\Models\Familia;
use App\Models\Videojuego;
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
        Schema::create('videojuego_familia',function(Blueprint $table){
            $table->id();
            $table->foreignIdFor(Familia::class)->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->foreignIdFor(Videojuego::class)->constrained()->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
