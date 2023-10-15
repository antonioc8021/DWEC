// Tarea DAWC03.01 - Ejercicio 4
// Antonio Costas Salazar

window.onload = principal;

function principal() {
    console.log("hola mundo");
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick() {
    let tamano = "Altura: " + window.innerHeight + " X Anchura: " + window.innerWidth;
    document.getElementById("salida").innerHTML = "El tamaño de la ventana es: <br>" + tamano;
}

