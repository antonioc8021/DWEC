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


}

function esNumero(entrada) {
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
    if (numero === 0) {
        let res = 0;
    }
    else {
        let res = 1;
        for (let i = numero; i > 0; i--) {
            res += + i;
        }
    }
    return res;
}

function enRango(numero, minimo, maximo) {
    return (numero >= minimo && numero <= maximo);
}

function esDivisible(dividendo, divisor) {
    return (dividendo % divisor === 0);
}