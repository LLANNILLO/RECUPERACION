<?php

//iniciada la transaccion se eliminan todos los valores guardados hasta el momento
session_start();
session_destroy();

// Borramos las variables de autenticación del array $_SERVER
unset($_SERVER['PHP_AUTH_USER']);
unset($_SERVER['PHP_AUTH_PW']);
//Redirigimos a la pagina index.php
header("Location: index.php");
exit();
