<?php

namespace BD5\Hospital;



class Familia extends Medico
{

    protected int $num_pacientes;

    public function __construct(string $codigo, string $nombre, int $edad, Turno $turno, int $num_pacientes)
    {
        parent::__construct($codigo, $nombre, $edad, $turno);

        $this->num_pacientes = $num_pacientes;
    }


    //metodos getter Medico
    public function getPacientes()
    {
        return $this->num_pacientes;
    }

    //metodos setter Medico

    public function setPacientes(int $pacientes)
    {
        $this->num_pacientes = $pacientes;
    }

    //metodo toString Medico

    public function toString()
    {

        $resultado = parent::toString();

        $resultado .= "<p>Numero de pacientes; {$this->getPacientes()}</p>";

        return $resultado;
    }
}
