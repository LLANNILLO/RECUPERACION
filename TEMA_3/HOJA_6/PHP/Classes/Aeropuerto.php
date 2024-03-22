<?php

namespace PHP\Classes;

class Aeropuerto
{

    private array $elementos_voladores;

    public function __construct()
    {
        $this->elementos_voladores = array();
    }

    public function insertar(ElementoVolador $elemento_volador): void
    {
        /*
         $alta_vuelo = array_push($this->elementos_voladores,$elemento_volador);

        $resultado = $alta_vuelo > 0? "Dado de alta elemento volador" : "No dado de alta elemento volador";

        return $resultado;
        */


        /*
         //https://www.php.net/manual/en/function.array-push.php
        
         Mirar los comentarios de array_push
         Rodrigo de aquino afirma que es posible crear arrays asociativos:
          $data[$key] = $value;
        */
        $clave = $elemento_volador->getNombre();

        //Probar
        $this->elementos_voladores += [$clave => $elemento_volador];
    }

    public function buscar(string $nombre_elemeto_volador): string
    {

        $key = array_search($nombre_elemeto_volador, $this->elementos_voladores, true);

        $resultado = "";
        if ($key) {
            $objeto_volador = $this->elementos_voladores[$key];
            $resultado = $objeto_volador->mostrar();
        } else {
            $resultado = "No se ha encotrado el elemento volador que se intentaba encontrar";
        }

        return $resultado;
    }

    public function listarCompania(string $compania_aviones) : string{

        $aviones_compania = array();

        foreach($this->elementos_voladores as $elemento_volador){

            if($elemento_volador instanceof Avion){
                $compania = $elemento_volador->getCompania();

                if(strcmp($compania,$compania_aviones) === 0) $aviones_compania[] = $elemento_volador;
            }
        }

        $resultado = "";
        if(empty($aviones_compania)){
            $resultado = "No se encontró ningun avion de la compañia {$compania_aviones}";
        }else{
            $resultado = "Los aviones de la compañia {$compania_aviones} son:\n";
            foreach ($aviones_compania as $avion) {
                $resultado .= $avion->getNombre();
            }
        }

        return $resultado;
    }


    public function rotores(int $num_rotores) : string{

        $helicopteros_rotores = array();

        foreach($this->elementos_voladores as $elemento_volador){

            if($elemento_volador instanceof Helicoptero){
                $rotores = $elemento_volador->getRotores();
                if($rotores === $num_rotores) $helicopteros_rotores[] = $elemento_volador;
            }
        }

        $resultado = "";
        if(empty($helicopteros_rotores)){
            $resultado = "No se encontró ningun helicoptero con {$num_rotores} rotores";
        }else{
            $resultado = "Los helicopteros con {$num_rotores} rotores son:\n";
            foreach ($helicopteros_rotores as $helicoptero) {
                $resultado .= $helicoptero->getNombre();
            }
        }

        return $resultado;

    }
}
