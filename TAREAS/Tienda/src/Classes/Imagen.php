<?php

namespace Tienda\Classes;

class Imagen
{

    private int $id;
    private string $url;


    public function __construct(string $url,int $id = 0)
    {
        $this->url = $url;
        $this->id = $id;
    }

    public function getIdImagen()
    {
        return $this->id;
    }
    
    public function getURL()
    {
        return $this->url;
    }
}
