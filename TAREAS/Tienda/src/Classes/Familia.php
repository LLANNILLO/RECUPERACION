<?php

namespace Tienda\Classes;

class Familia
{
    private int $id_familia;
    private string $nombre_familia;

    public function __construct(string $nombre_familia,int $id_familia = 0)
    {
        $this->id_familia = $id_familia;
        $this->nombre_familia = $nombre_familia;
    }

    /* Metodos get */

    public function getIdFamilia(): int
    {
        return $this->id_familia;
    }
    public function getNombreFamilia(): string
    {
        return $this->nombre_familia;
    }
}
