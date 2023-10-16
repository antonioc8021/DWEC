// Tarea DAWC03.01 - Ejercicio 1
// Antonio Costas Salazar

window.onload = principal;

function principal() {
    document.getElementById("boton").onclick = manejadorClick;

}

function manejadorClick() {
    document.getElementById('salida').innerHTML = separaPalabras(texto);
}

function separaPalabras(tentrada, separador = " ") {
    return entrada.split(separador);
}

function giraPalabras(entrada) {
    return entrada.split(" ").reverse().join("");
}

