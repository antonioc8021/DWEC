// 230928_02
// Ejemplo de detener timeouts e intervalos

window.onload = principal;
var miTimeout;
var miIntervalo;

function principal()
{
    document.getElementById("miBoton").onclick = manejadorClick;
    miTimeout = setTimeout(avisarInactividad, 7000);
    miIntervalo = setInterval(molestar,1000);
}

function manejadorClick()
{
    clearTimeout(miTimeout);
    clearInterval(miIntervalo);
    document.getElementById("salida").innerHTML =
                                        "Has escrito: " +
                                        document.getElementById("entrada").value;
    miTimeout = setTimeout(avisarInactividad, 7000);
}

function avisarInactividad()
{
    alert("Lleva mucho inactivo el servicio procedemos a cerrar");
}

function molestar()
{
    console.warn("Soy un pesado");
}