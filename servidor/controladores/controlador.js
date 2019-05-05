var con = require('../lib/conexionbd');

var anio = "anio";
var titulo = "titulo";
var genero = "genero_id";


function errores (data, res) {
    if (data) {
        console.log("Hubo un error en la consulta", data.message);
        return res.status(404).send("Hubo un error en la consulta");
    }
}

function listaPeliculas(req, res) {
var sql = "select * from pelicula where id=id";
var sql1 = "select count(*) as total from pelicula where id=id";

    var orden = req.query.columna_orden;
    var tipo = req.query.tipo_orden;
    var cantidad = req.query.cantidad;
    var pagina = (req.query.pagina -1)*cantidad;
    
    if (req.query.anio) {
        anio = req.query.anio;
        sql = sql + " and anio =" +anio;
        sql1 = sql1 + " and anio =" +anio;
    }

    if (req.query.titulo) {
        titulo = req.query.titulo;
        sql = sql + ' and titulo like "%'+titulo +'%"';
        sql1 = sql1 + ' and titulo like "%'+titulo +'%"';
    }

    if (req.query.genero) {
        genero = req.query.genero;
        sql = sql +  " and genero_id =" +genero;
        sql1 = sql1 +  " and genero_id =" +genero;
    }

    sql = sql + " order by " +orden +" "+tipo + " limit "+ pagina + ","+ cantidad;
    
    
    var response = {
        'peliculas': "",
        'total': cantidad
    }

//Se realiza consulta de todas las peliculas y sus filtros
con.query(sql, function(error, resultado, fields) {
        errores(error, res);
        response.peliculas = resultado;

//Se realiza una nueva consulta para la paginacion
        con.query(sql1, function(error, resultado1,fields){
            errores(error, res);
            response.total = resultado1[0].total;
            res.send(JSON.stringify(response));
        });
       
    });
};

function listaGeneros(req, res) {
    var sqlGen = "select * from genero"
    con.query(sqlGen, function(error, resultado, fields) {
        errores(error, res);
        var response = {
            'generos': resultado
        };

        res.send(JSON.stringify(response));
    });
};

function listaRecomendadas(req, res) {

    var sqlRecomienda = "select * from pelicula join genero on pelicula.genero_id = genero.id where pelicula.id = pelicula.id";
    
    if (req.query.genero) {
        genero = req.query.genero;
        sqlRecomienda = sqlRecomienda +  " and genero.nombre =" +"'"+genero+"'";
    }

    if (req.query.anio_inicio) {
        var anioInicio = req.query.anio_inicio;
        sqlRecomienda = sqlRecomienda +  " and pelicula.anio between " +anioInicio;
    }

    if (req.query.anio_fin) {
        var anioFin = req.query.anio_fin;
        sqlRecomienda = sqlRecomienda +  " and " +anioFin;
    }

    if (req.query.puntuacion) {
        var puntuacion = req.query.puntuacion;
        sqlRecomienda = sqlRecomienda +  " and puntuacion >=" +puntuacion;
    }

    var response = {
        'peliculas': "",
    }

    
    con.query(sqlRecomienda, function(error, resultado, fields) {
            errores(error, res);
            response.peliculas = resultado;
            res.send(JSON.stringify(response));
            });
};


module.exports = {
    listaPeliculas: listaPeliculas,
    listaGeneros: listaGeneros,
    listaRecomendadas: listaRecomendadas,
};



