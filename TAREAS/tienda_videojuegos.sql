-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-04-2024 a las 17:33:37
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tienda_videojuegos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `familias`
--

CREATE TABLE `familias` (
  `id_familia` int(11) NOT NULL COMMENT 'Familia a la que pertenece un producto en concreto',
  `nombre_familia` varchar(100) NOT NULL COMMENT 'Nombre único para cada una de las familias de los productos'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes`
--

CREATE TABLE `imagenes` (
  `id_imagen` int(11) NOT NULL COMMENT 'Indice de las imagenes con un valor autoincrementado',
  `url` varchar(1000) NOT NULL COMMENT 'Localizacion de las imagenes para poderlas sacar en la web'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(11) NOT NULL COMMENT 'Id de cada uno de los productos',
  `nombre_producto` varchar(100) NOT NULL COMMENT 'Nombre del producto',
  `descripcion` varchar(10000) NOT NULL COMMENT 'Descripcion especifica para cada uno de los productos',
  `imagen` int(11) NOT NULL COMMENT 'Id de la imagen a la que hara referencia',
  `familia` int(11) NOT NULL COMMENT 'Id de la familia a la que el producto pertenece'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci COMMENT='Tabla para cotejar cada uno de los productos';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `nombre_usuario` varchar(100) NOT NULL COMMENT 'nombre que se le atribuye a la cuenta de un usuario. Ha de ser la clave primaria, puesto que no se permiten que exista más de un usuario con el mismo nombre',
  `nombre` varchar(100) NOT NULL COMMENT 'nombre real del dueño de la cuenta',
  `contrasena` varchar(100) NOT NULL COMMENT 'contraseña de la cuenta para emplear en el login',
  `rol` enum('administrador','usuario') NOT NULL COMMENT 'Diferenciar entre los usuarios que compran los productos y usuarios que alteran la web'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci COMMENT='Tabla para guardar el registro de usuarios de la web';

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `familias`
--
ALTER TABLE `familias`
  ADD PRIMARY KEY (`id_familia`),
  ADD UNIQUE KEY `nombre_familia` (`nombre_familia`);

--
-- Indices de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD PRIMARY KEY (`id_imagen`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`),
  ADD KEY `fk_imagen_id` (`imagen`),
  ADD KEY `fk_familia_id` (`familia`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`nombre_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `familias`
--
ALTER TABLE `familias`
  MODIFY `id_familia` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Familia a la que pertenece un producto en concreto';

--
-- AUTO_INCREMENT de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  MODIFY `id_imagen` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Indice de las imagenes con un valor autoincrementado';

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id de cada uno de los productos';

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `fk_familia_id` FOREIGN KEY (`familia`) REFERENCES `familias` (`id_familia`),
  ADD CONSTRAINT `fk_imagen_id` FOREIGN KEY (`imagen`) REFERENCES `imagenes` (`id_imagen`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
