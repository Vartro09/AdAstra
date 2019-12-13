'use strict';

let registrar_evento = (pimagen, pnombre, pmax_entradas, pprecio, precinto, pfecha_inicio, pfecha_finalizacion, ptipo_evento, pencargado, pubicacion, pprovincia, pcanton, pdistrito) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar_evento',
        responseType: 'json',
        data: {
            imagen: pimagen,
            nombre: pnombre,
            max_entradas: pmax_entradas,
            precio: pprecio,
            recinto: precinto,
            fecha_inicio: pfecha_inicio,
            fecha_finalizacion: pfecha_finalizacion,
            tipo_evento: ptipo_evento,
            encargado: pencargado,
            ubicacion: pubicacion,
            provincia: pprovincia,
            canton: pcanton,
            distrito: pdistrito
        }
    });
};

let obtenerRecintos = async () => {
    try {
        // fetch data from a url endpoint
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar_recintos',
            responseType: 'json'
        });

        const result = await response;

        return result.data.lista_recintos;
    } catch (error) {
        alert(error);
    }
};

let obtenerEventos = async () => {
    try {
        // fetch data from a url endpoint
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar_eventos',
            responseType: 'json'
        });

        const result = await response;

        return result.data.lista_eventos;
    } catch (error) {
        alert(error);
    }
};

let obtenerEventoid = async (_id) => {
    try {
        // fetch data from an url endpoint
        const response = await axios({
            method: 'get',
            url: `http://localhost:4000/api/buscar_evento/${_id}`,
            responseType: 'json'
        });

        return response.data.evento;
    } catch (error) {
        console.log(error);
    }
};

let modificarEvento = (p_id, pimagen, pnombre, pmax_entradas, pprecio, precinto, pfecha_inicio, pfecha_finalizacion, ptipo_evento, pencargado, pubicacion, pprovincia, pcanton, pdistrito) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/modificar_evento',
        responseType: 'json',
        data: {
            _id: p_id,
            imagen: pimagen,
            nombre: pnombre,
            max_entradas: pmax_entradas,
            precio: pprecio,
            recinto: precinto,
            fecha_inicio: pfecha_inicio,
            fecha_finalizacion: pfecha_finalizacion,
            tipo_evento: ptipo_evento,
            encargado: pencargado,
            ubicacion: pubicacion,
            provincia: pprovincia,
            canton: pcanton,
            distrito: pdistrito
        }
    });
};

let eliminarEvento = (pid) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/eliminar_evento',
        responseType: 'json',
        data: {
            _id: pid
        }
    });
};