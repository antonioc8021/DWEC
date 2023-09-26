window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick =
        manejadorClick;
}

function manejadorClick() {
    var salida;
    let entrada = parseInt(document.getElementById("entrada").value);
    if (esNumero(entrada)) {
        if (esEntero(entrada)) {
            salida = "Lo que has introducido es un número entero";
        } if (esPositivo(entrada)) {
            salida = "Lo que has introducido es un número positivo"
        }
    } else {
        salida = "Lo que has introducido es una cadena de texto";

    }

    document.getElementById("salida").innerHTML = salida;

}

function esNumero(entrada) {
    let res = false;
    if (!isNaN(entrada)) {
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