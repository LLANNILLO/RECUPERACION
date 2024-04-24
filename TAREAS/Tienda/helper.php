<?php

/**
 * 
 * Funcion para comprobar que se introducen 
 * todos los campos de los formularios que sean requeridos
 * 
 *  */ 
function validar_requerido(string $requerido) : bool
{

    $existe = empty($requerido);

    return $existe;

}


/**
 * Funcion para validar que los campos numericos
 * posean un valor numerico
 * 
 */
function validar_numerico(string $valor_numerico) : bool
{

    $validado = is_numeric($valor_numerico);

    return $validado;

}


/**
 * Funcion para validar la longitud de cada uno de los campos
 * 
 */
function validar_longitud(string $campo,int $longitud_especificada) : bool
{

    $longitud_campo = mb_strlen($campo);
    
    $validado = $longitud_campo === $longitud_especificada;
    return $validado;

}


/**
 * Funcion para validar la subida de archivos
 * 
 */
function validar_subida_fichero()
{
}


/**
 * Funcion para limpiar texto de cualquier etiqueta HTML que no sea <strong> o <em>
 * 
 */
function limpiar_texto(string $texto_entrada) : string
{


    $etiquetas_permitidas = ['<strong>','</strong>','<em>','</em>'];
    
    //Revisar la funcion strip_tags
    $texto_limpiado = strip_tags($texto_entrada,$etiquetas_permitidas);

    return $texto_limpiado;

}

/**
 * Funcion para limpiar todas las entradas del formulario
 * 
 */
function limpiar_entrada()
{
    
}

//Funcion para realizar la redireccion de un path en concreto
function redireccionar(string $path)
{
    header("Location: {$path}");
    exit();
}
