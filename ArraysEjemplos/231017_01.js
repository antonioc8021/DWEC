// ejercicios propuestos por la diapositiva 24

let arrayNumeros = [24, 18, 3.4, 187, 1, 434, 2, 934, 500, 650, 7, 2, 140, 33];
let arrayAlumnos = [["Ana", "Alonso"], ["Bea", "Pérez"], ["Antonio", "Sierra"], ["Jose", "Fuentes"]];

function ordenarNumerosMenorAMayor(a, b) {
    return a - b;
}

function ordenarAleatorio(a, b) {
    return Math.round(Math.random() * (1 + 2) + -1);
}

function ordenarPorNombre(a, b) {
    // para comparar y ordenar por nombre tendré que trbajar con el primer elemento de a y b, es decir a[0] y b[0]
    return a[0].localCompare(b[0]);
}


console.log("Ordena de forma aleatoria: " + arrayNumeros.sort(ordenarAleatorio));
// console.log("Ordena de menor a mayor: " + arrayNumeros.sort(ordenarNumerosMenorAMayor));
// console.log("Ordenar los nombre de manera alfabética: " + arrayAlumnos.sort(ordenarPorNombre));
