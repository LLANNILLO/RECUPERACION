<?php

namespace Contrasenas\PHP\Classes;

use Contrasenas\PHP\Interfaces\InterfazGeneradorPassword;
use Hackzilla\PasswordGenerator\Generator\ComputerPasswordGenerator;

class AdaptadorGeneradorPassword implements InterfazGeneradorPassword
{


    protected bool $mayusculas;
    protected bool $minusculas;
    protected bool $numeros;
    protected bool $simbolos;
    protected int  $cantidad;


    public function __construct($mayusculas,$minusculas,$numeros,$simbolos,$cantidad)
    {
        $this->mayusculas = $mayusculas;
        $this->minusculas = $minusculas;
        $this->numeros = $numeros;
        $this->simbolos = $simbolos;
        $this->cantidad = $cantidad;
    }

    public function generar(){

        $contrasenasGeneradas = GeneradorPassword::generarPassword($this->mayusculas, $this->minusculas,$this->numeros,$this->simbolos);
        

    }
    

}

?>