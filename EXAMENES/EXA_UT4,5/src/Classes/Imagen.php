<?php


namespace App\Classes;

class Imagen{

    private int $id;
    private string $nombre;
    private string $url;

    public function __construct(string $nombre, string $url,int $id = 0){
        $this->id = $id;
        $this->nombre = $nombre;
        $this->url = $url;
    }

    /* Metodos getter Imagen */
    public function getIdImagen() : int{
        return $this->id;
    }
    
    public function getNombreImagen() : string {
        return $this->nombre;
    }
    
    public function getURL() : string{
        return $this->url;
    }


}

?>