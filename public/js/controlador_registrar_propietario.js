'use strict';
// Aqui empiezan todas las variables para subir las fotos a cloudinary
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/fenixsorbil/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'gmqflv3u';

// Aqui terminan las variables para subir las fotos a cloudinary

// Constantes 
const img_uploader_avatar = document.querySelector('#portada');
const input_nombre = document.querySelector('#txt-nombre');
const input_snombre = document.querySelector('#txt-snombre');
const input_genero = document.querySelector('#txt-genero');
const input_correo = document.querySelector('#txt-correo');
const input_contrasena = document.querySelector('#txt-contrasena');
const input_verf_contrasena = document.querySelector('#txt-verf-contrasena');
const input_id = document.querySelector('#txt-id');
const input_primer_apellido = document.querySelector('#txt-primer-apellido');
const input_segundo_apellido = document.querySelector('#txt-segundo-apellido');
const input_fecha = document.querySelector('#txt-fecha');
const input_provincia = document.querySelector('#txt-provincia');
const input_canton = document.querySelector('#txt-canton');
const input_distrito = document.querySelector('#txt-distrito');
const input_direccion_exacta = document.querySelector('#txt-ubicacion');
const tipo_usuario = 'propietario';

const btn_crear_cuenta = document.querySelector('#btn_registrar');

let validar = (pnombre, pgenero, pcorreo, pid, pprimer_apellido, psegundo_apellido, pfecha, pprovincia, pcanton, pdistrito, pdireccion_exacta) => {

    let error = false;

    if (img_uploader_avatar.src == '') {
        error = true;
        img_uploader_avatar.classList.add('input_error');
    } else {
        img_uploader_avatar.classList.remove('input_error');
    }

    if (pnombre == '') {
        error = true;
        input_nombre.classList.add('input_error');
    } else {
        input_nombre.classList.remove('input_error');
    }

    if (pprimer_apellido == '') {
        error = true;
        input_primer_apellido.classList.add('input_error');
    } else {
        input_primer_apellido.classList.remove('input_error');
    }

    if (psegundo_apellido == '') {
        error = true;
        input_segundo_apellido.classList.add('input_error');
    } else {
        input_segundo_apellido.classList.remove('input_error');
    }

    if (pgenero == '') {
        error = true;
        input_genero.classList.add('input_error');
    } else {
        input_genero.classList.remove('input_error');
    }

    if (pcorreo == '') {
        error = true;
        input_correo.classList.add('input_error');
    } else {
        input_correo.classList.remove('input_error');
    }

    if (pid == '') {
        error = true;
        input_id.classList.add('input_error');
    } else {
        input_id.classList.remove('input_error');
    }

    if (pfecha == 'Invalid Date') {
        error = true;
        input_fecha.classList.add('input_error');
    } else {
        input_fecha.classList.remove('input_error');
    }


    if (pdireccion_exacta == '') {
        error = true;
        input_direccion_exacta.classList.add('input_error');
    } else {
        input_direccion_exacta.classList.remove('input_error');
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

let validarCedula = (pid) => {

    let errorCedula = false;
    let cedulaValida = /^[1-9]-?\d{4}-?\d{4}$/;

    if (!cedulaValida.test(pid)) {
        errorCedula = true;
        input_id.classList.add('input_error');
    }
    else {
        input_id.classList.remove('input_error');
    }
    return errorCedula;
};

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

let validarFecha = (pfecha) => {

    let hoy = new Date();
    let errorFecha = false;

    if (pfecha > hoy || pfecha == 'Invalid Date') {
        errorFecha = true;
        input_fecha.classList.add('input_error');
    }
    else {
        input_fecha.classList.remove('input_error');
    }
    return errorFecha;
};


let validarCorreo = (pcorreo) => {

    let errorCorreo = false;
    let correoValido = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    if (!correoValido.test(pcorreo)) {
        errorCorreo = true;
        input_correo.classList.add('input_error');
    }
    else {
        input_correo.classList.remove('input_error');
    }
    return errorCorreo;
};

let generarContrasena = () => {
    //Se genera la contraseña
    let randomPassword = Math.random().toString(36).slice(-8);

    return randomPassword;
};


let llamar = async () => {

    let src_avatar = img_uploader_avatar.src;
    let nombre = input_nombre.value;
    let snombre = input_snombre.value;
    let genero = input_genero.value;
    let correo = input_correo.value;
    let contrasena = generarContrasena();
    let id = input_id.value;
    let primer_apellido = input_primer_apellido.value;
    let segundo_apellido = input_segundo_apellido.value;
    let fecha = new Date(input_fecha.value);
    let provincia = input_provincia.value;
    let canton = input_canton.value;
    let distrito = input_distrito.value;
    let direccion_exacta = input_direccion_exacta.value;


    let error = validar(nombre, genero, correo, id, primer_apellido, segundo_apellido, fecha, provincia, canton, distrito, direccion_exacta);
    let errorCedula = validarCedula(id);
    let errorCorreo = validarCorreo(correo);
    let edad = calcularEdad(fecha);

    if (edad < 18) {
        Swal.fire({ //formato json
            title: 'Su edad debe ser mayor a 18 años',
            type: 'warning',
            text: 'Por favor ingresar una edad',
        })
    }
    else {
        if (error == false && errorCedula == false && errorCorreo == false) {
            registrarPropietario(src_avatar, nombre, snombre, genero, correo, contrasena, id, primer_apellido, segundo_apellido, fecha, direccion_exacta, provincia, canton, distrito, tipo_usuario);
            Swal.fire({ //formato json
                title: 'Se ha registrado la información exitosamente',
                type: 'success',
            })
            // .then((result) => {
            //     if (result.value) {
            //         //Se llama a la función para limpiar el formulario
            //         window.location.href = 'iniciar-sesion.html';
            limpiarFormulario();
            //     }
            // });
        }
        else {
            Swal.fire({ //formato json
                title: 'No se ha registrado la información',
                type: 'warning',
                text: 'Revisá los campos resaltados e intentalo de nuevo'
            })
        }
    }
};

//Función para limpiar el formulario
const limpiarFormulario = () => {

    input_nombre.value = '';
    input_snombre.value = '';
    input_genero.value = '';
    input_correo.value = '';
    input_id.value = '';
    input_primer_apellido.value = '';
    input_segundo_apellido.value = '';
    input_fecha.value = '';
    input_provincia.value = '';
    input_canton.value = '';
    input_distrito.value = '';
    input_direccion_exacta.value = '';
};

btn_crear_cuenta.addEventListener('click', llamar);