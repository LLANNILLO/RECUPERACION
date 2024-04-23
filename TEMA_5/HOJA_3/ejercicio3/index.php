<?php
session_start();

if (!isset($_SESSION['usuario']) && !isset($_SESSION['contrasena'])) {
    if (isset($_SERVER['PHP_AUTH_USER']) && isset($_SERVER['PHP_AUTH_PW'])) {
        // Verificar las credenciales del usuario aquí (puedes usar una base de datos u otro método seguro)
        // Por ahora, simplemente establecemos las variables de sesión
        $_SESSION['usuario'] = $_SERVER['PHP_AUTH_USER'];
        $_SESSION['contrasena'] = $_SERVER['PHP_AUTH_PW'];
    } else {
        header('WWW-Authenticate: Basic Realm="Contenido restringido"');
        header('HTTP/1.0 401 Unauthorized');
        exit();
    }
}

if (!isset($_SESSION['visitas'])) {
    $_SESSION['visitas'] = array();
    echo "<p>Bienvenido, esta es tu primera visita</p>";
} else {
    $momento = date('Y/m/d H:i:s');

    echo '<h1>Gestion sesiones:</h1>';
    echo "<p>Nombre usuario: {$_SESSION['usuario']}</p>";
    // No es seguro mostrar la contraseña en texto plano, así que no la imprimimos
    // echo '<p>Contraseña: ' . $_SESSION['contrasena'] . '</p>';
    echo '<p>Hash contrasena:' . md5($_SESSION['contrasena']) . '</p>';
    echo '<p>Último inicio de sesión: ' . $momento . '</p>';
    echo '<p>Visitas anteriores:</p>';
    foreach ($_SESSION['visitas'] as $visit_time) {
        echo $visit_time . "<hr/>";
    }

    $_SESSION['visitas'][] = $momento;

    echo '<form action="limpiar.php" method="post">
    <input type="submit" value="Limpiar Registro de Visitas">
    </form>';
}
