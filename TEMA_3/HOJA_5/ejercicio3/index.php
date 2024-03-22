<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        div {

            margin: 2em 0.5em;
            padding: 2em;
            border: 1px solid firebrick;
            border-radius: 8px;
        }

        body>p {
            margin: 2em 0.5em;
            padding: 2em;
        }
    </style>
</head>

<body>

    <?php

    include "PHP/Enums/Turno.php";
    include "PHP/Classes/Medico.php";
    include "PHP/Classes/Familia.php";
    include "PHP/Classes/Urgencia.php";
    include "helper.php";

    use PHP\Classes\Familia;
    use PHP\Classes\Urgencia;


    $medicos = array(
        new Familia("Juan", 55, "mañana", 80),
        new Urgencia("María", 65, "tarde", "Traumatología"),
        new Familia("Pedro", 40, "tarde", 60),
        new Urgencia("Ana", 70, "mañana", "Cardiología"),
    );

    // Llamar a los métodos del helper
    verMedicos($medicos);
    echo "<p>Número de médicos de turno de tarde de urgencias mayores de 60 años: " . contarMedicosUrgencias($medicos) . "</p>";
    verMedicosFamiliaConPacientes($medicos, 70);
    ?>

</body>

</html>