"use strict";

//Constante para el numero maximo de elementos de la lista
const ELEMENTOS_MAXIMOS = 10;

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

//Añade un nuevo elemento a la lista manteniendo la relación de orden. Devuelve el tamaño de la lista una vez añadido.
function add(list,elem) {
    elem = parseInt(elem);
    var longitud = size(list);
    var i = 0;
    var colocado = false;
 	if (isNaN(elem)) {
        throw "El elemento no es un numero";
 	}
 	if (!isFull(list)){
        while ((i < longitud) || !(colocado)){
            //Para añadir el primero si la lista es vacia, por que contiene NaN
            if (isNaN(list[i])) {
                list[i] = elem;
                colocado = true;
            }
            if (elem < list[i] ) {
                for (let j = i, aux = 0; j < longitud; j++){
                    aux = list[j]; 
                    list[j] = elem;
                    elem = aux;
                }
                list[longitud] = elem;
                colocado = true;  
            }//Fin del if
            i++;
        }//Fin del while
         
 	} else {
 		throw "La lista está llena. No puedes añadir mas elementos";
 	}
 	return longitud;
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

//Devuelve la posición del elemento indicado. Si el elemento no está en la lista devuelve -1.
function indexOf(list,elem){
    var posicion = -1;
    elem = parseInt(elem);
    if (!isNaN(elem)) {
        var longitud = size(list);	
        var i = 0;
        while (i < longitud && posicion === -1){
            if (list[i] === elem) {
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
    elem = parseInt(elem);
    if (!isNaN(elem)) {
        var fin = 0;	
        var i = size(list);
        while (i > fin && posicion === -1){
            if (list[i] === elem) {
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

//Elimina el elemento de la posición indicada. Devuelve el elemento borrado.
function remove(list,index){
    var borrado = list[index];
    var longitud = size(list);
    if (index >= longitud) {
        throw "El indice no debe ser mayor que la longitud de la lista ("+longitud+")";
    } 
 	if (!isEmpty(list)){
        for (var i = index, aux = 0; i < longitud-1; i++){
            aux = list[i+1];
            list[i] = aux;
        }
        list[i] = Number.NaN;
 	} else {
 		throw "La lista está vacia. No puedes eliminar elementos";
 	}
 	return borrado;
}

//Elimina el elemento indicado de la lista.Devuelve true si se ha podido borrar el elemento, false en caso contrario.
function removeElement(list,elem){
    var eliminado = false;
    elem = parseInt(elem);
    var encontrado = indexOf(list,elem);
    if (!isNaN(elem)) {
        //Si esta el numero lo elimina
        if (encontrado != -1) {
            remove(list,encontrado);
            eliminado = true;
        }
    }else{
        throw "El elemento no es un numero";
    }
 	return eliminado;
}


/* FUNCIONES QUE USA LA PAGINA Y LA CONSOLA */ 

//Llamamos a la funcion create para rellenar la lista con NaN
var listaOrdenada = create();

//Añade el numero a la lista y lo muestra en la pagina
function rellenar(num){
   var error = document.getElementById ("error");
   var lista = document.getElementById ("lista");
   error.innerHTML = "";  
    try {
        add(listaOrdenada,num);
        lista.innerHTML = toString(listaOrdenada);
    } catch (err) {
        error.innerHTML = err;
    }	
}

//Elimina el numero a la lista en la posicion introducida
function eliminarEnPosicion(posicion){
    var error = document.getElementById ("error");
    var lista = document.getElementById ("lista");
    error.innerHTML = "";  
    if (posicion != "") {
        try {
            //Se parsean la posicion a interger
            remove(listaOrdenada,parseInt(posicion));
            lista.innerHTML = toString(listaOrdenada);
        } catch (err) {
            error.innerHTML = err;
        }  
    }else{
        error.innerHTML = "No has seleccionado posicion";
    }//Fin del if	
}

//Elimina el numero introducido en el input
function eliminar(numero){
    var error = document.getElementById ("error");
    var lista = document.getElementById ("lista");
    error.innerHTML = "";  
    try {
        if (removeElement(listaOrdenada,numero) === false) {
            error.innerHTML = "No se ha eliminado por que no se ha encontrado el numero en la lista";
        }else{
            lista.innerHTML = toString(listaOrdenada);
        } 
        
    } catch (err) {
        error.innerHTML = err;
    }	
 }

//Funcion que prueba las funciones mostrando los resultados por consola
function testFunciones() {
    var lista = [1,2,4,44,55,78,95]; 	

    console.log("Lista: " + lista);
 	console.log("¿Esta vacía?: " + isEmpty(lista));
    console.log("Longitud: " + size(lista));
    console.log("¿Esta llena?: " + isFull(lista));
    console.log("Capacidad total: "+ capacity(lista));
    console.log("Añadimos el numero 73: " + add(lista,73));
    console.log("Lista: " + lista);
    console.log("Elemento de la posicion 4: "+ get(lista,4));
    console.log("La lista formateada: " + toString(lista));	
    console.log("Busca el elemento 55 en la lista. Posicion: " + indexOf(lista,55));
    console.log("Busca el elemento 99 en la lista. Posicion: " + lastIndexOf(lista,99));
    console.log("Capacidad maxima de la lista: "+ capacity(lista));
    console.log("Primer elemento de la lista: " + firstElement(lista));
    console.log("Ultimo elemento de la lista: " + lastElement(lista));
    console.log("Se elimina el elemento de la posicion 2: "+ remove(lista,2));
    console.log("Lista: " + lista);
    console.log("Se elimina el 24 de la lista. ¿Se ha borrado? " + removeElement(lista,24));
    console.log("Se elimina el 44 de la lista. ¿Se ha borrado? " + removeElement(lista,44));
    console.log("Lista: " + lista);
    console.log("Se vacia la lista: "); 
    clear(lista);
    console.log("Lista: " + lista);

}

window.onload = testFunciones;