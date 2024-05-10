<?php

namespace App\Classes;


class Producto{

    private int $id;
    private string $nombre;
    private string $descripcion;
    private int $precio;
    private Imagen $imagen;
    private Familia $familia;


    public function __construct(string $nombre,string $descripcion,int $precio,Imagen $imagen,Familia $familia,int $id=0){
        $this->nombre = $nombre;
        $this->descripcion = $descripcion;
        $this->precio = $precio;
        $this->imagen = $imagen;
        $this->familia = $familia;
        $this->id = $id;

    }

    /* Metodos getter Producto */

    public function getId(): int
    {
        return $this->id;
    }

    public function getNombre(): string
    {
        return $this->nombre;
    }

    public function getDescripcion(): string
    {
        return $this->descripcion;
    }

    public function getPrecio(): int
    {
        return $this->precio;
    }

    public function getImagen(): Imagen
    {
        return $this->imagen;
    }
    
    public function getFamilia(): Familia
    {
        return $this->familia;
    }

}


?>