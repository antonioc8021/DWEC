window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick =
        manejadorClick;
}

function manejadorClick() {
    let numero = parseInt(document.getElementById("entrada").value);
    document.getElementById("salida").innerHTML = esPrimo(numero);
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
    if (resultado) {
        return "Su número es primo";
    } else {
        return "Su número no es primo";
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
