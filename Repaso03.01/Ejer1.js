window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick =
        manejadorClick;
}

function manejadorClick() {
    let texto = document.getElementById("entradaTexto").value;
    let posicion = parseInt(document.getElementById("entradaPosicion").value);
    let caracter = document.getElementById("entradaCaracter").value;
    texto += "La logintud del texto es: " + texto.length;

    texto += "<br>El caracter de la posición: " + posicion + " es: " + texto.charAt(posicion - 1);

    texto += "<br>La primera aparición de: " + caracter + " es : " + texto.indexOf(caracter) + " ,y su última posición es: " + texto.lastIndexOf(caracter);

    document.getElementById("salida").innerHTML = texto;
}

// realmente no es necesario hacer una función a parte si puedo hacer el .length en la función manejador click
/* function longitudTexto(texto) {
    texto = document.getElementById("entradaTexto").value;
    let longitud = texto.length;
    return longitud;
} */

function devuelveCaracter(texto, posicion) {

}




