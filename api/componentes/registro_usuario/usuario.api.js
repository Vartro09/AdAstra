const Usuario = require('./usuario.model');

module.exports.registrar_usuario = function (req, res) {
    body = req.body;

    let nuevo_usuario = new Usuario({
        avatar: body.avatar,
        correo: body.correo,
        contrasena: body.contrasena,
        nombre: body.nombre,
        snombre: body.snombre,
        organizacion: body.organizacion,
        exp: body.exp,
        id: body.id,
        primer_apellido: body.primer_apellido,
        segundo_apellido: body.segundo_apellido,
        genero: body.genero,
        direccion_exacta: body.direccion_exacta,
        provincia: body.provincia,
        canton: body.canton,
        distrito: body.distrito,
        tipo_usuario: body.tipo_usuario,
        fecha: body.fecha,
        estado: body.estado
    });

    nuevo_usuario.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false, msg: `No se ha logrado registrar el usuario. Error ${error}`
                }
            );
        } else {
            res.json(
                {
                    success: true, msg: `Se ha registrado el usuario.`
                }
            );
        }
    });
};

module.exports.listar_usuarios = (req, res) => {
    Usuario.find().then(
        function (usuarios) {
            if (usuarios.length > 0) {
                res.json(
                    {
                        success: true,
                        usuarios: usuarios
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        usuarios: ' No se han encontrado usuarios'
                    }
                )
            }
        }
    )
};

module.exports.listar_usuario_id = function (req, res) {
    Usuario.findById(req.body._id, function (err, usuarioDB) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se encontro ningun campo con ese id.',
                err
            });
        } else {
            return res.json({
                success: true,
                usuario: usuarioDB
            });
        }
    })
};

module.exports.eliminar_usuario = function (req, res) {
    let body = req.body;

    Usuario.findByIdAndRemove(body._id,
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo borrar el campo' });
            } else {
                res.json({ success: true, msg: 'El campo se borró con éxito' });
            }
        }
    )
};

//REQUERIDO PARA INICIO DE SESION

module.exports.validar_credenciales = function(req, res){
    Usuario.findOne({correo: req.body.correo}).then{
        function(usuario){
            if (usuario){
                if (usuario.contrasena == req.body.contrasena) {
                    res.json({
                        success: true,
                        usuario : usuario
                    });
                }else{
                    res.json({
                        success: false
                    });
                }
            }else{
                res.json({
                        success: false,
                        msg :'El usuario no existe'
                    });
            }
        }
    }
};
