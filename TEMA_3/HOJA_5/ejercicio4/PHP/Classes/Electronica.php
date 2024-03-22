<?php

namespace PHP\Classes;

use DateTime;

class Electronica extends Productos
{

    protected DateTime $plazo_garantia;

    public function __construct(string $codigo, float $precio, string $nombre, DateTime $plazo_garantia)
    {
        parent::__construct($codigo, $precio, $nombre);
        $this->plazo_garantia = $plazo_garantia;
    }

    public function mostrar(): string
    {
        $resultado = parent::mostrar();

        //$resultado .= "<p>Fecha Caducidad: " . self::crearFechaCaducidad() . "</p>";
        $resultado .= "<p>Fecha Caducidad: {self::crearGarantia()} </p>";

        return $resultado;
    }

    private static function crearGarantia(): string
    {
        $fechaGarantia = self::$plazo_garantia;
        $fechaFormateada = $fechaGarantia->format('j \d\e F \d\e Y');
        return $fechaFormateada;
    }
}
