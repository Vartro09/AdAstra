'use strict';

const tbody = document.querySelector('#tabla-filtrado tbody');
let lista_usuarios = [];
let txt_filtro = document.querySelector('#txt-filtro');

let mostrar_tabla = async () => {

    lista_usuarios = await obtenerUsuarios();
    tbody.innerHTML = '';


    for (let i = 0; i < lista_usuarios.length; i++) {
        let tipo = lista_usuarios[i]['tipo_usuario'];
        if (tipo === 'cliente') {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = lista_usuarios[i]['tipo_usuario'];
            fila.insertCell().innerHTML = lista_usuarios[i]['nombre'];
            fila.insertCell().innerHTML = lista_usuarios[i]['primer_apellido'];
            fila.insertCell().innerHTML = lista_usuarios[i]['correo'];
            fila.insertCell().innerHTML = lista_usuarios[i]['provincia'];
            //////////////////////////////////////////////////////////////////////////////////////
            let celdaPadre = fila.insertCell();
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
                        eliminarUsuario(lista_usuarios[i]._id);
                        Swal.fire(
                            'Usuario eliminado!'
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
            celdaIconoEliminar.appendChild(aIconoEliminar);
            //Agrega hijos al elemento padre principal
            celdaPadre.appendChild(celdaIconoEliminar)
        }
    }
};


let filtrar_tabla = async () => {

    let filtro = txt_filtro.value.toLowerCase();
    tbody.innerHTML = '';


    for (let i = 0; i < lista_usuarios.length; i++) {
        if (lista_usuarios[i]['tipo_usuario'].toLowerCase().includes(filtro) || lista_usuarios[i]['nombre'].toLowerCase().includes(filtro) || lista_usuarios[i]['primer_apellido'].toLowerCase().includes(filtro) || lista_usuarios[i]['correo'].toLowerCase().includes(filtro) || lista_usuarios[i]['provincia'].toLowerCase().includes(filtro)) {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = lista_usuarios[i]['tipo_usuario'];
            fila.insertCell().innerHTML = lista_usuarios[i]['nombre'];
            fila.insertCell().innerHTML = lista_usuarios[i]['primer_apellido'];
            fila.insertCell().innerHTML = lista_usuarios[i]['correo'];
            fila.insertCell().innerHTML = lista_usuarios[i]['provincia'];
            //////////////////////////////////////////////////////////////////////////////////////
            let celdaPadre = fila.insertCell();
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
                        eliminarUsuario(lista_usuarios[i]._id);
                        Swal.fire(
                            'Usuario eliminado!'
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
            celdaIconoEliminar.appendChild(aIconoEliminar);
            //Agrega hijos al elemento padre principal
            celdaPadre.appendChild(celdaIconoEliminar)
        }

    }

};


mostrar_tabla();

txt_filtro.addEventListener('keyup', filtrar_tabla);
