// Tarea DAWC03.01 - Ejercicio 1
// Antonio Costas Salazar

window.onload = principal;

function principal() {
    document.getElementById("boton").onclick = manejadorClick;

}

function manejadorClick() {
    let entrada = document.getElementById("entrada").value;
    entrada = separaPalabras(entrada, " ");
    for (let i = 0; i < entrada.length; i++) {
        entrada[i] = giraPalabras(txtEntrada[i]);
    }
}

function separaPalabras(tentrada, separador) {
    return entrada.split(separador);
}

function giraPalabras(entrada) {
    return entrada.split(" ").reverse().join("");
}

function esPalindromo(entrada) {
    let mayus = entrada.toUpperCase();
    let reves = giraPalabras(mayus);
    console.log(mayus);
    console.warn(reves);
    console.error(entrada);
}