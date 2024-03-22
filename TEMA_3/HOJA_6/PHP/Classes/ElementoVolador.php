<?php

namespace PHP\Classes;

use PHP\Interface\Volador;

abstract class ElementoVolador implements Volador
{

    protected string $nombre;
    protected int $num_alas;
    protected int $num_motores;
    protected int $altitud;
    protected int $velocidad;

    public function __construct(string $nombre, int $num_alas, int $num_motores, int $altitud, int $velocidad)
    {
        $this->nombre = $nombre;
        $this->num_alas = $num_alas;
        $this->num_motores = $num_motores;
        $this->altitud = $altitud;
        $this->velocidad = $velocidad;
    }

    public function volando(): bool
    {
        $resultado = $this->altitud > 0;
        return $resultado;
    }

    public function acelerar($velocidad_incremento): void
    {
        $this->velocidad += $velocidad_incremento;
    }

    public function setAltitud($altitud_objetivo): void
    {
        $this->altitud += $altitud_objetivo;
    }

    public function getNombre(): string
    {
        return $this->nombre;
    }

    abstract public function volar($altitud_objetivo): string;
    abstract public function mostrarInformacion(): string;
}
