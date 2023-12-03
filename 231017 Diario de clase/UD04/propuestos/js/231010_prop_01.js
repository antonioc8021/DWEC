/*
    Escribe una función que indicando un array, el índice de la primer posición y el 
    número de elementos a desplazar, devuelva un array con los mismos elementos 
    originales, pero los indicados mediante índice de inicio y número de ellos 
    ubicados al final.
*/

var pruebas = ["cero","uno","dos","tres","cuatro","cInco","seis","siete","ocho","nueve","diez"];

var pruebas2 = ["cero","uno","dos","tres","cuatro","cinco"];

function desplazarElementos(coleccion,inicio,longitud)
{
    let aux = coleccion.splice(inicio,longitud);
    return coleccion.concat(aux);
}

/*
    Escribe una función que indicando un array, el índice de la primer posición, 
    el número de elementos a desplazar y la posición en la que colocarlos, devuelva 
    un array con los mismos elementos originales, pero los indicados mediante 
    índice de inicio y número de ellos ubicados en la posición indicada.
*/

function desplazarElementos2(coleccion,inicio,longitud,posicion)
{
    let aux = coleccion.splice(inicio,longitud);
    // console.error("aux: " + aux);
    // console.error("coleccion: " + coleccion);
    let final = coleccion.splice(posicion-longitud,coleccion.length);
    // console.warn("coleccion: " + coleccion);
    // console.log("final: " + final);
    coleccion = coleccion.concat(aux).concat(final);
    return coleccion;
}