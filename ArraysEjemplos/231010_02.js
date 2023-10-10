let pruebas = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"];

function desplazarElementos2(coleccion, inicio, longitud, posicion) {
    let aux = coleccion.splice(inicio, longitud);
    let final = coleccion.splice(posicion, coleccion.length - (longitud + 1));
    console.warn(coleccion);
    console.log(final);
    return coleccion.concat;
}


