// Tarea DAWC03.01 - Ejercicio 1
// Antonio Costas Salazar

window.onload = principal;

function principal() {
    document.getElementById("boton").onclick = manejadorClick;

}

function manejadorClick() {
    let texto = document.getElementById('entrada').value;
    document.getElementById('salida').innerHTML = separaPalabras(texto);
}


function devuelveCadena() {

}

let palabras = new (Array);
function separaPalabras(texto, separador = " ") {
    palabras.push = texto.split(' ');
    console.log(palabras);
    return palabras;
}