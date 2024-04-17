<?php

namespace Ejercicio3\Classes;

use Ejercicio3\Interfaces\Encendible;

class Bombilla implements Encendible{

    protected int $horas_de_vida;

    public function __construct($horas_de_vida){
        $this->horas_de_vida = $horas_de_vida;
    }

    public function encender(){
        if($this->horas_de_vida > 1){
            echo "<p>La bombilla ha sido encendida<p>";
        }else{
            echo "<p>No se puede encender porque 
            no hay horas de vida util en la bombilla<p>";
        }
        $this->horas_de_vida -= 2;
    }

    public function apagar(){
        echo "<p>La bombilla ha sido apagada";
    }
}

?>