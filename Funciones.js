window.onload = principal;
function principal() {
    document.getElementById("miBoton").onclick =
        manejadorClick;
}
function manejadorClick() {
    document.getElementById("salida").innerHTML =
        "Has escrito: " +
        document.getElementById("entrada").value;
}

function manejadorImprimir() {
    // todo: esto se debe de meter algo de código puedo copiarlo del ejer de hoy de clase;
}

function esNumero(numero) {
    let res = false;
    if (!isNaN(numero)) {
        res = true;
    }
    return res;
}

function esEntero(numero) {
    return Number.isInteger(numero);
}

function esPositivo(numero) {
    return numero > 0;
}

function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function restar(numero1, numero2) {
    return numero1 - numero2;
}

function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

function dividir(numero1, numero2) {
    return numero1 / numero2;
}

function factorial(numero) {
    if (numero === 0) {
        let res = 1;
    }
    else {
        let res = 1;
        for (let i = numero; i > 0; i--) {
            res *= i;
        }
    }
    return res;
}

function sumatorio(numero) {
    let res = 0;
    if (numero === 0) {
        res = 0;
    }
    else {
        let res = 0;
        for (let i = 1; i <= numero; i++) {
            res += i;
        }
        return res;
    }
}

function enRango(numero, minimo, maximo) {
    return (numero >= minimo && numero <= maximo);
}

function esDivisible(dividendo, divisor) {
    return (dividendo % divisor === 0);
}

function esPrimo(numero) {
    let resultado = true;
    if (numero - parseInt(numero) !== 0) {
        resultado = false;
    }
    for (let i = 2; (i < numero) && resultado; i++) {
        if (numero % i === 0) {
            resultado = false;
        }
    }
    return resultado;
}

function crearMatriz2D(x, y) {
    let matrizBase = [];
    for (let i = 0; i < x; i++) {
        matrizBase.push([]);
        for (let j = 0; j < y; j++) {
            matrizBase[i].push(i + "-" + j);
        }
    }
    return matrizBase;
}