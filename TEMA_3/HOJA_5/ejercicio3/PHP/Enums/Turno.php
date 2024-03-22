<?php

namespace PHP\Enums;

enum Turno
{

    case MAÑANA;
    case TARDE;


    public static function turnoMedico($turno): self
    {
        $resultado = match (strtolower($turno)) {
            'mañana' => self::MAÑANA,
            'tarde' => self::TARDE,
        };

        return $resultado;
    }

    public function mostrarValorTurno(): string
    {

        $turno = match ($this) {
            self::MAÑANA => 'mañana',
            self::TARDE => 'tarde',
        };

        return $turno;
    }
}
