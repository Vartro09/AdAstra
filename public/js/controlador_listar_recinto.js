'use strict';

const tbody = document.querySelector('#tabla-filtrado tbody');
let lista_recintos = [];
let txt_filtro = document.querySelector('#txt-filtro');

let mostrar_tabla = async () => {

    lista_recintos = await obtenerRecintos();
    tbody.innerHTML = '';


    for (let i = 0; i < lista_recintos.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_recintos[i]['nombre'];
        fila.insertCell().innerHTML = lista_recintos[i]['encargado'];
        fila.insertCell().innerHTML = lista_recintos[i]['provincia'];
        fila.insertCell().innerHTML = lista_recintos[i]['telefono'];
        //////////////////////////////////////////////////////////////////////////////////////
        let celdaPadre = fila.insertCell();
        //Se crea la celda para editar
        let celdaIconoEditar = fila.insertCell();
        //Se crean los elementos
        let aIconoEditar = document.createElement('a');
        let iIconEditar = document.createElement('i');
        //Se establece la clase del icono
        iIconEditar.className = 'bx bxs-edit';
        //Agrega un hijo a un elemento padre
        aIconoEditar.appendChild(iIconEditar);
        //función para editar el campo deseado
        iIconEditar.addEventListener('click', function () {
            window.location.href = `modificar_recinto.html?_id=${lista_recintos[i]['_id']}`;
        });
        //////////////////////////////////////////////////////////////////////////////////////
        //Se crea la celda para eliminar
        let celdaIconoEliminar = fila.insertCell();
        //Se crean los elementos
        let aIconoEliminar = document.createElement('a');
        let iIconEliminar = document.createElement('i');
        //Se establece la clase del icono
        iIconEliminar.className = 'bx bxs-trash-alt';
        //Agrega un hijo a un elemento padre
        aIconoEliminar.appendChild(iIconEliminar);
        //función para eliminar el campo deseado
        iIconEliminar.addEventListener('click', function () {
            Swal.fire({
                title: '¿Está seguro de eliminar el campo?',
                text: "Ésta acción no se puede revertir",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, estoy seguro'
            }).then((result) => {
                if (result.value) {
                    eliminarRecinto(lista_recintos[i]._id);
                    Swal.fire(
                        'Recinto eliminado!'
                    ).then((result) => {
                        if (result.value) {
                            window.location.reload();
                        }
                    });
                }
            })
        });
        //////////////////////////////////////////////////////////////////////////////////////
        //Agrega un hijo al elemento padre
        celdaIconoEditar.appendChild(aIconoEditar);
        celdaIconoEliminar.appendChild(aIconoEliminar);
        //Agrega hijos al elemento padre principal
        celdaPadre.appendChild(celdaIconoEditar)
        celdaPadre.appendChild(celdaIconoEliminar)
    }
};


let filtrar_tabla = async () => {

    let filtro = txt_filtro.value.toLowerCase();
    tbody.innerHTML = '';


    for (let i = 0; i < lista_recintos.length; i++) {
        if (lista_recintos[i]['nombre'].toLowerCase().includes(filtro) || lista_recintos[i]['encargado'].toLowerCase().includes(filtro) || lista_recintos[i]['provincia'].toLowerCase().includes(filtro) || lista_recintos[i]['telefono'].toLowerCase().includes(filtro)) {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = lista_recintos[i]['nombre'];
            fila.insertCell().innerHTML = lista_recintos[i]['encargado'];
            fila.insertCell().innerHTML = lista_recintos[i]['provincia'];
            fila.insertCell().innerHTML = lista_recintos[i]['telefono'];
            //////////////////////////////////////////////////////////////////////////////////////
            let celdaPadre = fila.insertCell();
            //Se crea la celda para editar
            let celdaIconoEditar = fila.insertCell();
            //Se crean los elementos
            let aIconoEditar = document.createElement('a');
            let iIconEditar = document.createElement('i');
            //Se establece la clase del icono
            iIconEditar.className = 'bx bxs-edit';
            //Agrega un hijo a un elemento padre
            aIconoEditar.appendChild(iIconEditar);
            //función para editar el campo deseado
            iIconEditar.addEventListener('click', function () {
                window.location.href = `modificar_recinto.html?_id=${lista_recintos[i]['_id']}`;
            });
            //////////////////////////////////////////////////////////////////////////////////////
            //Se crea la celda para eliminar
            let celdaIconoEliminar = fila.insertCell();
            //Se crean los elementos
            let aIconoEliminar = document.createElement('a');
            let iIconEliminar = document.createElement('i');
            //Se establece la clase del icono
            iIconEliminar.className = 'bx bxs-trash-alt';
            //Agrega un hijo a un elemento padre
            aIconoEliminar.appendChild(iIconEliminar);
            //función para eliminar el campo deseado
            iIconEliminar.addEventListener('click', function () {
                Swal.fire({
                    title: '¿Está seguro de eliminar el campo?',
                    text: "Ésta acción no se puede revertir",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Sí, estoy seguro'
                }).then((result) => {
                    if (result.value) {
                        eliminarRecinto(lista_recintos[i]._id);
                        Swal.fire(
                            'Recinto eliminado!'
                        ).then((result) => {
                            if (result.value) {
                                window.location.reload();
                            }
                        });
                    }
                })
            });
            //////////////////////////////////////////////////////////////////////////////////////
            //Agrega un hijo al elemento padre
            celdaIconoEditar.appendChild(aIconoEditar);
            celdaIconoEliminar.appendChild(aIconoEliminar);
            //Agrega hijos al elemento padre principal
            celdaPadre.appendChild(celdaIconoEditar)
            celdaPadre.appendChild(celdaIconoEliminar)
        }
    }

};


mostrar_tabla();

txt_filtro.addEventListener('keyup', filtrar_tabla);
