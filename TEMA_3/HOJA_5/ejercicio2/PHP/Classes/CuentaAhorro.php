<?php

namespace PHP\Classes;

class CuentaAhorro extends Cuenta
{

    protected float $comision_apertura;
    protected float $interes;

    public function __construct(string $numero, string $titular, float $saldo, float $comision_apertura, float $interes)
    {
        parent::__construct($numero, $titular, $saldo);
        $this->comision_apertura = $comision_apertura;
        $this->saldo -= $comision_apertura;
        $this->interes = $interes;
    }

    public function aplicaInteres(): void
    {
        $this->saldo = $this->calculoInteres();
    }


    public function mostrar(): string
    {
        $resultado = parent::mostrar();

        $resultado .= '<p>Tipo de cuenta: Ahorro</p>' .
            "<p>Comision de apertura: {$this->comision_apertura}</p>" .
            "<p>Interes de cuenta: {$this->interes}</p>";

        return $resultado;
    }


    private function calculoInteres(): float
    {
        $interes = $this->saldo * (($this->interes + 100) / 100);
        return $interes;
    }
}
