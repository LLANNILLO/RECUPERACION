<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="./../../Estilos/FormUser.css">
    <script src="./../../JS/deleteMessage.js"></script>
</head>

<body>


    <?php

    use Tienda\Classes\BD_class\PDOUser;
    use Tienda\Classes\BD_class\User;
    use Tienda\Classes\Usuario;

    require_once  __DIR__ . ("/../../../vendor/autoload.php");



    function insert_new_user()
    {
        $mensaje = '';
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            if (isset($_POST['register'])) {

                $alias = limpiar_texto($_POST['alias']);
                $name = limpiar_texto($_POST['name']);
                $last_name = limpiar_texto($_POST['last_name']);
                $pw = limpiar_texto($_POST['password']);


                $nameUser = $name . ' ' . $last_name;

                $valores = [
                    'alias' => $alias,
                    'name' => $name,
                    'last_name' => $last_name,
                    'pw' => $pw,
                ];

                $existen_valores = true;

                foreach ($valores as $valor) {
                    if (!validar_requerido($valor)) {
                        $existen_valores = false;
                    }
                }

                if ($existen_valores) {

                    $usuario = new Usuario($alias, $nameUser, $pw, 'usuario');
                    $PDO = new PDOUser();
                    $user = new User($PDO);
                    $mensaje = $user->insert_user($usuario);
                    if (empty($mensaje)) {
                        redireccionar('./login.php');
                    }
                } else {
                    $mensaje = 'Rellene todos los campos obligatorios';
                }
            }
        }
        return $mensaje;
    }


    ?>

    <main>
        <div class="centered">
            <header>
                <p class="header-title">Registro de Usuario</p>
            </header>

            <?php
            $mensaje = insert_new_user();
            if (!empty($mensaje)) {
                echo "
                <section id=\"mensajes\">
                <div class=\"cierre\">
                <img src=\"./../../image/X_shape.png\">
                </div>
                <p> $mensaje  </p>
                </section>
                ";
            }
            ?>

            <section>
                <form action="" method="post">

                    <label for="aliasUser">Nombre del usuario</label>
                    <input type="text" name="alias" id="aliasUser">
                    <label for="name">Nombre </label>
                    <input type="text" name="name" id="name">
                    <label for="lastName">Apellidos</label>
                    <input type="text" name="last_name" id="lastName">
                    <!-- <div> -->
                    <label for="password">Contrasena</label>
                    <!-- <p class="reset-pw">¿Contraseña olvidada?</p>-->
                    <!-- </div> -->
                    <input type="password" name="password" id="password">

                    <input type="submit" value="Registrarse" name="register">

                </form>
            </section>

            <section id="opposite">
                <p>Ya tienes <a href="./login.php"> cuenta</a></p>
            </section>
        </div>
    </main>
</body>

</html>