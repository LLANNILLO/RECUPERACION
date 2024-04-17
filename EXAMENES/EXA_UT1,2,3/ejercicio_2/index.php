<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aritstas</title>
  <link rel="stylesheet" href="./estilo/estilo.css">
</head>

<body>


  <?php

  $artistas_rock = array(
    "The Beatles" => array(
      "fundacion" => 1960,
      "disolucion" => 1970,
      "discos" => array(
        array("titulo" => "Please Please Me", "anoPublicacion" => 1963, "ruta" => "./imagenes/Please_Please_Me.jpeg"),
        array("titulo" => "Sgt. Pepper's Lonely Hearts Club Band", "anoPublicacion" => 1967, "ruta" => "imagenes/Sgt_Peppers_Loney_Hearts_Club_Band.jpg"),
        array("titulo" => "Abbey Road", "anoPublicacion" => 1969, "ruta" => "imagenes/Abbey_Road.jpeg")
      )
    ),
    "Rolling Stones" => array(
      "fundacion" => 1962,
      "disolucion" => null,
      "discos" => array(
        array("titulo" => "Out of Our Heads", "anoPublicacion" => 1965, "ruta" => "imagenes/Out_of_Our_Head.jpg"),
        array("titulo" => "Exile on Main St.", "anoPublicacion" => 1972, "ruta" => "imagenes/Exile_on_Main_St.jpg"),
        array("titulo" => "Some Girls", "anoPublicacion" => 1978, "ruta" => "imagenes/Some_Girls.jpg")
      )
    ),
    "Led Zeppelin" => array(
      "fundacion" => 1968,
      "disolucion" => 1980,
      "discos" => array(
        array("titulo" => "Led Zeppelin IV", "anoPublicacion" => 1971, "ruta" => "imagenes/Led_Zeppelin_IV.jpg"),
        array("titulo" => "Physical Graffiti", "anoPublicacion" => 1975, "ruta" => "imagenes/Physical_Graffiti.jpg"),
        array("titulo" => "Houses of the Holy", "anoPublicacion" => 1973, "ruta" => "imagenes/Houses_of_the_Holy.jpg")
      )
    ),
    "Pink Floyd" => array(
      "fundacion" => 1965,
      "disolucion" => 2014,
      "discos" => array(
        array("titulo" => "The Dark Side of the Moon", "anoPublicacion" => 1973, "ruta" => "imagenes/The_Dark_Side_of_the_Moon.jpg"),
        array("titulo" => "Wish You Were Here", "anoPublicacion" => 1975, "ruta" => "imagenes/Wish_You_Were_Here.jpg"),
        array("titulo" => "The Wall", "anoPublicacion" => 1979, "ruta" => "imagenes/The_Wall.png")
      )
    ),
    "Queen" => array(
      "fundacion" => 1970,
      "disolucion" => 1991,
      "discos" => array(
        array("titulo" => "A Night at the Opera", "anoPublicacion" => 1975, "ruta" => "imagenes/A_Night_at_the_Opera.jpg"),
        array("titulo" => "Sheer Heart Attack", "anoPublicacion" => 1974, "ruta" => "imagenes/Sheer_Heart_Attack.jpg"),
        array("titulo" => "News of the World", "anoPublicacion" => 1977, "ruta" => "imagenes/News_of_the_World.jpg")
      )
    )
  );

  $nombres_artistas = array_keys($artistas_rock);

  function mostrar_opciones()
  {
    global $artistas_rock;

    foreach ($artistas_rock as $artista => $datos) {
      if ($_POST["grupo_rock"] === $artista) {
        echo "<option value=\"{$artista}\" selected>$artista</option>";
      } else {
        echo "<option value=\"{$artista}\">$artista</option>";
      }
    }
  }

  function obtenerTitulos($discos)
  {
    foreach ($discos as $titulos) {
      echo "<td>" . $titulos["titulo"] . "</td>";
    }
  }

  function obtenerImagenes($discos)
  {
    foreach ($discos as $disco) {
      echo "<td><img src=" . $disco["ruta"] . " alt='imagen'></td>";
    }
  }

  function displayInformacion()
  {
    global $artistas_rock;
    global $nombres_artistas;
    if (isset($_POST["grupo_rock"])) {

      $grupo_rock = $_POST["grupo_rock"];

      if ($grupo_rock === "todos") {
        $nombre = 0;
        echo "<table class=\"tabla\">";
        foreach ($artistas_rock as $artista) {
          echo "<tr><th colspan='3'>$nombres_artistas[$nombre]</th></tr>";
          echo "<tr>";
          obtenerTitulos($artista["discos"]);
          echo "</tr>";
          echo "<tr>";
          obtenerImagenes($artista["discos"]);
          echo "</tr>";
          $nombre++;
        }
        echo "</table>";
      } else {
        if (array_key_exists($grupo_rock, $artistas_rock)) {
          $grupo = $artistas_rock[$grupo_rock];
          echo "<table class=\"tabla\">";
          echo "<tr>";
          obtenerTitulos($grupo["discos"]);
          echo "</tr>";
          echo "<tr>";
          obtenerImagenes($grupo["discos"]);
          echo "</tr>";
        }
      }
    }
  }
  ?>

  <h1>Elige el grupo de rock</h1>
  <hr>
  <form class="formulario" action="" method="POST">
    <ul>
      <p>Grupo
        <select name="grupo_rock" id="grupoRock">
          <option value="todos">todos</option>
          <?php mostrar_opciones() ?>
        </select>
      </p>
      <input type="submit" value="Buscar">
    </ul>
  </form>

  <?php displayInformacion() ?>
</body>

</html>