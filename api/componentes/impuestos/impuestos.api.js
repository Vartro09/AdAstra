'use strict';


const impuestoModel = require('./impuestos.model');

module.exports.registrar = function(req, res) {
    let nuevoImpuesto = new impuestoModel({
        nombreImpuesto: req.body.nombreImpuesto,
        porcentaje: req.body.porcentaje
    });


    nuevoImpuesto.save(
        function(error) {
            if (error) {
                res.json({
                    sucess: false,
                    msg: 'El impuesto no pudo ser registrado : ' + error
                });
            } else {
                res.json({
                    sucess: true,
                    msg: 'El impuesto ha sido registrado con éxito'
                });
            }
        });
};

module.exports.listar_todos = function(req, res) {
    impuestoModel.find().then(
        function(impuestos) {
            /*if (impuestos.length > 0){
            	res.json({success: true, lista_impuestos : impuestos});
            }else{
            	res.json({success: false, lista_impuestos : impuestos});
            }*/
            res.send(impuestos);
        }
    );
};