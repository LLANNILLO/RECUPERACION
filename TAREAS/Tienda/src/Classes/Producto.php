<?php

namespace Tienda\Classes;

class Producto
{
/* MAL CONSTRUIDAS LAS VARIABLES */
    private int $id_producto;
    private string $nombre_producto;
    private string $descripcion;
    private int $precio;
    private Familia $familia;
    private Imagen $imagen;


    public function __construct(string $nombre, string $descripcion, int $precio, Imagen $imagen, Familia $familia,int $id_producto = 0)
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

    /*Retorno de familia*/
    public function getFamilia(): Familia
    {
        return $this->familia;
    }

    /*Retorno de imagen*/
    public function getImagen(): Imagen
    {
        return $this->imagen;
    }
}
