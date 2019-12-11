const model_recinto = require('./recinto.model');

module.exports.registrar_recinto = function (req, res) {
    let nuevo_recinto = new model_recinto(
        {
            imagen: req.body.imagen,
            nombre: req.body.nombre,
            encargado: req.body.encargado,
            telefono: req.body.telefono,
            hora_apertura: req.body.hora_apertura,
            hora_cierre: req.body.hora_cierre,
            capacidad: req.body.capacidad,
            estado: req.body.estado,
            ubicacion: req.body.ubicacion,
            provincia: req.body.provincia,
            canton: req.body.canton,
            distrito: req.body.distrito
        }
    );
    nuevo_recinto.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false, msg: `No se ha logrado registrar el recinto. Error ${error}`
                }
            );
        } else {
            res.json(
                {
                    success: true, msg: `Se ha registrado el recinto.`
                }
            );
        }
    });
};

module.exports.listar_recintos = function (req, res) {
    model_recinto.find(function (err, recintoDB) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar las librerías',
                err
            });
        } else {
            return res.json({
                success: true,
                lista_recintos: recintoDB
            });
        }
    })
}

module.exports.buscar_recinto_id = function (req, res) {
    model_recinto.findById(req.body._id, function (err, recintoDB) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se encontro ningun campo con ese id.',
                err
            });
        } else {
            return res.json({
                success: true,
                recinto: recintoDB
            });
        }
    })
};

module.exports.modificar_recinto = function (req, res) {
    let body = req.body;

    model_recinto.findByIdAndUpdate(body._id, {
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

module.exports.eliminar_recinto = function (req, res) {
    let body = req.body;

    model_recinto.findByIdAndRemove(body._id,
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo borrar el campo' });
            } else {
                res.json({ success: true, msg: 'El campo se borró con éxito' });
            }
        }
    )
};