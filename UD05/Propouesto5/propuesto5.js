window.onload = function (e) {
    let evento = window.event || e;
    document.getElementById("enviar").addEventListener('click', manejadorEnviar);
}

function manejadorEnviar(e) {
    let evento = window.event || e;
    if (todoCorrecto) {
        // ACCIÓN POR DEFECTO DEL BOTÓN
    } else {
        // SACO MENSAJE CON LOS ERRORES
    }
}

