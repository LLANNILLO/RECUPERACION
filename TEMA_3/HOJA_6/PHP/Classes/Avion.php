<?php

namespace PHP\Classes;

use DateTime;

class Avion extends ElementoVolador
{

    protected string $compania_aerea;
    protected DateTime $fecha_alta;
    protected int $altitud_maxima;

    public function __construct(string $nombre, int $num_alas, int $num_motores, int $altitud, int $velocidad, string $compania_aerea, DateTime $fecha_alta, int $altitud_maxima)
    {
        parent::__construct($nombre, $num_alas, $num_motores, $altitud, $velocidad);
        $this->compania_aerea = $compania_aerea;
        $this->fecha_alta = $fecha_alta;
        $this->altitud_maxima = $altitud_maxima;
    }

    public function volar($altitud_objetivo): string
    {
        $resultado_operacion = "";

        if ($altitud_objetivo < 0 || $altitud_objetivo > $this->altitud_maxima) {
            $resultado_operacion = "No se pudo realizar el vuelo porque la altitud no entra dentro de los limites posibles de la nave";
        }else{
            if($this->velocidad < 150){
                $resultado_operacion = "No se pudo realizar el vuelo debido a la escasa velocidad de la aeronave";
            }else{
                do{
                    $this->altitud = $this->altitud > $altitud_objetivo? $this->altitud = $altitud_objetivo : $this->setAltitud(100);
                    $resultado_operacion .= "Aumento de la altitud a {$this->altitud}";

                }while($this->altitud < $altitud_objetivo);
                $resultado_operacion .= "Alcanzada altitud";
            }
        }

        return $resultado_operacion;
    }

    public function mostrarInformacion(): string
    {
        $informacion = "Avion: {$this->nombre} [Com.{$this->compania_aerea}]\n
        Numero de alas: {$this->num_alas}\n
        Numero de motores: {$this->num_motores}\n
        Altitud actual: {$this->altitud}\n
        Velocidad actual: {$this->velocidad}\n
        Fecha alta: {$this->fecha_alta}\n
        Altitud máxima{$this->altitud_maxima}\n";

        return $informacion;
    }

    public function getCompania() : string{
        return $this->compania_aerea;
    }
}
