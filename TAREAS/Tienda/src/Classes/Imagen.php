<?php

namespace Tienda\Classes;

class Imagen
{

    protected int $id;


    public function __construct(int $id)
    {
        $this->id = $id;
    }

    public function get_id_imagen()
    {
        return $this->id;
    }
}
