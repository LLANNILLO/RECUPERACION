<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Generator</title>
    <style>
        label {
            display: block;
            margin: 20px 0px;
        }
    </style>
</head>

<body>

    <?php


    require_once __DIR__ . '/../vendor/autoload.php';

    use Contrasenas\PHP\Classes\AdaptadorGeneradorPassword;

    function generarContrasena()
    {
        if (isset($_POST['generar_clave'])) {


            $mayusuculas = isset($_POST['mayusculas_permitidos']);
            $minusculas = isset($_POST['minusculas_permitidos']);
            $numeros = isset($_POST['numerosculas_permitidos']);
            $simbolos = isset($_POST['simbolos_permitidos']);

            $longitud = $_POST['longitud_contrasena'];
            $cantidad = $_POST['cantidad_contrasena'];

            $generardorContraseña = new AdaptadorGeneradorPassword($mayusuculas, $minusculas, $numeros, $simbolos, $longitud, $cantidad);
            $constrasenasGenerada = $generardorContraseña->generar();

            foreach ($constrasenasGenerada as $contrasena) {
                echo "<p>La contraseña generada es <strong>{$contrasena}</strong></p>";
            }
        }
    }
    ?>

    <h1>Generar tus contraseñas</h1>

    <form action="" method="POST">
        <h3>Parametros contraseña</h3>
        <label for="mayusculasPermitidos">Mayusculas Permitidas
            <input type="checkbox" id="mayusculasPermitidos" name="mayusculas_permitidos">
        </label>

        <label for="minusculasPermitidos">Minusculas Permitidas
            <input type="checkbox" id="minusculasPermitidos" name="minusculas_permitidos">
        </label>

        <label for="numerosPermitidos">Numeros Permitidos
            <input type="checkbox" id="numerosPermitidos" name="numeros_permitidos">
        </label>

        <label for="simbolosPermitidos">Simbolos Permitidos
            <input type="checkbox" id="simbolosPermitidos" name="simbolos_permitidos">
        </label>


        <label for="longitudContrasena">Longitud de la contraseña
            <input type="number" id="longitudContrasena" name="longitud_contrasena" pattern="[0-9]+" required>
        </label>


        <label for="cantidadContrasena">Cantidad de la contraseña
            <input type="number" id="cantidadContrasena" name="cantidad_contrasena" pattern="[0-9]+" required>
        </label>

        <input type="submit" id="generarClave" name="generar_clave" value="Generar Constraseña">
    </form>
    <?php generarContrasena() ?>
</body>

</html>