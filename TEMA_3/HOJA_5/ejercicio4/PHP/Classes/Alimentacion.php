<?php

namespace PHP\Classes;

use DateTime;

class Alimentacion extends Productos
{

    protected int $mes_caducidad;
    protected int $ano_caducidad;


    public function __construct(string $codigo, float $precio, string $nombre, int $mes_caducidad, int $ano_caducidad)
    {
        parent::__construct($codigo, $precio, $nombre);
        $this->mes_caducidad = $mes_caducidad;
        $this->ano_caducidad = $ano_caducidad;
    }

    public function getMesCaducidad(): int
    {
        return $this->mes_caducidad;
    }

    public function getAnoCaducidad(): int
    {
        return $this->ano_caducidad;
    }


    public function mostrar(): string
    {
        $resultado = parent::mostrar();

        //$resultado .= "<p>Fecha Caducidad: " . self::crearFechaCaducidad() . "</p>";
        $resultado .= "<p>Fecha Caducidad: {self::crearFechaCaducidad()} </p>";

        return $resultado;
    }


    private static function crearFechaCaducidad(): string
    {
        $fechaCaducidad =   new DateTime();
        $fechaCaducidad->setDate(self::getAnoCaducidad(), self::getMesCaducidad(), 1);
        $fechaFormateada = $fechaCaducidad->format('j \d\e F \d\e Y');
        return $fechaFormateada;
    }
}
