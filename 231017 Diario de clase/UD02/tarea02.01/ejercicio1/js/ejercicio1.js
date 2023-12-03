// Tarea DWEC02.01 - Ejercicio 1

window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick() {
    let textoSalida = "Has introducido un STRING";
    let valorEntrada = document.getElementById("entrada").value;
    if (esNumero(valorEntrada)) {
        textoSalida = "Has introducido un NUMBER ";
        valorEntrada = parseFloat(valorEntrada);
        if (esEntero(valorEntrada)) {
            textoSalida += "entero ";
        }
        else {
            textoSalida += "decimal ";
        }
        if (esPositivo(valorEntrada)) {
            textoSalida += "positivo";
        }
        else {
            textoSalida += "negativo";
        }
    }
    document.getElementById("salida").innerHTML = textoSalida;
}

function esNumero(entrada) {
    let resultado = true;
    if (entrada === "") {
        resultado = false;
    }
    else if (isNaN(entrada)) {
        resultado = false;
    }
    return resultado;
}

function esEntero(numero) {
    return Number.isInteger(numero);
}

function esPositivo(numero) {
    return (numero >= 0);
}