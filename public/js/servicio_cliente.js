'use strict';

let registrarCliente = (pavatar, pnombre, psnombre, pgenero, pcorreo, pcontrasena, pid, pprimer_apellido, psegundo_apellido, pfecha, pdireccion_exacta, pprovincia, pcanton, pdistrito, ptipo_usuario) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar_usuario',
        responseType: 'json',
        data: {
            avatar: pavatar,
            nombre: pnombre,
            snombre: psnombre,
            genero: pgenero,
            correo: pcorreo,
            contrasena: pcontrasena,
            id: pid,
            primer_apellido: pprimer_apellido,
            segundo_apellido: psegundo_apellido,
            fecha: pfecha,
            direccion_exacta: pdireccion_exacta,
            provincia: pprovincia,
            canton: pcanton,
            distrito: pdistrito,
            tipo_usuario: ptipo_usuario,
        }
    });
};

let obtenerUsuarios = async () => {
    try {
        // fetch data from a url endpoint
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar_usuarios',
            responseType: 'json'
        });

        const result = await response;

        return result.data.usuarios;
    } catch (error) {
        alert(error);
    }
};


let obtenerUsuarioId = async (_id) => {
    try {
        // fetch data from an url endpoint
        const response = await axios({
            method: 'get',
            url: `http://localhost:4000/api/listar_usuario/${_id}`,
            responseType: 'json'
        });

        return response.data.usuario;
    } catch (error) {
        console.log(error);
    }
};

let eliminarUsuario = (pid) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/eliminar_usuario',
        responseType: 'json',
        data: {
            _id: pid
        }
    });
};