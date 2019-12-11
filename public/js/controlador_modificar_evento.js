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

const urlParams = new URLSearchParams(window.location.search);
let _id = urlParams.get('_id');

let llenar_formulario = async () => {

    let evento = await obtenerEventoid(_id);

    if (evento) {
        ///////////
        //Datos
        img_uploader_imagen.src = evento['imagen'];
        input_nombre.value = evento['nombre'];
        input_recinto.value = evento['recinto']
        //////////////////////////
        //Datos de Fecha de inicio
        let fecha1 = new Date(evento['fecha_inicio']);

        let mes1 = fecha1.getUTCMonth() + 1;
        if (mes1 < 10) {
            mes1 = '0' + mes1;
        }

        let dia1 = fecha1.getDate();
        if (dia1 < 10) {
            dia1 = '0' + dia1;
        }

        input_fecha_inicio.value = fecha1.getFullYear() + '-' + mes1 + '-' + dia1;
        ///////////////////////////////
        //Datos de Fecha de finalización
        let fecha2 = new Date(evento['fecha_finalizacion']);

        let mes2 = fecha2.getUTCMonth() + 1;
        if (mes2 < 10) {
            mes2 = '0' + mes2;
        }

        let dia2 = fecha2.getDate();
        if (dia2 < 10) {
            dia2 = '0' + dia2;
        }

        input_fecha_finalizacion.value = fecha2.getFullYear() + '-' + mes2 + '-' + dia2;
        ///////////
        //Datos
        input_tipo_evento.value = evento['tipo_evento']
        input_encargado.value = evento['encargado']
        input_ubicacion.value = evento['ubicacion']
        input_provincia.value = evento['provincia']
        llenarCantones(evento.provincia);
        llenarDistritos(evento.canton);
        input_canton.value = evento['canton']
        input_distrito.value = evento['distrito']
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
    } else {
        input_fecha_inicio.classList.remove('input_error');
    }

    if (pfecha_finalizacion == '') {
        error = true;
        input_fecha_finalizacion.classList.add('input_error');
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
        modificarEvento(_id, imagen, nombre, recinto, fecha_inicio, fecha_finalizacion, tipo_evento, encargado, ubicacion, provincia, canton, distrito);
        Swal.fire({ //formato json
            title: 'Se ha registrado la información exitosamente',
            type: 'success',
        }).then((result) => {
            if (result.value) {
                window.location.href = 'listar_eventos.html';
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