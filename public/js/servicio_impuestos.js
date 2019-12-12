'use strict';


function registrarImpuesto(pNombre,pPorcentaje){
	let respuesta = '';
	let peticion = $.ajax({
		url: 'http://localhost:3000/api/registrar_impuesto',
		type: 'post',
		contentType: 'application/x-www-form-urlencoded; charset=utf-8',
		dataType : 'json',
		async: false,
		data: {
			nombreImpuesto : pNombre,
			porcentaje : pPorcentaje
		}
	});

	peticion.done(function(response){
		respuesta = response;
	});


	peticion.fail(function(response){
		respuesta = response;
	});

	return respuesta;
};

function obtener_lista_impuestos(){
	return lista_impuestos;
}