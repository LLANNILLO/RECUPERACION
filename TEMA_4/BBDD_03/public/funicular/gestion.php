<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestion plazas</title>
    <link rel="stylesheet" href="./../estilos/estilos.css">
</head>

<body>
    <?php

    

    ?>
    <main class="centrar">

        <h1>Gestion de plazas funicular</h1>

        <form action="" class="formulario" method="post">
            <?php



            require_once __DIR__ . ('/../../vendor/autoload.php');


            use BD3\Classes\FuncionesBD;



            function mostrarPlazas()
            {

                $plazasFunicular = FuncionesBD::getPlazas();
                echo '<div class=\'plazas\'>';
                foreach ($plazasFunicular as $plaza) {

                    echo "
            <label for=plaza{$plaza->numero}>
            
            Plaza {$plaza->numero}<input type='number'id='plaza{$plaza->numero}' name='plaza_{$plaza->numero}' value='{$plaza->precio}'>€
            </label>";
                }
                echo '</div>';
            }


            mostrarPlazas();




            ?>
            <input type="submit" value="Actualizar">
        </form>
    </main>
</body>

</html>