// 230928_prop_01
// No pertenece a ninguna diapositiva
/*
    ENUNCIADO --------
    Crear una aplicación web que en caso de que no se haga click en 7 segundos
    en el único botón disponible de la app, salte un mensaje por pantalla 
    (p o div) indicando que en caso de que no se pulse nada se cerrará la ventana 
    en 5 segundos. 
    
    Pasado ese tiempo saldrá un mensaje diciendo cerrando ventana
    y, si te lo permite, cierra la ventana.
*/

window.onload = principal;
var miTimeout;
var miIntervalo;
var contador = 4;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
    miTimeout = setTimeout(advertirCierre, 7000);
}

function manejadorClick() {
    contador = 4;
    clearTimeout(miTimeout);
    clearInterval(miIntervalo);
    document.getElementById("salida").innerHTML = "Has escrito: " + document.getElementById("entrada").value;
    miTimeout = setTimeout(advertirCierre, 7000);
}

function advertirCierre() {
    document.getElementById("salida").innerHTML = "Se va a cerrar la ventana en 5 segundos";
    miIntervalo = setInterval(actuzalizarContador, 1000);
    miTimeout = setTimeout(cerrar, 5000);
}

function cerrar() {
    clearInterval(miIntervalo);
    document.getElementById("salida").innerHTML += "<h1>CERRADA</h1>";
    // window.close();
}

function actuzalizarContador() {
    document.getElementById("salida").innerHTML = "Se va a cerrar la ventana en " + (contador--) + " segundos";
}
