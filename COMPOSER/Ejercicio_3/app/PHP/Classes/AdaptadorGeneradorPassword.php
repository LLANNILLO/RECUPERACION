<?php

namespace Contrasenas\PHP\Classes;

use Contrasenas\PHP\Interfaces\InterfazGeneradorPassword;

class AdaptadorGeneradorPassword implements InterfazGeneradorPassword
{


    protected bool $mayusculas;
    protected bool $minusculas;
    protected bool $numeros;
    protected bool $simbolos;
    protected int  $longitud;
    protected int  $cantidad;


    public function __construct(bool $mayusculas, bool $minusculas, bool $numeros, bool $simbolos, int $longitud, int $cantidad)
    {
        $this->mayusculas = $mayusculas;
        $this->minusculas = $minusculas;
        $this->numeros = $numeros;
        $this->simbolos = $simbolos;
        $this->longitud = $longitud;
        $this->cantidad = $cantidad;
    }

    public function generar()
    {

        return GeneradorPassword::generarPassword($this->mayusculas, $this->minusculas, $this->numeros, $this->simbolos, $this->longitud, $this->cantidad);
    }
}
