'use strict';
let lista_recintos = [];

let agregar_recintos = async () => {
    let select = document.querySelector(".opt-recintos");
    let lista_recintos = await obtenerRecintos();

    for (let i = 0; i < lista_recintos.length; i++) {
        let option = new Option(lista_recintos[i]['nombre']);
        select.add(option);
    }
};

agregar_recintos();