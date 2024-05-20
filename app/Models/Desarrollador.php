<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Desarrollador extends Model
{
    use HasFactory;

    protected $table = 'desarrolladores';

    public $timestamps = false;

    public function videojuego()
    {
        return $this->belongsTo(Videojuego::class);
    }
}
