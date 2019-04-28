
USE queveohoy;

CREATE TABLE `genero` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE pelicula ADD COLUMN genero_id int(11);
ALTER TABLE pelicula ADD FOREING KEY (genero_id) REFERENCES genero(id);


