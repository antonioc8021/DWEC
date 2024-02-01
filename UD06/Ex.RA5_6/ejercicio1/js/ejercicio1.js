// Antonio Costas Salazar
window.onload = principal;

function principal() {
    document.getElementById("btnCambiar").addEventListener("click", intercambiarCeldas);
}

function intercambiarCeldas() {
    var filaO = parseInt(document.getElementById("inFilaO").value);
    var columnaO = parseInt(document.getElementById("inColumnaO").value);
    var filaD = parseInt(document.getElementById("inFilaD").value);
    var columnaD = parseInt(document.getElementById("inColumnaD").value);

    var celdaOrigen = obtenerCelda(filaO, columnaO);
    var celdaDestino = obtenerCelda(filaD, columnaD);

    intercambiarEstilosContenido(celdaOrigen, celdaDestino);
}

function obtenerCelda(fila, columna) {
    var idCelda = "td_" + fila + "_" + columna;
    return document.getElementById(idCelda);
}

function intercambiarEstilosContenido(celdaOrigen, celdaDestino) {
    var estilosOrigen = celdaOrigen.style.cssText;
    var contenidoOrigen = celdaOrigen.innerHTML;

    celdaOrigen.style.cssText = celdaDestino.style.cssText;
    celdaOrigen.innerHTML = celdaDestino.innerHTML;
    celdaDestino.style.cssText = estilosOrigen;
    celdaDestino.innerHTML = contenidoOrigen;
}



