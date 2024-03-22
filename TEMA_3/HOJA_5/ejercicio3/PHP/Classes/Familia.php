<?php

namespace PHP\Classes;

class Familia extends Medico
{

    protected int $num_pacientes;

    public function __construct(string $nombre, int $edad, string $turno, int $num_pacientes)
    {
        parent::__construct($nombre, $edad, $turno);
        $this->num_pacientes = $num_pacientes;
    }


    public function getPacientes()
    {
        return $this->num_pacientes;
    }


    public function muestra(): string
    {
        $resultado = "<p>Dr.{$this->nombre}:</p>
        <p>Edad {$this->edad}, Turno: {$this->turno->mostrarValorTurno()}</p>
        <p>Numero de pacientes: {$this->num_pacientes}";

        return $resultado;
    }
}
