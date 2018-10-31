"use strict";

//Constante para el numero maximo de elementos de la lista
var ELEMENTOS_MAXIMOS = 10;

//Crea una lista con el array ya instanciado con el número de elementos máximos.
function create(){
    var list = [];
    for (let i = 0; i < ELEMENTOS_MAXIMOS; i++) {
        list[i] = " ";
    }
    return list;
}

//Devuelve true o false en función de si la lista está vacía.
function isEmpty(list) {
    var vacio = false;
    if (isNaN(list[0])) {
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
        if (isNaN(list[i])) {
            lleno = false;
        }
        i++;
    }
    return lleno;
}

//Devuelve el número de elementos de la lista.
function size(list){
    var contador = 0;
 	while (contador < ELEMENTOS_MAXIMOS  && !isNaN(list[contador])){
 		contador++;
 	}
 	return contador;
}

//Añade un nuevo elemento al final de la lista. Devuelve el tamaño de la lista una vez añadido.
function add(list,elem) {
    elem = parseInt(elem);
 	if (isNaN(elem)) {
 		throw "The element is not a number";
 	}
 	if (!isFull(list)){
 		list[size(list)] = elem;
 	} else {
 		throw "The stack is Full. You can't put the element in it";
 	}
 	return size(list);
}

//Añade un nuevo elemento en la posición especificada en la lista. Devuelve el tamaño de la lista una vez añadido.
function addAt(list,elem,index) {
    elem = parseInt(elem);
    var aux = 0;
    var longitud = size(list);
 	if (isNaN(elem)) {
 		throw "El elemento que quieres introducir no es un numero";
    }
    if (index > longitud) {
        throw "El indice no debe ser mayor que la longitud de la lista ("+longitud+")";
    } 
 	if (!isFull(list)){
        for (let i = index; i < longitud; i++){
            aux = list[i]; 
            list[i] = elem;
            elem = aux;
         }
         list[longitud] = elem;
 	} else {
 		throw "La lista está llena. No se pueden añadir mas elementos";
 	}
 	return size(list);  
}

//Devuelve el elemento de la lista de la posición indicada.
function get(list,index) {
    
}
//Funcion que prueba las funciones mostrando los resultados por consolo
function testFunciones() {
    var lista = [1,7,98,55,8,33,95]; 	

    console.log("Lista: " + lista);
 	console.log("¿Esta vacía?: " + isEmpty(lista));
    console.log("Longitud: " + size(lista));
    console.log("¿Esta llena?: " + isFull(lista));
    console.log("Añadimos el numero 73 al final: " + add(lista,73));
    console.log("Lista: " + lista);
    console.log("Añadimos el numero 0 en la posicion 3: " + addAt(lista,0,3));
    console.log("Lista: " + lista);
}

window.onload = testFunciones;