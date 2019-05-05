var con = require('../lib/conexionbd');

var anio = "anio";
var titulo = "titulo";
var genero = "genero_id";
var sql = "select * from pelicula where id=id"

function listaPeliculas(req, res) {
    var orden = req.query.columna_orden;
    var tipo = req.query.tipo_orden;
    var pagina = req.query.pagina;
    var cantidad = req.query.cantidad;

    if (req.query.anio) {
        anio = req.query.anio;
        sql = sql + " and anio =" +anio;
    }

    if (req.query.titulo) {
        titulo = req.query.titulo;
        sql = sql + ' and titulo like "%'+titulo +'%"';
    }

    if (req.query.genero) {
        genero = req.query.genero;
        sql = sql +  " and genero_id =" +genero;
    }

    sql = sql + " order by " +orden +" "+tipo + " limit 0,20";
    
    

    
    con.query(sql, function(error, resultado, fields) {
        if (error) {
            console.log("Hubo un error en la consulta", error.message);
            return res.status(404).send("Hubo un error en la consulta");
        }
        var response = {
            'peliculas': resultado
        };
        sql = "select * from pelicula where id=id";
        res.send(JSON.stringify(response));
    });
};

function listaGeneros(req, res) {
    var sql = "select * from genero"
    con.query(sql, function(error, resultado, fields) {
        if (error) {
            console.log("Hubo un error en la consulta", error.message);
            return res.status(404).send("Hubo un error en la consulta");
        }
        var response = {
            'generos': resultado
        };

        res.send(JSON.stringify(response));
    });
};


module.exports = {
    listaPeliculas: listaPeliculas,
    listaGeneros: listaGeneros,
};

 // http://localhost:8080/peliculas?pagina=1&anio=2001&cantidad=52&columna_orden=titulo&tipo_orden=ASC

