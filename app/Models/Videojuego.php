<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Videojuego extends Model
{
    use HasFactory;
    public $timestamps = false;

    public function imagen(){
        return $this->hasOne(Imagen::class);
    }

    public function familia(){
        return $this->belongsToMany(Familia::class);
    }

    public function desarrollador(){
        return $this->hasOne(Desarrollador::class);
    }
}
