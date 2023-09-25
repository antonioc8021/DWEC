window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick =
        manejadorClick;
}

function manejadorClick() {
    let a = 0, b = 0, temporal = 0, texto = "";
    a = parseInt(document.getElementById("entrada1").value);
    b = parseInt(document.getElementById("entrada2").value);
    if (a > b) {
        texto = `Orden ${a}, ${b}`;
    } else {
        temporal = b;
        b = a;
        a = temporal;
        texto = `Orden: ${a}, ${b}`;
    }
    document.getElementById("salida").innerHTML = texto;
}




