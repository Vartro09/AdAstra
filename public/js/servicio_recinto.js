'use strict';

let registrar_recinto = (pimagen, pnombre, pencargado, ptelefono, phora_apertura, phora_cierre, pcapacidad, pestado, pubicacion, pprovincia, pcanton, pdistrito) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar_recinto',
        responseType: 'json',
        data: {
            imagen: pimagen,
            nombre: pnombre,
            encargado: pencargado,
            telefono: ptelefono,
            hora_apertura: phora_apertura,
            hora_cierre: phora_cierre,
            capacidad: pcapacidad,
            estado: pestado,
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


let obtenerRecintoid = async (_id) => {
    try {
        // fetch data from an url endpoint
        const response = await axios({
            method: 'get',
            url: `http://localhost:4000/api/buscar_recinto/${_id}`,
            responseType: 'json'
        });

        return response.data.recinto;
    } catch (error) {
        console.log(error);
    }
};

let modificarRecinto = (p_id, pimagen, pnombre, pencargado, ptelefono, phora_apertura, phora_cierre, pcapacidad, pestado, pubicacion, pprovincia, pcanton, pdistrito) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/modificar_recinto',
        responseType: 'json',
        data: {
            _id: p_id,
            imagen: pimagen,
            nombre: pnombre,
            encargado: pencargado,
            telefono: ptelefono,
            hora_apertura: phora_apertura,
            hora_cierre: phora_cierre,
            capacidad: pcapacidad,
            estado: pestado,
            ubicacion: pubicacion,
            provincia: pprovincia,
            canton: pcanton,
            distrito: pdistrito
        }
    });
};

let eliminarRecinto = (pid) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/eliminar_recinto',
        responseType: 'json',
        data: {
            _id: pid
        }
    });
};
