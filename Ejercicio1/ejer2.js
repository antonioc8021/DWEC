// Tarea DAWC03.01 - Ejercicio 2
// Antonio Costas Salazar

window.onload = principal

function principal() {
    document.getElementById("boton").onclick = manejadorClick;
}

function manejadorClick() {
    document.getElementById("salida").innerHTML = "";
}
