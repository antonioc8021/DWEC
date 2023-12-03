// 230928_04
// Ejemplo de tomeouts e intervalos con parámetros 2 (variables globales)

window.onload = principal;
var miIntervalo;
var textoIntroducido = "Mesaje por defecto";

function principal()
{
    document.getElementById("miBoton").onclick = manejadorClick;
    miIntervalo = setInterval(lanzarMensaje,1000);
}

function manejadorClick()
{
    textoIntroducido = document.getElementById("entrada").value;
    document.getElementById("salida").innerHTML = "Has escrito: " + textoIntroducido;
}

function lanzarMensaje()
{
    console.log(textoIntroducido);
}