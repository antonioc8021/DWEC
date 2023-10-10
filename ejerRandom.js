let personas = ["Ana", "Eva", "Luis", "Pepe", "Juan", "Pepe", "Juan"];

function desplazarElementos(coleccion, inicio, longitud) {
    let aux = coleccion.splice(inicio, longitud);
    return coleccion.concat(aux);
}
