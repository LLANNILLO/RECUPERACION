<?php

namespace PHP\Classes;

class CuentaCorriente extends Cuenta
{
    protected float $cuota_mantenimiento;

    public function __construct($numero, $titular, $saldo, $cuota_mantenimiento)
    {
        parent::__construct($numero, $titular, $saldo);

        $this->cuota_mantenimiento = $cuota_mantenimiento;
    }

    public function reintegro(float $ingreso): void
    {
        $nuevoSaldo = $ingreso > 20 ? $ingreso : 0;
        $this->saldo += $nuevoSaldo;
    }

    public function mostrar(): string
    {
        $resultado = parent::mostrar();

        $resultado .= '<p>Tipo de cuenta: Corriente</p>' .
            "<p>Cuota de mantenimiento: {$this->cuota_mantenimiento}</p>";

        return $resultado;
    }
}
