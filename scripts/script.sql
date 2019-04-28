
CREATE DATABASE queveohoy;

USE queveohoy;

CREATE TABLE `pelicula` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL DEFAULT '',
  `duracion` int(5) NOT NULL,
  `director` varchar(400) NOT NULL DEFAULT '',
  `anio` int(5) NOT NULL,
  `fecha_lanzamiento` date,
  `puntuacion` int(2),
  `poster` varchar(300) DEFAULT '',
  `trama` varchar(700) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


