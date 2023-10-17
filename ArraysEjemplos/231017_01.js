// ejercicios propuestos por la diapositiva 24

let arrayNumeros = [24, 18, 3.4, 187, 1, 434, 2, 934, 500, 650, 7, 2, 140, 33];

function ordenarAleatorio(a, b) {
    return Math.round(Math.random() * (1 + 2) + -1);
}

console.log(arrayNumeros.sort(ordenarAleatorio));
