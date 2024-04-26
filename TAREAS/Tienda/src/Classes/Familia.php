<?php

namespace Tienda\Classes;

class Familia{

    protected string $nombre_familia;

    public function __construct(string $nombre_familia)
    {
        $this->nombre_familia = $nombre_familia;
    }

    /* Metodos get */

    public function getNombreFamilia() : string{
        return $this->nombre_familia;
    }

}