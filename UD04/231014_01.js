window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick() {
    document.getElementById("salida").innerHTML = "Has escrito: " + document.getElementById("entrada").value;
}

function contarCaracter(palabra, caracter) {
    return palabra.toLowerCase().length - palabra.toLowerCase().replaceAll(caracter.toLowerCase(),)
}