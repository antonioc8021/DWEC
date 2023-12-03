// 230928_03
// Ejemplo de tomeouts e intervalos con parámetros

window.onload = principal;
var miIntervalo;

function principal()
{
    document.getElementById("miBoton").onclick = manejadorClick;
    miIntervalo = setInterval(lanzarMensaje,1000,"Mensaje por defecto");
}

function manejadorClick()
{
    clearInterval(miIntervalo);
    let textoIntroducido = document.getElementById("entrada").value;
    document.getElementById("salida").innerHTML = "Has escrito: " + textoIntroducido;
    miIntervalo = setInterval(lanzarMensaje, 1000, textoIntroducido);
}

function lanzarMensaje(texto)
{
    console.log(texto);
}