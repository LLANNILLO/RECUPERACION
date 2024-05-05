<?php

namespace Tienda\Classes;

class Familia
{
    protected int $id_familia;
    protected string $nombre_familia;

    public function __construct(int $id_familia, string $nombre_familia)
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
