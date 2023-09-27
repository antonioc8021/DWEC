window.onload = principal;

function principal() {
    document.getElementById("btnSuma").onclick = btnSuma;
    document.getElementById("btnRestar").onclick = btnRestar;
    document.getElementById("btnMultiplicar").onclick = btnMultiplicar;
    document.getElementById("btnDividir").onclick = btnDividir;
    document.getElementById("btnFactorial").onclick = btnFactorial;
    document.getElementById("btnSumatorio").onclick = btnSumatorio;
}

let salida = 0;


function btnSuma() {
    let entrada1 = document.getElementById("entrada1").value;
    let entrada2 = document.getElementById("entrada2").value;
    if (esNumero(entrada1) && esNumero(entrada2)) {
        salida = sumar(parseInt(entrada1), parseInt(entrada2));
        document.getElementById("salida").innerHTML = salida;
    } else {
        console.error("Number expected");
        alert("Los dos datos introducidos deben de ser números");
    }

}

function btnRestar() {
    let entrada1 = document.getElementById("entrada1").value;
    let entrada2 = document.getElementById("entrada2").value;
    if (esNumero(entrada1) && esNumero(entrada2)) {
        salida = restar(parseInt(entrada1), parseInt(entrada2));
        document.getElementById("salida").innerHTML = salida;
    } else {
        console.error("Number expected");
        alert("Los dos datos introducidos deben de ser números");
    }
}

function btnMultiplicar() {
    let entrada1 = document.getElementById("entrada1").value;
    let entrada2 = document.getElementById("entrada2").value;
    if (esNumero(entrada1) && esNumero(entrada2)) {
        salida = multiplicar(parseInt(entrada1), parseInt(entrada2));
        document.getElementById("salida").innerHTML = salida;
    } else {
        console.error("Number expected");
        alert("Los dos datos introducidos deben de ser números");
    }

}

function btnDividir() {
    let entrada1 = document.getElementById("entrada1").value;
    let entrada2 = document.getElementById("entrada2").value;
    if (esNumero(entrada1) && esNumero(entrada2)) {
        salida = dividir(parseInt(entrada1), parseInt(entrada2));
        document.getElementById("salida").innerHTML = salida;
    } else {
        console.error("Number expected");
        alert("Los dos datos introducidos deben de ser números");
    }

}

function btnFactorial() {

    let entrada1 = document.getElementById("entrada1").value;
    if (esNumero(entrada1) && esEntero(entrada1) && esPositivo(entrada1)) {
        salida = factorial(parseInt(entrada1));
        document.getElementById("salida").innerHTML = `Solo se realiza el factorial del primer número: ${salida}`;
    } else {
        console.error("Whole positive number expected");
        alert("El dato introducido debe de ser un número entero positivo");
    }
}

function btnSumatorio() {
    let entrada1 = document.getElementById("entrada1").value;
    if (esNumero(entrada1) && esEntero(entrada1) && esPositivo(entrada1)) {
        salida = sumatorio(parseInt(entrada1));
        document.getElementById("salida").innerHTML = `Solo se realiza el sumatorio del primer número: ${salida}`;
    } else {
        console.error("Whole positive number expected");
        alert("Los dos datos introducidos deben de ser números");
    }
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
