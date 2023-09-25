window.onload = principal;
function principal() {
    document.getElementById("miBoton").onclick =
        manejadorClick;
}

function manejadorClick() {
    document.getElementById("salida").innerHTML =
        "~~~~~TABLA DE SUMAR~~~~~~<br/>~~~~~~~~~~~~~~~~~~~~~~~~~~~<br/>"
        + tablaSumar(parseInt(document.getElementById("entrada").value))
        + "<br/><br/>~~~~~TABLA DE MULTIPLICAR~~~~~~<br/>~~~~~~~~~~~~~~~~~~~~~~~~~~~<br/>"
        + tablaMultiplicar(parseInt(document.getElementById("entrada").value))
        + "<br/><br/>~~~~~TABLA DE DIVIDIR~~~~~~<br/>~~~~~~~~~~~~~~~~~~~~~~~~~~~<br/>"
        + tablaDividir(parseInt(document.getElementById("entrada").value));
}

function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

function dividir(numero1, numero2) {
    return numero1 / numero2;
}

function tablaSumar(numero) {
    let resultado = '';
    for (let i = 1; i <= 10; i++) {
        resultado += numero + " + " + i + " = " + sumar(numero, i) + " <br/> ";
    }
    return resultado;
}

function tablaMultiplicar(numero) {
    let resultado = '';
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} * ${i} = ${multiplicar(numero, i)} <br/>`;
    }
    return resultado;
}

function tablaDividir(numero) {
    let resultado = '';
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} / ${i} = ${dividir(numero, i)}<br/> `;
    }
    return resultado;
}

// FIN-FUNCIONES