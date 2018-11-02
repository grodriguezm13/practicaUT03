"use strict";

//Constante para el numero maximo de elementos de la lista
var ELEMENTOS_MAXIMOS = 10;

//Crea una lista con el array ya instanciado con el número de elementos máximos.
function create(){
    var list = [];
    for (let i = 0; i < ELEMENTOS_MAXIMOS; i++) {
        list[i] = Number.NaN;
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
    var isFull = false;
    if (!isNaN(list[ELEMENTOS_MAXIMOS-1])){
        isFull = true;
    }
    return isFull;
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
    var elemento = parseInt(elem);
 	if (isNaN(elemento)) {
        throw "El elemento no es un numero";
 	}
 	if (!isFull(list)){
 		list[size(list)] = elemento;
 	} else {
 		throw "La lista está llena. No puedes añadir mas elementos";
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
    var elemento = NaN;
    var longitud = size(list);
    //Si el index es menor que la longitud devuelve el elemento 
 	if (index < longitud) {
	 	elemento = list[index];
 	} else{
        throw "El indice no debe ser mayor que la longitud de la lista ("+longitud+")";
 	}
 	return elemento;
}

//Devuelve la posición del elemento indicado. Si el elemento no está en la lista devuelve -1.
function indexOf(list,elem){
    var posicion = -1;
    var elemento = parseInt(elem);
    if (!isNaN(elemento)) {
        var longitud = size(list);	
        var i = 0;
        while (i < longitud && posicion === -1){
            if (list[i] === elemento) {
                posicion = i;
            }
            i++;
        }//Fin del while
    } else{
        throw "El elemento no es un numero";
    }
    return posicion;
}

//Devuelve la posición del elemento indicado comenzando por el final. Si el elemento no está en la lista devuelve -1
function lastIndexOf(list,elem){
    var posicion = -1;
    var elemento = parseInt(elem);
    if (!isNaN(elemento)) {
        var fin = 0;	
        var i = size(list);
        while (i > fin && posicion === -1){
            if (list[i] === elemento) {
                posicion = i;
            }
            i--;
        }//Fin del while
    } else{
        throw "El elemento no es un numero";
    }
    return posicion;
}

//Devuelve el máximo número de elementos que podemos tener en la lista.
function capacity(list){
    return ELEMENTOS_MAXIMOS;
}

//Vacía la lista.
function clear(list){
    if (!isEmpty(list)){
        var longitud = size(list);	
        for (var i = 0; i < longitud; i++){
            list[i] = Number.NaN;
        } 		 		 		
    } 	
} 

//Devuelve el primer elemento de la lista
function firstElement(list){
    var primero;
    if (!isEmpty(list)){
        primero = list[0]; 		
    } else {
        throw "La lista esta vacia";
    }
    return primero;
} 

//Devuelve el ultimo elemento de la lista
function lastElement(list){
    var ultimo;
    if (!isEmpty(list)){
        ultimo = list[size(list)-1]; 		
    } else {
        throw "La lista esta vacia";
    }
    return ultimo;
} 

//Devuelve la cola en formato cadena. El delimitador de elementos será “-“
function toString(list) {
    var cadena = "";
 	if (!isEmpty(list)){
 		var longitud = size(list);	
 		for (var i = 0; i < longitud-1; i++){
 			cadena += list[i] + " - ";
 		} 		 		
 		cadena += list[i]; 		
 	} 	
    return cadena;
}

/* FUNCIONES QUE USA LA PAGINA Y LA CONSOLA */ 

//Llamamos a la funcion create para rellenar la lista con NaN
var listaNumeros = create();

//Añade el numero a la lista y lo muestra en la pagina
function rellenar(num){
   var error = document.getElementById ("error");
   var lista = document.getElementById ("lista");
   error.innerHTML = "";  
    try {
        add(listaNumeros,num);
        lista.innerHTML = toString(listaNumeros);
    } catch (err) {
        error.innerHTML = err;
    }	
}

//Funcion que prueba las funciones mostrando los resultados por consola
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
    console.log("Elemento de la posicion 4: "+ get(lista,4));
    console.log("La lista formateada: " + toString(lista));	
    console.log("Busca el elemento 666 en la lista: " + indexOf(lista,666));
    console.log("Busca el elemento 33 en la lista: " + lastIndexOf(lista,33));
    console.log("Capacidad maxima de la lista: "+ capacity(lista));
    console.log("Primer elemento de la lista: " + firstElement(lista));
    console.log("Ultimo elemento de la lista: " + lastElement(lista));

    console.log("Se vacia la lista: "); 
    clear(lista);
    console.log("Lista: " + lista);

}

window.onload = testFunciones;