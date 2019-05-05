
USE queveohoy;

CREATE TABLE `actor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `actor_pelicula` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `actor_id` int(11),
  `pelicula_id` int(11),
  PRIMARY KEY (`id`),
  FOREIGN KEY (pelicula_id) REFERENCES pelicula(id),
  FOREIGN KEY (actor_id) REFERENCES actor(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



