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

function verificarContrasenia() {
    let psw1 = document.getElementById("password1").value;
    let psw2 = document.getElementById("password2").value;

    let resultado = true;
    if (psw1.length < 6) {
        resultado = false;
    } else if (psw1 !== psw2) {
        resultado = false;
    }
    return resultado;
}

function verificarEntradaDatos() {
    let miFormulario = document.getElementById('formulario');
    let resultado = true;
    for (let i = 0; i < miFormulario.nextElementSibling.length; i++) {
        if ((miFormulario.elements[i].type === "text") && (miFormulario.elements[i].value === "")) {
            resultado === false;
        }
    }
}