// 230925
// Ejercicio 6 - Ejercicios de repaso DWEC02.01

window.onload = principal;
var A = 0;
var B = 0;
var temporal = 0;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick() {
    A = parseFloat(document.getElementById("entrada1").value);
    B = parseFloat(document.getElementById("entrada2").value);

    if (A < B) {
        temporal = B;
        B = A;
        A = temporal;
    }
    let salida = "Orden = " + A + ", " + B;
    document.getElementById("salida").innerHTML = salida;
}
