window.onload = principal;

/// variable globales:

var miVariableGlobal = 7;


/// variable  glibales -FIN

function principal() {
    document.getElementById("miBoton").onclick =
        manejadorClick;
}

function manejadorClick() {
    // Para guardar el valor en la variable dato debes de usar el .value; sino te muestra la linea de código
    let dato = document.getElementById("entrada").value;
    console.log(dato);
    var numero = 4;
    console.log(numero);
    console.warn(numero);
    console.error(numero);

    document.getElementById("salida").innerHTML =
        "Has escrito: " +
        document.getElementById("entrada").value;
}
