window.onload = principal;

function principal() {
    document.getElementById("miBoton1").onclick = manejadorClick1;
    document.getElementById("miBoton2").onclick = manejadorClick2;
    document.getElementById("miBoton3").onclick = manejadorClick3;
}

function manejadorClick1() {
    let texto = document.getElementById("entrada").value;
    document.getElementById("salida1").innerHTML = texto;
}

function manejadorClick2() {
    let texto = document.getElementById("entrada").value;
    document.getElementById("salida2").innerHTML = texto;
}

function manejadorClick3() {
    let texto = document.getElementById("entrada").value;
    document.getElementById("salida3").innerHTML = texto;
}



