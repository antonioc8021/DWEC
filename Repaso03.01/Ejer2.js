window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick =
        manejadorClick;
}

function manejadorClick() {
    let texto1 = document.getElementById("entrada1").value;
    let texto2 = document.getElementById("entrada2").value;

    cosole.log = vtexto1.match(texto2);

    document.getElementById("salida").innerHTML = "Las dos cadenas concatenadas se ven así:<br>"
        + texto1 + texto2;



}