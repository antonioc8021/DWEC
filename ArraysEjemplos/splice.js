let personas = ["Ana", "Eva", "Luis", "Pepe", "Juan", "Pepe", "Juan"];

function desplazarElementos(coleccion, inicio, longitud) {
    let aux = coleccion.splice(inicio, longitud);
    return coleccion.concat(aux);
}

for (let i = 0; i < personas.length; i++) {
    console.log(personas[i]);
}
console.log(desplazarElementos(personas, 3, 4));