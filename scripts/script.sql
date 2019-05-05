
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

CREATE TABLE `genero` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE pelicula ADD COLUMN genero_id int(11);
ALTER TABLE pelicula ADD FOREIGN KEY (genero_id) REFERENCES genero(id);

CREATE TABLE `actor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `actor_pelicula` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `actor_id` int(11) DEFAULT '',
  `pelicula_id` int(11) DEFAULT '',
  PRIMARY KEY (`id`),
  FOREIGN KEY (pelicula_id) REFERENCES pelicula(id),
  FOREIGN KEY (actor_id) REFERENCES actor(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

