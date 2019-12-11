'use strict';

function registrar_administrador(pimagen, pcorreo, pcontrasena) {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_administrador",
        method: "POST",
        data: {
            imagen: pimagen,
            correo: pcorreo,
            contrasena: pcontrasena
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function (res) {
        swal.fire({
            type: 'success',
            title: 'Proceso realizado.',
            text: res.msg
        });
    });

    request.done(function (res) {
        swal.fire({
            type: 'error',
            title: 'Proceso no realizado.',
            text: res.msg
        });
    });
};