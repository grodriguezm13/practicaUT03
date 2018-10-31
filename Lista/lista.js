"use strict";

//Constante para el numero maximo de elementos de la lista
var ELEMENTOS_MAXIMOS = 10;

//Crea una lista con el array ya instanciado con el número de elementos máximos.
function create(){
    var list = [];
    for (let i = 0; i < ELEMENTOS_MAXIMOS; i++) {
        list[i] = Number.isNaN;
    }
    return list;
}

//Devuelve true o false en función de si la lista está vacía.
function isEmpty(list) {
    var vacio = false;
    if (isNan(list[0])) {
        vacio = true;
    }
    return vacio;
}

//Devuelve true o false en función de si la lista está llena.
function isFull(list) {
    var lleno = true;
    var i = 0;
    //Comprueba que todos los indices de la lista tengan datos
    while (i < ELEMENTOS_MAXIMOS && lleno) {
        //Si algun elemento de la lista es NaN sale del bucle
        if (isNan(list[i])) {
            lleno = false;
        }
        i++;
    }
    return lleno;
}

//Devuelve el número de elementos de la lista.
function size(list){
    var contador = 0;
 	while (contador < ELEMENTOS_MAXIMOS && !isNaN(list[contador])){
 		contador++;
 	}
 	return contador;
}

//Añade un nuevo elemento al final de la lista. Devuelve el tamaño de la lista una vez añadido.
function add(list,elem) {
    
}

//Añade un nuevo elemento en la posición especificada en la lista. Devuelve el tamaño de la lista una vez añadido.
function addAt(list,elem,index) {
    
}

//Devuelve el elemento de la lista de la posición indicada.
function get(list,index) {
    
}

//Funcion que prueba las funciones mostrando los resultados por consolo
function testFunciones() {
    var lista=[1,5,7,98,55,74,26,33,95,74]; 	

 	console.log("¿Esta vacía?: " + isEmpty(lista));
    console.log("Longitud: " + size(lista));
    console.log("¿Esta llena?: " + isFull(lista));

}

window.onload = testFunciones;