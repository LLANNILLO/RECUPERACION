<?php

namespace Tienda\Classes;

class Producto
{

    protected int $id_producto;
    protected string $nombre_producto;
    protected string $descripcion;
    protected int $precio;
    protected string $imagen;
    protected string $familia;


    public function __construct(int $id_producto, string $nombre, string $descripcion, int $precio, string $imagen, string $familia)
    {
        $this->id_producto = $id_producto;
        $this->nombre_producto = $nombre;
        $this->descripcion = $descripcion;
        $this->precio = $precio;
        $this->familia = $familia;
        $this->imagen = $imagen;
    }


    /* Metodos get de la clase de producto */

    public function getId(): int
    {
        return $this->id_producto;
    }

    public function getNombreProducto(): string
    {
        return $this->nombre_producto;
    }

    public function getDescripcion(): string
    {
        return $this->descripcion;
    }
    public function getPrecio(): string
    {
        return $this->precio;
    }

    public function getFamilia(): string
    {
        return $this->familia;
    }


    public function getImagen(): string
    {
        return $this->imagen;
    }
}
