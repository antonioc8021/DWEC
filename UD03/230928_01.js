window.onload = principal;

let miliTimeOut;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
    miliTimeOut = setTimeout(inactive, 3000);
}
function manejadorClick() {
    clearTimeout(miliTimeOut);
    miliTimeOut = setTimeout(inactive, 2000);
    document.getElementById("salida").innerHTML = "Estamos activo papi";

}

function inactive() {
    document.getElementById("salida").innerHTML = "Estás afk";
}
