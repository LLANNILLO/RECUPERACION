<?php

use Ejercicio1\Interfaces\Redimensionable;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class CambiosImagen implements Redimensionable
{

    public function redimensionarImagen(int $redimension, string $ruta_imagen): void
    {
        $manager = new ImageManager(new Driver());
        $imagen = $manager->read($ruta_imagen);

        $imagen->resize(height: $redimension);
        $imagen->save($ruta_imagen);
    }
}

?>
