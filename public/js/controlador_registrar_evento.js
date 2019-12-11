'use strict';
// Aqui empiezan todas las variables para subir las fotos a cloudinary
const CLOUDINARY_URL = 'https://res.cloudinary.com/adastra/image/upload/';
const CLOUDINARY_UPLOAD_PRESET = 'bydp1axd';

//Constantes
const img_uploader_imagen = document.querySelector('#portada');
const input_nombre = document.querySelector('#txt-nombre');
const input_recinto = document.querySelector('#txt-recinto');
const input_fecha_inicio = document.querySelector('#txt-fecha_inicio');
const input_fecha_finalizacion = document.querySelector('#txt-fecha_finalizacion');
const input_tipo_evento = document.querySelector('#txt-tipo_evento');
const input_encargado = document.querySelector('#txt-encargado');
const input_ubicacion = document.querySelector('#txt-ubicacion');
const input_provincia = document.querySelector('#txt-provincia');
const input_canton = document.querySelector('#txt-canton');
const input_distrito = document.querySelector('#txt-distrito');
//Btn para registrar
const boton_registrar = document.querySelector('#btn_registrar');

let validar = (pnombre, precinto, pfecha_inicio, pfecha_finalizacion, ptipo_evento, pencargado, pubicacion, pprovincia, pcanton, pdistrito) => {

    let error = false;

    if (img_uploader_imagen.src == '') {
        error = true;
        img_uploader_imagen.classList.add('input_error');

    } else {
        img_uploader_imagen.classList.remove('input_error');
    }

    if (pnombre == '') {
        error = true;
        input_nombre.classList.add('input_error');
    } else {
        input_nombre.classList.remove('input_error');
    }

    if (precinto == '') {
        error = true;
        input_recinto.classList.add('input_error');
    } else {
        input_recinto.classList.remove('input_error');
    }

    if (pfecha_inicio == '') {
        error = true;
        input_fecha_inicio.classList.add('input_error');
    } else if (pfecha_inicio >= pfecha_finalizacion) {
        error = true;
        input_fecha_inicio.classList.add('input_error');
        input_fecha_finalizacion.classList.add('input_error');
    } else {
        input_fecha_inicio.classList.remove('input_error');
    }

    if (pfecha_finalizacion == '') {
        error = true;
        input_fecha_finalizacion.classList.add('input_error');
    } else if (input_fecha_finalizacion <= pfecha_inicio) {
        error = true;
        input_fecha_finalizacion.classList.add('input_error');
        input_fecha_inicio.classList.add('input_error');
    } else {
        input_fecha_finalizacion.classList.remove('input_error');
    }


    if (ptipo_evento == '') {
        error = true;
        input_tipo_evento.classList.add('input_error');
    } else {
        input_tipo_evento.classList.remove('input_error');
    }

    if (pencargado == '') {
        error = true;
        input_encargado.classList.add('input_error');
    } else {
        input_encargado.classList.remove('input_error');
    }

    if (pubicacion == '') {
        error = true;
        input_ubicacion.classList.add('input_error');
    } else {
        input_ubicacion.classList.remove('input_error');
    }

    if (pprovincia == '') {
        error = true;
        input_provincia.classList.add('input_error');
    } else {
        input_provincia.classList.remove('input_error');
    }

    if (pcanton == '') {
        error = true;
        input_canton.classList.add('input_error');
    } else {
        input_canton.classList.remove('input_error');
    }

    if (pdistrito == '') {
        error = true;
        input_distrito.classList.add('input_error');
    } else {
        input_distrito.classList.remove('input_error');
    }

    return error;
};

function obtener_datos() {

    let imagen = img_uploader_imagen.src;
    let nombre = input_nombre.value;
    let recinto = input_recinto.value;
    let fecha_inicio = input_fecha_inicio.value;
    let fecha_finalizacion = input_fecha_finalizacion.value;
    let tipo_evento = input_tipo_evento.value;
    let encargado = input_encargado.value;
    let ubicacion = input_ubicacion.value;
    let provincia = input_provincia.value;
    let canton = input_canton.value;
    let distrito = input_distrito.value;

    let error = validar(nombre, recinto, fecha_inicio, fecha_finalizacion, tipo_evento, encargado, ubicacion, provincia, canton, distrito);

    if (error == false) {
        registrar_evento(imagen, nombre, recinto, fecha_inicio, fecha_finalizacion, tipo_evento, encargado, ubicacion, provincia, canton, distrito);
        Swal.fire({ //formato json
            title: 'Se ha registrado la información exitosamente',
            type: 'success',
        });
        limpiarFormulario();
    }
    else {
        Swal.fire({ //formato json
            title: 'No se ha registrado la información',
            type: 'warning',
            text: 'Revisá los campos resaltados e intentalo de nuevo'
        })
    }
};

//Función para limpiar el formulario
const limpiarFormulario = () => {

    input_nombre.value = '';
    input_recinto.value = '';
    input_fecha_inicio.value = '';
    input_fecha_finalizacion.value = '';
    input_tipo_evento.value = '';
    input_encargado.value = '';
    input_ubicacion.value = '';
    input_provincia.value = '';
    input_canton.value = '';
    input_distrito.value = '';
};

boton_registrar.addEventListener('click', obtener_datos)