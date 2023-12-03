window.onload = principal;

/// Variables globales

var miVariableGlobal = 7;

/// Variables globales - FIN

function principal()
{
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick()
{
    let dato = document.getElementById("entrada").value;
    console.log(dato);
    let numero = 4;
    console.log(numero);
    console.warn(numero);
    console.error(numero);

    document.getElementById("salida").innerHTML =
                                        "Has escrito: " +
                                        document.getElementById("entrada").value;
}