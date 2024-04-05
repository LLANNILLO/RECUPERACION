<?php

namespace Composer\Iban\PHP\class;
use Brick\Math\BigInteger;

class Iban
{

    protected string $iban;
    protected string $CCC;
    protected string $digitos_control;

    public function __construct($iban, $CCC)
    {
        $this->iban = $iban;
        $this->CCC = $CCC;
        $this->digitos_control = mb_strlen($CCC, 9, 11);
    }


    //FUNCIONES PARA COMPROBAR EL IBAN 

    /*
    Funcion para comprobar el numero de Cuenta
    Empleando comprobarCCC():bool, se obtiene la comprobacion final de si la cuenta bancaria 
    es correcta o, en cambio, su resultado es erroneo.
    */
    public function comprobarIBAN() : string{

        $resultado = "";
        $prueba_IBAN = "ES00";

        $correcto_CCC = $this->comprobarCCC();
        
        if(!$correcto_CCC){
            "El numero de la cuenta bancaria no es correcto";
        }else{
            str_replace("E","14",$prueba_IBAN);
            str_replace("S","28",$prueba_IBAN);

            $cuenta_banco = $this->CCC . $prueba_IBAN;

            $num_cuenta_bancaria = BigInteger::of($cuenta_banco);
        }

        return $resultado;
    }

    //FUNCIONES PARA COMRPOBAR EL CCC
    /*
    Funcion privada -> comprobarCCC():bool
    Se empleara para hacer la comprobacion de la cadena CCC del num. de la cuenta bancaria
    el retorno del resultado sera un booleano para comprobar que la cadena del CCC es valida y 
    esta bien construida
    */

    private function comprobarCCC(): bool
    {
        $resultado = false;

        $comprobar_CCC = $this->CCC;

        if (mb_strlen($comprobar_CCC) === 20) {
            $cadenas_CCC = $this->obtenerCadenasCCC();
            $primera_cadena = $cadenas_CCC["primera_cadena"];
            $segunda_cadena = $cadenas_CCC["segunda_cadena"];

            $valor_primero = $this->comprobarCadena($primera_cadena);
            $valor_segundo = $this->comprobarCadena($segunda_cadena);

            $digitos_dados = "$valor_primero$valor_segundo";

            if($this->digitos_control === $digitos_dados){
                $resultado = true;
            }

        }

        return $resultado;
    }

    private function obtenerCadenasCCC(): array
    {
        $valores_CCC = $this->CCC;
        $primera_cadena = substr($valores_CCC, 0, 9) . "00";
        $segunda_cadena = substr($valores_CCC, 11, mb_strlen($valores_CCC));

        $resultado = [
            "primera_cadena" => $primera_cadena,
            "segunda_cadena" => $segunda_cadena,
        ];

        return $resultado;
    }

    private function comprobarCadena($cadena_CCC): int
    {
        $pesos_caracteres_CCC = "1,2,4,8,5,10,9,7,3,6";
        $longitud = mb_strlen($cadena_CCC);
        $suma_valores = 0;
        
        $valor = -1;
        if ($longitud === 10) {

            for ($i = 0; $i < $longitud; $i++) {
                $suma_valores += intval($cadena_CCC[$i]) * intval($pesos_caracteres_CCC[$i]);
            }

            $digito = 11 - ($suma_valores % 11);

            $valor = $digito !== 11?  ($digito === 10? 1 : -1) : 0;
        }

        return $valor;
    }
}
