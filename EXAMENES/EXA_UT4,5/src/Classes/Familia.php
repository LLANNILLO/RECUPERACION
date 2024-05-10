<?php

namespace App\Classes;

class Familia{

    private string $codigo;
    private string $nombre;

    public function __construct($codigo,$nombre){

        $this->codigo = $codigo;
        $this->nombre = $nombre;

    }

    /* Metodos getter de Familia */
    public function getCodigo(): string
    {
        return $this->codigo;
    }

    public function getNombreFamilia(): string
    {
        return $this->nombre;
    }
}


?>