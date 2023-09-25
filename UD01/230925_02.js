window.onload = principal;
function principal() {
    document.getElementById("miBoton").onclick =
        manejadorClick;
}
function manejadorClick() {
    let numero = parseInt(document.getElementById("entrada").value);
    let texto = " ";


    if ((numero % 2) === 0) {
        texto = "Es par";
        document.getElementById("salida").innerHTML = texto;

    } else {
        texto = "Es impar";
        document.getElementById("salida").innerHTML = texto;

    }
}


