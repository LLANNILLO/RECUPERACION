-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-05-2024 a las 09:53:48
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

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

--
-- Volcado de datos para la tabla `familias`
--

INSERT INTO `familias` (`id_familia`, `nombre_familia`) VALUES
(1, 'Accion'),
(2, 'Aventura'),
(12, 'Aventuras Graficas'),
(10, 'Carreras'),
(9, 'Deportes'),
(4, 'Estrategia'),
(5, 'Hack & Slash'),
(6, 'Metroidvania'),
(13, 'Mundo Abierto'),
(11, 'Puzzles'),
(7, 'Roguelike'),
(3, 'Rol'),
(14, 'Shooter'),
(8, 'Simulacion');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes`
--

CREATE TABLE `imagenes` (
  `id_imagen` int(11) NOT NULL COMMENT 'Indice de las imagenes con un valor autoincrementado',
  `url` varchar(1000) NOT NULL COMMENT 'Localizacion de las imagenes para poderlas sacar en la web'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `imagenes`
--

INSERT INTO `imagenes` (`id_imagen`, `url`) VALUES
(1, '/image/products/manor_lords.jpg'),
(2, '/image/products/helldivers.jpg'),
(3, '/image/products/motoGP_24.jpg'),
(4, '/image/products/another_crab_s_treasure.jpg'),
(5, '/image/products/top_spin_2k25.jpg'),
(6, '/image/products/planet_zoo.jpg'),
(7, '/image/products/no_rest_for_the_wicked.jpg'),
(8, '/image/products/dead_island_2.jpg'),
(9, '/image/products/balatro.jpg'),
(10, '/image/products/buckshot-roulette-pc-juego-steam-cover.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(11) NOT NULL COMMENT 'Id de cada uno de los productos',
  `nombre_producto` varchar(100) NOT NULL COMMENT 'Nombre del producto',
  `descripcion` varchar(10000) NOT NULL COMMENT 'Descripcion especifica para cada uno de los productos',
  `precio` int(11) NOT NULL COMMENT 'Precio del producto',
  `imagen` int(11) NOT NULL COMMENT 'Id de la imagen a la que hara referencia',
  `familia` int(11) NOT NULL COMMENT 'Id de la familia a la que el producto pertenece'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci COMMENT='Tabla para cotejar cada uno de los productos';

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `nombre_producto`, `descripcion`, `precio`, `imagen`, `familia`) VALUES
(1, 'Manor Lords', 'Manor Lords es un juego de estrategia que te hará experimentar la vida de un señor medieval. Convierte tu aldea en una ciudad próspera, encárgate de los recursos y las cadenas de producción y sírvete de la conquista para expandir tus tierras. Manor Lords se inspira en el arte y la arquitectura de la Franconia del s. XIV y mantiene el rigor histórico en la medida de lo posible tanto en los gráficos como en las mecánicas jugables. Se han descartado los temas medievales recurrentes en favor de la precisión histórica para lograr una sensación más auténtica, variopinta y creíble.', 25, 1, 4),
(2, 'Helldivers II', 'Libertad. Paz. Democracia. Como habitante de Supertierra, estos son tus derechos. Los pilares fundamentales de nuestra civilización.\r\nDe nuestra existencia.\r\nPero la guerra continúa. Y todo vuelve a estar amenazado.\r\nÚnete a la mejor fuerza militar de la galaxia y haz que este sea un lugar seguro y libre donde vivir.\r\n', 30, 2, 14),
(3, 'MotoGP 24', 'Lánzate a la aventura de convertirte en una leyenda de MotoGP y forja tu propia saga épica. Desde los humildes comienzos hasta llegar a la cima, el rumbo que tomes dependerá de ti. Participa en rivalidades apasionadas, lábrate una reputación y deja huella en la historia de tu querido equipo.\r\n¡Pero eso no es todo! Con la llegada de una nueva temporada, soplan vientos de cambio para el personal de boxes. Gracias al innovador Mercado de pilotos, los pilotos ahora pueden cambiar de equipo para revolucionar las cosas y darle un toque de incertidumbre a la competición.', 40, 3, 10),
(4, 'Another Crab\'s Treasure', 'Another Crab\'s Treasure es una aventura espiritual ambientada en un mundo submarino en ruinas. Como Kril, el cangrejo ermitaño, tendrás que usar la basura que te rodea como caparazones para resistir los ataques de enemigos muchas veces más grandes que tu tamaño. Embárcate en una búsqueda del tesoro épica para recuperar tu caparazón recuperado y descubre los oscuros secretos detrás del océano contaminado.', 15, 4, 2),
(5, 'TopSpin2k25', 'Viaja por el mundo como un prometedor profesional, enfréntate a los más grandes nombres del tenis y toma la pista central de Wimbledon, Roland-Garros, el Abierto de EE. UU. y el Abierto de Australia mientras luchas por convertirte en un Campeón del Grand Slam en MyCAREER', 50, 5, 9),
(6, 'Planet Zoo: Banyard Animal Pack', '¡Vive el encanto rústico del campo con el paquete de animales de granja de Planet Zoo! Lleva la belleza rural a tus zoológicos y deja que los visitantes conozcan a siete queridos animales que viven junto a los humanos desde hace cientos de años.\r\n\r\nEsta colección, repleta de personalidad y carácter, incluye la aventurera cabra alpina, conocida por sus ágiles patas y su espíritu indomable, el gallo de Sussex, con sus ademanes enérgicos, y la dulce y curiosa alpaca.\r\n\r\nAdemás de estas nuevas y emocionantes incorporaciones, el paquete de animales de granja también incluye más de 60 elementos de decoración rústicos y un nuevo escenario de campaña, en el que personajes muy queridos regresan para transformar una deteriorada granja en un refugio de éxito para disfrute tanto de los animales como de los visitantes.', 5, 6, 8),
(7, 'No Rest For The Wicked', 'Moon Studios, los desarrolladores galardonados por su trabajo en Ori and the Blind Forest y Ori and the Will of the Wisps, nos traen No Rest for the Wicked, un RPG visceral repleto de Acción certera que revolucionará el género.\r\n\r\nAño 841, el rey Harol ha muerto. La noticia de su fallecimiento se propaga por todo el reino y la corona pasa a Magnus, su arrogante hijo, que no ha pisado nunca el campo de batalla.\r\n\r\nPara empeorar las cosas, la pestilencia, una plaga maldita que llevaba mil años erradicada, ha regresado y lo corrompe todo y a todos los que toca, asolando la tierra por la que pasa. La madrigal Seline, una figura ambiciosa e implacable de la iglesia, cree que la pestilencia le brindará la ocasión de demostrar su valía ante los ojos de su dios.\r\n\r\nTodas estas fuerzas convergen en Sacra, donde los grupos rebeldes y el gobierno local luchan por hacerse con el control de las ruinas decadentes de la isla.\r\n\r\nTú formas parte de los cerim, un grupo de guerreros místicos sagrados con poderes increíbles que han jurado acabar con la pestilencia cueste lo que cueste. No obstante, tu misión se volverá cada vez más complicada al involucrarte en los aprietos de la gente y los enormes problemas políticos de esta tierra oprimida. El caos te arrastrará en todas direcciones mientras intentas eliminar la maldad de la tierra y dar forma al destino del reino.', 30, 7, 3),
(8, 'Dead Island 2 Gold Edition', 'Un virus mortal se extiende por Los Ángeles y está convirtiendo a sus habitantes en zombis. Te han mordido y te han infectado, pero tu cuerpo es inmune. Descubre la verdad tras el brote y quién (o qué) eres. Sobrevive, evoluciona y conviértete en el matazombis supremo.\r\n', 30, 8, 13),
(9, 'Balatro', 'Balandro es un constructor de mazos roguelike basado en el póker donde deberás crear potentes sinergias y ganar a lo grande.', 10, 9, 8),
(20, 'C', 'C', 0, 10, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `alias` varchar(100) NOT NULL COMMENT 'nombre que se le atribuye a la cuenta de un usuario. Ha de ser la clave primaria, puesto que no se permiten que exista más de un usuario con el mismo nombre',
  `nombre` varchar(100) NOT NULL COMMENT 'nombre real del dueño de la cuenta',
  `contrasena` varchar(100) NOT NULL COMMENT 'contraseña de la cuenta para emplear en el login',
  `rol` enum('administrador','usuario') NOT NULL COMMENT 'Diferenciar entre los usuarios que compran los productos y usuarios que alteran la web'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci COMMENT='Tabla para guardar el registro de usuarios de la web';

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`alias`, `nombre`, `contrasena`, `rol`) VALUES
('admin', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'administrador'),
('David', 'David  Llanillo Antolin', '5817509baccd440bb877851a007b2652', 'usuario');

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
  ADD PRIMARY KEY (`alias`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `familias`
--
ALTER TABLE `familias`
  MODIFY `id_familia` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Familia a la que pertenece un producto en concreto', AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  MODIFY `id_imagen` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Indice de las imagenes con un valor autoincrementado', AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id de cada uno de los productos', AUTO_INCREMENT=23;

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
