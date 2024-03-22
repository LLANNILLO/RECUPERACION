<?php

namespace PHP\Classes;


class Cuenta
{

    protected string $numero;
    protected string $titular;
    protected float $saldo;

    public function __construct(string $numero, string $titular, float $saldo)
    {
        $this->numero = $numero;
        $this->titular = $titular;
        $this->saldo  = $saldo;
    }

    public function sueldo(float $ingreso)
    {
        $this->saldo += $ingreso;
    }

    public function reintegro(float $retiro)
    {
        $this->saldo -= $retiro;
    }

    public function esPreferencial(float $cantidad): bool
    {
        $resultado = $this->saldo > $cantidad;
        return $resultado;
    }

    public function mostrar(): string
    {

        $resultado =
            "<p>Numero de la cuenta: $this->numero</p>" .
            "<p>Titular de la cuenta: $this->titular</p>" .
            "<p>Saldo de la cuenta: $this->saldo</p>";

        return $resultado;
    }
}
