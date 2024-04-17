<?php


namespace Ejercicio3\Classes;

use Ejercicio3\Interfaces\Encendible;


class Coche implements Encendible
{

    protected int $gasolina;
    protected int $bateria;
    protected bool $estado;

    public function __construct()
    {
        $this->gasolina = 0;
        $this->bateria = 10;
        $this->estado = false;
    }

    public function encender()
    {
        if ($this->gasolina > 0 && $this->bateria > 0 && !$this->estado) {
            echo "<p>El coche ha sido arrancado<p>";
            $this->estado = true;
            $this->gasolina -= 1;
            $this->bateria -= 1;
        } else {
            echo "<p>No se puede arrancar el coche porque:<p>"
                . "<p>1: Ya esta arrancado</p>"
                . "<p>2: No tiene combustible</p>"
                . "<p>3: No tiene batería</p>";
        }
    }

    public function apagar()
    {
        if ($this->estado) {
            echo "<p>El coche ha sido apagado";
            $this->estado = false;
        } else {
            echo "<p>El coche ya estaba apagado";
        }
    }

    public function repostar($litros)
    {
        $this->gasolina += $litros;
    }
}
