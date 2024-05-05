<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="./../../Estilos/FormUser.css">
    <script src="./../../JS/deleteMessage.js"></script>

</head>

<body>


    <?php

    use Tienda\Classes\BD_class\PDOUser;
    use Tienda\Classes\BD_class\User;
    use Tienda\Classes\Usuario;

    require_once __DIR__ . ('/../../../vendor/autoload.php');




    //Funcion para obtener un objeto de tipo Usuario|null
    function get_user_with_alias()
    {
        $user = null;
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            if (isset($_POST['login'])) {

                $alias = limpiar_texto($_POST['alias']);
                $PDO = new PDOUser();
                $repository = new User($PDO);

                $user =  $repository->get_user($alias);
            }
        }
        return $user;
    }

    //Crear una variable con el objeto Usuario|null a través de la funcion anterior
    $user = get_user_with_alias();


    //Funcion para verificar que el usuario existe y la contraseña es la indicada
    function verificar_password(Usuario|null $user): ?string
    {

        //mensaje devuelto en caso de error
        $mensaje = '';
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            //Si el usuario obtenido de la funcion anterior no es null hacer...
            if ($user instanceof Usuario) {

                if (isset($_POST['password'])) {
                    $pw = limpiar_texto($_POST['password']);
                    $pw_user = $user->getContrasena();
                    //Comparar las contraseñas en md5 e iniciar una sesion y redireccionar al index de la página
                    if (md5($pw) === $pw_user) {
                        session_start();

                        $_SESSION['usuario'] = $user;
                        if ($_SESSION['compra_pendiente']) {
                            redireccionar('./../shopping_cart/buying_carry.php');
                        } else {
                            redireccionar('./../index.php');
                        }
                    } else {
                        $mensaje = 'La contraseña no coincide';
                    }
                }
                //Si es null el objeto devolver el siguiente mensaje
            } else {
                $mensaje = 'No existe el usuario';
            }
        }
        return $mensaje;
    }

    ?>

    <main>
        <div class="centered">
            <header>
                <p class="header-title">Iniciar Sesion</p>
            </header>

            <?php
            $mensaje = verificar_password($user);
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

                    <label for="aliasUser">Usuario</label>
                    <input type="text" name="alias" id="aliasUser">

                    <div>
                        <label for="password">Contrasena</label>
                        <a href="./pw_restore/restore.php" class="reset-pw">¿Contraseña olvidada?</a>
                    </div>
                    <input type="password" name="password" id="password">

                    <input type="submit" value="Loguearse" name="login">

                </form>
            </section>

            <section id="opposite">
                <p>¿No tienes una cuenta? <a href="./register.php">Registrate</a></p>
            </section>

        </div>
    </main>
</body>

</html>