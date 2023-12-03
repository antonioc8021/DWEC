window.onload = principal;
var matrizCreada = false;
function principal() {
    document.getElementById("Crear").onclick = crearMatriz;
}

// Función para crear y mostrar la matriz
function crearMatriz() {
    // Obtiene los valores de dimensiones y tamaños desde el formulario
    let dimensiones = parseInt(document.getElementById('dimensiones').value);

    let tamano1 = parseInt(document.getElementById('tamano1').value);
    let tamano2 = parseInt(document.getElementById('tamano2').value);
    let tamano3 = parseInt(document.getElementById('tamano3').value);

    // Llama a la función para generar la matriz

    // Muestra la matriz en la consola o alerta de error si la creación falla
    if (isNaN(dimensiones) || dimensiones < 1 || dimensiones > 3 ||
        isNaN(tamano1) || tamano1 < 1 ||
        (dimensiones >= 2 && (isNaN(tamano2) || tamano2 < 1)) ||
        (dimensiones === 3 && (isNaN(tamano3) || tamano3 < 1))) {
        alert('Asegúrate de introducir correctamente los valores de entrada.');
    } else {
        // Llamar a la función para crear la matriz
        matrizCreada = generarMatriz(dimensiones, tamano1, tamano2, tamano3);
        console.log('Matriz creada:', matrizCreada);
    }
}

// Función para generar la matriz
function generarMatriz(dimensiones, x, y, z) {

    // Verifica la cantidad de dimensiones y asigna valores a las celdas
    if (dimensiones === 1 && x > 0) {
        matriz = new Array(x);
        for (let i = 0; i < x; i++) {
            matriz[i] = i;
        }
    } else if (dimensiones === 2 && x > 0 && y > 0) {
        matriz = new Array(x);
        for (let i = 0; i < x; i++) {
            matriz[i] = new Array(y);
            for (let j = 0; j < y; j++) {
                matriz[i][j] = i + "-" + j;
            }
        }
    } else if (dimensiones === 3 && x > 0 && y > 0 && z > 0) {
        matriz = new Array(x);
        for (let i = 0; i < x; i++) {
            matriz[i] = new Array(y);
            for (let j = 0; j < y; j++) {
                matriz[i][j] = new Array(z);
                for (let k = 0; k < z; k++) {
                    matriz[i][j][k] = i + "-" + j + "-" + k;
                }
            }
        }
    }

    return matriz;
}


// function crearMatriz(d1, d2, d3) {
//     if (d1 <= 0 || !Number.isInteger(d1)) {
//         console.error("La primera dimensión debe ser un entero positivo mayor que 0.");
//         return;
//     }

//     if (d2 && (d2 <= 0 || !Number.isInteger(d2))) {
//         console.error("La segunda dimensión debe ser un entero positivo mayor que 0.");
//         return;
//     }

//     if (d3 && (d3 <= 0 || !Number.isInteger(d3))) {
//         console.error("La tercera dimensión debe ser un entero positivo mayor que 0.");
//         return;
//     }

//     if (d2 && d3) {
//         // Matriz tridimensional
//         const matriz = new Array(d1).fill(null).map(() =>
//             new Array(d2).fill(null).map(() => new Array(d3).fill(null).map((_, z) => [_, z]))
//         );
//         return matriz;
//     } else if (d2) {
//         // Matriz bidimensional
//         const matriz = new Array(d1).fill(null).map(() =>
//             new Array(d2).fill(null).map((_, y) => [_, y])
//         );
//         return matriz;
//     } else {
//         // Matriz unidimensional
//         const matriz = new Array(d1).fill(null).map((_, x) => [x]);
//         return matriz;
//     }
// }

// // Ejemplos de uso:
// console.log(crearMatriz(3));        // Matriz unidimensional de tamaño 3
// console.log(crearMatriz(3, 4));     // Matriz bidimensional de tamaño 3x4
// console.log(crearMatriz(3, 4, 7));  // Matriz tridimensional de tamaño 3x4x7






// let arrayNumeros = [1, 2, 3, 4, 5, 6, 7];


// Math.random() * range + start;


// function generaSegundo() {
//     let numero = Math.random() * (4) + 2;

//     numero = Math.round(numero);

//     return numero
// }

// let numero = generaSegundo();

// // console.log(numero);

// function restarSegundo() {
//     let segundo = generaSegundo();
//     for (let i = segundo; i >= 0; i--) {
//         console.log(i);
//         if (i === 0) {
//             i = generaSegundo();
//         }
//     }
//     return "Vas a tener que esperar: " + segundo + " segundos"
// }

// console.log(restarSegundo());


// setInterval(molestar, 500);
// setTimeout(decirHola, 2000);



// function molestar() {
//     console.warn("Soy un pesado");
// }

// function decirHola() {
//     console.log("Hola!");
// }