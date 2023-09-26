window.onload = principal;

function principal() {
    document.getElementById("btnSuma").onclick = btnSuma;
    document.getElementById("btnRestar").onclick = btnRestar;
    document.getElementById("btnMultiplicar").onclick = btnMultiplicar;
    document.getElementById("btnDividir").onclick = btnDividir;
    document.getElementById("btnFactorial").onclick = btnFactorial;
    document.getElementById("btnSumatorio").onclick = btnSuma;
}

let salida = 0;

function btnSuma() {
    let entrada1 = document.getElementById("entrada1").value;
    let entrada2 = document.getElementById("entrada2").value;
    salida = sumar(parseInt(entrada1), parseInt(entrada2));
    document.getElementById("salida").innerHTML = salida;
}

function btnRestar() {
    let entrada1 = document.getElementById("entrada1").value;
    let entrada2 = document.getElementById("entrada2").value;
    salida = restar(parseInt(entrada1), parseInt(entrada2));
    document.getElementById("salida").innerHTML = salida;

}

function btnMultiplicar() {
    let entrada1 = document.getElementById("entrada1").value;
    let entrada2 = document.getElementById("entrada2").value;
    salida = multiplicar(parseInt(entrada1), parseInt(entrada2));
    document.getElementById("salida").innerHTML = salida;

}

function btnDividir() {
    let entrada1 = document.getElementById("entrada1").value;
    let entrada2 = document.getElementById("entrada2").value;
    salida = dividir(parseInt(entrada1), parseInt(entrada2));
    document.getElementById("salida").innerHTML = salida;

}

function btnFactorial() {

    let entrada1 = document.getElementById("entrada1").value;
    salida = factorial(parseInt(entrada1));
    document.getElementById("salida").innerHTML = `Solo se realiza el factorial del primer número: ${salida}`;
}

function btnSumatorio() {
    let entrada1 = document.getElementById("entrada1").value;
    salida = sumatorio(parseInt(entrada1));
    document.getElementById("salida").innerHTML = `Solo se realiza el sumatorio del primer número: ${salida}`;

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
    let res = 0;
    if (numero === 0) {
        res = 1;
    }
    else {
        res = 1;
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