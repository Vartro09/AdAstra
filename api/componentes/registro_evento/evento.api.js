const model_evento = require('./evento.model');

module.exports.registrar_evento = function (req, res) {
    let nuevo_evento = new model_evento(
        {
            imagen: req.body.imagen,
            nombre: req.body.nombre,
            max_entradas: req.body.max_entradas,
            precio: req.body.precio,
            nombre: req.body.nombre,
            recinto: req.body.recinto,
            fecha_inicio: req.body.fecha_inicio,
            fecha_finalizacion: req.body.fecha_finalizacion,
            tipo_evento: req.body.tipo_evento,
            encargado: req.body.encargado,
            ubicacion: req.body.ubicacion,
            provincia: req.body.provincia,
            canton: req.body.canton,
            distrito: req.body.distrito
        }
    );
    nuevo_evento.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false, msg: `No se ha logrado registrar el evento. Error ${error}`
                }
            );
        } else {
            res.json(
                {
                    success: true, msg: `Se ha registrado el evento.`
                }
            );
        }
    });
};

module.exports.listar_eventos = function (req, res) {
    model_evento.find(function (err, eventoDB) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar las librerías',
                err
            });
        } else {
            return res.json({
                success: true,
                lista_eventos: eventoDB
            });
        }
    })
}

module.exports.buscar_evento_id = function (req, res) {
    model_evento.findById(req.body._id, function (err, eventoDB) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se encontro ningun campo con ese id.',
                err
            });
        } else {
            return res.json({
                success: true,
                evento: eventoDB
            });
        }
    })
};

module.exports.modificar_evento = function (req, res) {
    let body = req.body;

    model_evento.findByIdAndUpdate(body._id, {
        $set: req.body
    },
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo modificar el campo' });
            } else {
                res.json({ success: true, msg: 'El campo se modificó con éxito' });
            }
        }
    )
};

module.exports.eliminar_evento = function (req, res) {
    let body = req.body;

    model_evento.findByIdAndRemove(body._id,
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo borrar el campo' });
            } else {
                res.json({ success: true, msg: 'El campo se borró con éxito' });
            }
        }
    )
};