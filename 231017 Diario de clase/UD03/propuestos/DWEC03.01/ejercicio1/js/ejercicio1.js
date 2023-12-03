// DWEC03.01 Ejercicios propuestos- Ejercicio 1

window.onload = principal;

function principal()
{
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick()
{
    let textoEntrada = document.getElementById("inTexto").value;
    let numeChar = parseInt(document.getElementById("inChar").value);
    let caracter = document.getElementById("inLetra").value;

    let textoSalida = "La longitud del texto introducido es " + textoEntrada.length;
    textoSalida += "<br>El caracter de la posición " + numeChar + " es " + textoEntrada.charAt(numeChar);
    textoSalida += "<br>La primera aparición de " + caracter + " es " + textoEntrada.indexOf(caracter)
                        + " y la última aparición es " + textoEntrada.lastIndexOf(caracter);

    document.getElementById("salida").innerHTML = textoSalida;
}