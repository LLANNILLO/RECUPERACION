<?php

namespace PHP\Classes;

class Urgencia extends Medico
{

    protected string $unidad;

    public function __construct(string $nombre, int $edad, string $turno, string $unidad)
    {
        parent::__construct($nombre, $edad, $turno);
        $this->unidad = $unidad;
    }

    public function muestra(): string
    {
        $resultado = "<p>Dr.{$this->nombre}:</p>
        <p>Edad {$this->edad}, Turno: {$this->turno->mostrarValorTurno()}</p>
        <p>Unidad: {$this->unidad}";;

        return $resultado;
    }
}
