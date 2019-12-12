'use strict';

const nombreImpuesto = document.querySelector('#txt_Imp_Ventas');
const porcentajeImpuesto = document.querySelector('#nmb_Imp');
let btnRegistrarImpuesto = document.querySelector('#btnRegistrarImpuesto');

function almacenar_Datos(){
	let nombreImp = nombreImpuesto.value;
	let porcentaje = Number(porcentajeImpuesto.value);

	registrarImpuesto(nombreImp,porcentaje);


};

btnRegistrarImpuesto.addEventListener('click', almacenar_Datos);
