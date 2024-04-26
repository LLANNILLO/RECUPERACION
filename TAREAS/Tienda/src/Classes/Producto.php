<?php

namespace Tienda\Classes;

class Producto
{

    protected string $nombre_producto;
    protected string $descripcion;
    protected int $id_imagen;
    protected int $id_familia;


    public function __construct(string $nombre, string $descripcion, int $id_familia, int $id_imagen)
    {
        $this->nombre_producto = $nombre;
        $this->descripcion = $descripcion;
        $this->id_familia = $id_familia;
        $this->id_imagen = $id_imagen;
    }


    /* Metodos get de la clase de producto */

    public function getNombreProducto(): string
    {
        return $this->nombre_producto;
    }

    public function getDescripcion(): string
    {
        return $this->descripcion;
    }

    public function getFamilia(): int
    {
        return $this->id_familia;
    }

    // Cambiar el tipo de retorno si $id_imagen representa una referencia a la imagen
    public function getImagen(): int
    {
        return $this->id_imagen;
    }
}
