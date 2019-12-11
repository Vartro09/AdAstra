'use strict';
 const inputCorreo = document.querySelector('#txtCorreo');
 const inputContrasena= document.querySelector('#txtContrasena');
 const btnIngreso = document.querySelector('#btnIngresar');


 function obtenerDatos(){
 	let correo = inputCorreo.value;
 	let contrasena = inputContrasena.value;

 	let errorBlancos = validar(correo, contrasena);
 	let usuarioAceptado = false;

 	if (!errorBlancos) {
 		usuarioAceptado = validar_usuario(correo, contrasena);

 		if (usuarioAceptado) {
 			window.location.href = 'ver-perfil-cliente.html';
 		}
 	}
 };


 function validar(pcorreo, pcontrasena){
 	let error = false;

 	if (pcorreo == '') {
 		error = true;
 		inputCorreo.classList.add('error_input');
 	}else{
 		inputCorreo.classList.remove('error_input');
 	}

 	if (pcontrasena == '') {
 		error = true;
 		inputContrasena.classList.add('error_input');
 	}else{
 		inputContrasena.classList.remove('error_input');
 	}
 };

 btnIngreso.addEventListener('click', obtenerDatos);