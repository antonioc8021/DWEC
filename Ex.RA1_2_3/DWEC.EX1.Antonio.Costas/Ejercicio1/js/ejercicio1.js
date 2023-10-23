// RA 2 y3
// Antonio Costas Salazar

window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick() {

    let textoSalida = "Ha introducido ";
    let textoEntrada = document.getElementById("entrada").value;
    textoEntrada.innerHTML = "";
    if (vacio(textoEntrada)) {
        textoSalida = "No ha escrito nada";
    } else if (esNumero(textoEntrada)) {
        textoSalida = "Ha introducido un número ";
        if ((textoEntrada > 0) && (textoEntrada <= 10)) {
            for (let i = 1; i <= textoEntrada; i++) {
                textoSalida += `<br>Mensaje: ${i}`;
            }
        } else if (textoEntrada > 0) {
            textoSalida += "postivo";
            if (esPrimo(textoEntrada)) {
                textoSalida += ", además es primo";
            }
        } else if (textoEntrada < 0) {
            textoSalida += "negativo";
            if (esPrimo(textoEntrada)) {
                textoSalida += ", además es primo";
            }
        }
        // todo: tengo que hacer lo de la parte decimal. La parte entera la saco truncando como el otro día con lo de probabilidad
    } else {
        textoSalida = `Ha escrito un texto, su longitud es ${textoEntrada.length},
        el texto en mayúsculas es: ${textoEntrada.toUpperCase()},
        y en minúsculas es: ${textoEntrada.toLowerCase()}`;
        if (esPalindromo(textoEntrada)) {
            textoSalida += `, Además de todo esto, es palindromo.`;
        }
    }

    document.getElementById("salida").innerHTML = textoSalida;
}

// me estaba volviendo loco porque no esaba devolviendo nada y se lo saltaba siempre por no poner el return
function vacio(texto) {
    let res = false;
    if (texto === "") {
        res = true;
    }
    return res;
}

function esNumero(numero) {
    let res = false;
    if (!isNaN(numero)) {
        res = true;
    }
    return res;
}

function esPrimo(numero) {
    let resultado = true;
    if (numero - parseInt(numero) !== 0) {
        resultado = false;
    }
    for (let i = 2; (i < numero) && resultado; i++) {
        if (numero % i === 0) {
            resultado = false;
        }
    }
    return resultado;
}

function giraPalabras(entrada) {
    let resultado = "";
    for (let i = entrada.length - 1; i >= 0; i--) {
        resultado += entrada[i];
    }
    return resultado;
}

function esPalindromo(entrada) {
    let mayus = entrada.toUpperCase();
    let reves = giraPalabras(mayus);
    return (mayus === reves);
}