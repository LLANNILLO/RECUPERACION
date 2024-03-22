<?php

use PHP\Classes\Familia;
use PHP\Classes\Urgencia;

function verMedicos(array $medicos): void
{

    foreach ($medicos as $medico) {
        echo "<div>{$medico->muestra()}</div>";
    }
};

function contarMedicosUrgencias(array $medicos): int
{
    $contadorMedicos = 0;

    foreach ($medicos as $medico) {
        if ($medico instanceof Urgencia) {
            $medico->getTurno() === 'tarde' && $medico->getEdad() > 60 ? $contadorMedicos++ : 0;
        }
    }

    return $contadorMedicos;
};

function verMedicosFamiliaConPacientes(array $medicos, int $numPacientes): void
{
    echo "<p>Medicos de Familia con {$numPacientes} o más pacientes</p>";

    foreach ($medicos as $medico) {
        $texto = "";
        if ($medico instanceof Familia) {
            $texto = $medico->getPacientes() >= $numPacientes ? $medico->muestra() : "";
            if (!empty($texto)) echo "<div>{$texto}</div>";
        }
    }
};
