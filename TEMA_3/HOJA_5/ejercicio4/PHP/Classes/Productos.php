<?php

namespace PHP\Classes;

abstract class Productos
{

    protected string $codigo;
    protected float $precio;
    protected string $nombre;

    public function __construct(string $codigo, float $precio, string  $nombre)
    {
        $this->codigo = $codigo;
        $this->precio = $precio;
        $this->nombre = $nombre;
    }

    public function getCodigo(): string
    {
        return $this->codigo;
    }

    public function getPrecio(): float
    {
        return $this->precio;
    }

    public function getNombre(): string
    {
        return $this->nombre;
    }

    public function mostrar(): string
    {
        $resultado = "<p>{$this->nombre}</p>
        <p>Codigo: {$this->codigo}</p>
        <p>Precio:{$this->precio}</p>";

        return $resultado;
    }
}
