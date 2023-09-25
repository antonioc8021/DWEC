// programa que almacena en el array un elemento cada vez que pulsas la celda y al pulsar imprimir lo devuelve
// ordenado alfabéticamente
window.onload = principal;

// las varibales globales mejor si las declaro al principio, no hacerlo dentro de funciones random
let miArray = [];
let salida = '';

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
    document.getElementById("btnImprimir").onclick = manejadorImprimir;
}

function manejadorClick() {
    miArray.push(document.getElementById("entrada").value);
    document.getElementById("salida").innerHTML = " ";
    document.getElementById("entrada").value = "";
}

function manejadorImprimir() {
    miArray.sort();
    console.log(miArray);
    for (let i = 0; i < miArray.length; i++) {
        salida += `${miArray[i]}<br/>`;
    }
    document.getElementById("salida").innerHTML = salida;
    salida = "";
}
