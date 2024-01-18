window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick() {
    document.getElementById("salida").innerHTML = "Has escrito: " + document.getElementById("entrada").value;
}



function getCookie(nomCookie) {
    var n;
    var nombre;
    var valor;
    var resultado = null; // si no se encuentra = nulo
    var cook = document.cookie.split(";"); // pares de valores
    // revisamos todos los pares
    for (var i = 0; i < cook.length; i++) {
        n = cook[i].split("="); // separamos nombre/valor
        nombre = n[0];
        valor = n[1];
        // si es el buscado
        if (nombre.trim() == nomCookie.trim()) {
            resultado = valor;// devolvemos su valor
        }
    }
    return resultado;
}

function setCookie(name, value, caducidad) {
    var now = new Date();
    var then = now;
    then.setDate(then.getDate() + caducidad);
    console.log(then);
    document.cookie = name + "=" + value
        + ";expires=" + then.toGMTString() + ";path=/";
}

function haycookies() {
    document.cookie = "micookie=hay";
    return (getCookie("micookie") == "hay");
}