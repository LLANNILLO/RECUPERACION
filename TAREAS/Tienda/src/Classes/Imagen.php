<?php

namespace Tienda\Classes;

class Imagen{

    protected string $url;


    public function __construct(string $url)
    {   
        $this->url = $url;
    }

    public function getURL(){
        return $this->url;
    }


}

