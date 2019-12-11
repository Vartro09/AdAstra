'use strict';
// Aqui empiezan todas las variables para subir las fotos a cloudinary
const CLOUDINARY_URL = 'https://res.cloudinary.com/adastra/image/upload/';
const CLOUDINARY_UPLOAD_PRESET = 'bydp1axd';

//Constantes
const img_uploader_imagen = document.querySelector('#portada');
const input_nombre = document.querySelector('#txt-nombre');
const input_encargado = document.querySelector('#txt-encargado');
const input_telefono = document.querySelector('#txt-telefono');
const input_hora_apertura = document.querySelector('#txt-hora-apertura');
const input_hora_cierre = document.querySelector('#txt-hora-cierre');
const input_capacidad = document.querySelector('#txt-capacidad');
const input_estado = document.querySelector('#txt-estado');
const input_ubicacion = document.querySelector('#txt-ubicacion');
const input_provincia = document.querySelector('#txt-provincia');
const input_canton = document.querySelector('#txt-canton');
const input_distrito = document.querySelector('#txt-distrito');
//Btn para registrar
const boton_registrar = document.querySelector('#btn_registrar');

const urlParams = new URLSearchParams(window.location.search);
let _id = urlParams.get('_id');

let llenar_formulario = async () => {

    let recinto = await obtenerRecintoid(_id);

    if (recinto) {
        ///////////
        //Datos
        img_uploader_imagen.src = recinto['imagen'];
        input_nombre.value = recinto['nombre'];
        input_encargado.value = recinto['encargado']
        input_telefono.value = recinto['telefono']
        input_hora_apertura.value = recinto['hora_apertura']
        input_hora_cierre.value = recinto['hora_cierre']
        input_capacidad.value = recinto['capacidad']
        input_estado.value = recinto['estado']
        input_ubicacion.value = recinto['ubicacion']
        input_provincia.value = recinto['provincia']
        llenarCantones(recinto.provincia);
        llenarDistritos(recinto.canton);
        input_canton.value = recinto['canton']
        input_distrito.value = recinto['distrito']
        ///////////
    }
};

let llenarCantones = (pNombreProvincia) => {
    canton.length = 1;
    distrito.length = 1;
    if (this.selectedIndex < 1) return;
    let i = 0;
    for (let opt_canton in ubicaciones[pNombreProvincia]) {

        if (i == 0) {
            canton.options[canton.options.length] = new Option("--Seleccione una opción--", "--Seleccione una opción--");
        } else {
            canton.options[canton.options.length] = new Option(opt_canton, opt_canton);
        }
        i++;
    }
}

let llenarDistritos = (pNombreCanton) => {

    distrito.length = 1;
    if (this.selectedIndex < 1) return;
    let opt_distritos = ubicaciones[input_provincia.value][pNombreCanton];

    for (let i = 0; i < opt_distritos.length - 1; i++) {
        if (i == 0) {
            distrito.options[distrito.options.length] = new Option("--Seleccione una opción--", "--Seleccione una opción--");
        } else {
            distrito.options[distrito.options.length] = new Option(opt_distritos[i], opt_distritos[i]);
        }
    }

}


let validar = (pnombre, pencargado, ptelefono, phora_apertura, phora_cierre, pcapacidad, pestado, pubicacion, pprovincia, pcanton, pdistrito) => {

    let error = false;

    if (img_uploader_imagen.src == 'http://localhost:3000/public/img/placeholder.jpg') {
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

    if (pencargado == '') {
        error = true;
        input_encargado.classList.add('input_error');
    } else {
        input_encargado.classList.remove('input_error');
    }

    if (ptelefono == '') {
        error = true;
        input_telefono.classList.add('input_error');
    } else {
        input_telefono.classList.remove('input_error');
    }

    if (phora_apertura == '') {
        error = true;
        input_hora_apertura.classList.add('input_error');
    } else {
        input_hora_apertura.classList.remove('input_error');
    }

    if (phora_cierre == '') {
        error = true;
        input_hora_cierre.classList.add('input_error');
    } else {
        input_hora_cierre.classList.remove('input_error');
    }

    if (pcapacidad == '') {
        error = true;
        input_capacidad.classList.add('input_error');
    } else {
        input_capacidad.classList.remove('input_error');
    }

    if (pestado == '') {
        error = true;
        input_estado.classList.add('input_error');
    } else {
        input_estado.classList.remove('input_error');
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
    let encargado = input_encargado.value;
    let telefono = input_telefono.value;
    let hora_apertura = input_hora_apertura.value;
    let hora_cierre = input_hora_cierre.value;
    let capacidad = input_capacidad.value;
    let estado = input_estado.value;
    let ubicacion = input_ubicacion.value;
    let provincia = input_provincia.value;
    let canton = input_canton.value;
    let distrito = input_distrito.value;

    let error = validar(nombre, encargado, telefono, hora_apertura, hora_cierre, capacidad, estado, ubicacion, provincia, canton, distrito);

    if (error == false) {
        modificarRecinto(_id, imagen, nombre, encargado, telefono, hora_apertura, hora_cierre, capacidad, estado, ubicacion, provincia, canton, distrito);
        Swal.fire({ //formato json
            title: 'Se ha registrado la información exitosamente',
            type: 'success',
        }).then((result) => {
            if (result.value) {
                window.location.href = 'listar_recintos.html';
            }
        })
    }
    else {
        Swal.fire({ //formato json
            title: 'No se ha registrado la información',
            type: 'warning',
            text: 'Revisá los campos resaltados e intentalo de nuevo'
        })
    }
};

llenar_formulario();
boton_registrar.addEventListener('click', obtener_datos)