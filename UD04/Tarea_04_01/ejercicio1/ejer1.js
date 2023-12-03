window.onload = principal;
var matrizCreada = false;

function principal() {
    document.getElementById("enviar").onclick = crearMatriz;
}

function crearMatriz() {
    let dimensiones = parseInt(document.getElementById('dimensiones').value);
    let primeraDimension = parseInt(document.getElementById('primeraDimension').value);
    let segundaDimension = parseInt(document.getElementById('segundaDimension').value);
    let terceraDimension = parseInt(document.getElementById('terceraDimension').value);

    if (isNaN(dimensiones) || dimensiones < 1 || dimensiones > 3 ||
        isNaN(primeraDimension) || primeraDimension < 1 ||
        (dimensiones >= 2 && (isNaN(segundaDimension) || segundaDimension < 1)) ||
        (dimensiones === 3 && (isNaN(terceraDimension) || terceraDimension < 1))) {
        alert('Valores incorrectos');
    } else {
        matrizCreada = generarMatriz(dimensiones, primeraDimension, segundaDimension, terceraDimension);
        console.log('Matriz creada:', matrizCreada);
    }
}

function generarMatriz(dimensiones, x, y, z) {
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

