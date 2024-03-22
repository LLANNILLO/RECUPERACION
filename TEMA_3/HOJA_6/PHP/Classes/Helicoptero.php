<?php

namespace PHP\Classes;



class Helicoptero extends ElementoVolador
{

    protected string $propietario;
    protected int $nRotor;

    public function __construct(string $nombre, int $num_alas, int $num_motores, int $velocidad, int $altitud, string $propietario, int $nRotor)
    {
        parent::__construct($nombre, $num_alas, $num_motores, $altitud, $velocidad);
        $this->propietario = $propietario;
        $this->nRotor = $nRotor;
    }

    public function volar($altitud_objetivo): string
    {
        $resultado_operacion = "";

        $altitud_maxima = 100 * $this->nRotor;
        if ($altitud_objetivo > $altitud_maxima) {
            $resultado_operacion = "El helicoptero excede la altitud maxima permitida";
        } else {
            do {

                $this->altitud = $this->altitud > $altitud_objetivo ? $this->altitud = $altitud_objetivo  : $this->setAltitud(20);

                $resultado_operacion .= "El helicoptero alcanzó {$this->altitud} de altitud";
            } while ($this->altitud < $altitud_objetivo);
        }

        return $resultado_operacion;
    }

    public function mostrarInformacion(): string
    {
        $informacion = "Helicoptero: {$this->nombre} [Propiedad de {$this->propietario}]\n
        Numero de helices: {$this->num_alas}\n
        Numero de motores: {$this->num_motores}\n
        Numero de rotores{$this->nRotor}\n
        Altitud actual: {$this->altitud}\n
        Velocidad actual: {$this->velocidad}\n";

        return $informacion;
    }

    public function getRotores(){
        return $this->nRotor;
    }
}
