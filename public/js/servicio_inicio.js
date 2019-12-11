'use strict';
function validar_usuario(pcorreo,pcontrasena){
	let respuesta = '';
	let peticion = $.ajax({
		url: 'http://localhost:4000/api/validar_credenciales',
		type: 'post',
		contentType: 'json',
		async: false,
		data: {
			correo : pcorreo,
			contrasena : pcontrasena
		}
	});

	peticion.done(function(response){
		respuesta = response;
		sessionStorage.setItem('conectado', response.success);
		sessionStorage.setItem('tipo_user', response.usuario.tipo_usuario);
	});


	peticion.fail(function(response){
		respuesta= response;
	});

};