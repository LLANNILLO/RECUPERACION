<?php

namespace BD5\Hospital;

abstract class Medico
{

    protected string $codigo;
    protected string $nombre;
    protected int $edad;
    protected Turno $turno;


    public function __construct(string $codigo, string $nombre, int $edad, Turno $turno)
    {
        $this->$codigo = $codigo;
        $this->$nombre = $nombre;
        $this->$edad = $edad;
        $this->$turno = $turno;
    }


    //metodos getter Medico
    public function getCodigo()
    {
        return $this->codigo;
    }

    public function getNombre()
    {
        return $this->nombre;
    }

    public function getEdad()
    {
        return $this->edad;
    }

    public function getTurno()
    {
        return $this->turno->toString();
    }

    //metodos setter Medico
    public function setCodigo(string $codigo)
    {
        $this->codigo = $codigo;
    }

    public function setNombre(string $nombre)
    {
        $this->nombre = $nombre;
    }

    public function setEdad(int $edad)
    {
        $this->edad = $edad;
    }

    public function setTurno(Turno $turno)
    {
        $this->turno = $turno;
    }


    //metodo toString Medico

    public function toString()
    {

        $resultado = "<h2>Informacion Medico({$this->getCodigo()})</h2>"
            . "<p>Nombre: {$this->getNombre()}</p>"
            . "<p>Edad: {$this->getEdad()}</p>"
            . "<p>Turno Actual: {$this->getTurno()}</p>";

        return $resultado;
    }
}
