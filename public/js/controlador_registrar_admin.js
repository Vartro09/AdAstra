'use strict';
// Aqui empiezan todas las variables para subir las fotos a cloudinary
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/fenixsorbil/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'bydp1axd';

const img_uploader_imagen = document.querySelector('#portada');
const input_correo = document.querySelector('#txt_correo');
const input_contrasena = document.querySelector('#txt_contrasena');
const fecha = document.querySelector('#fecha');
const boton_registrar = document.querySelector('#btn_registrar');

function calcularEdad(pfecha) {
    let hoy = new Date();
    let nacimiento = new Date(pfecha);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    let m = hoy.getMonth() - nacimiento.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
}


function obtener_datos() {

    let src_imagen = img_uploader_imagen.src;
    let correo = input_correo.value;
    let contrasena = input_contrasena.value;

    let edad = calcularEdad(fecha);

    registrar_administrador(src_imagen, correo, contrasena, edad);

};


boton_registrar.addEventListener('click', obtener_datos);