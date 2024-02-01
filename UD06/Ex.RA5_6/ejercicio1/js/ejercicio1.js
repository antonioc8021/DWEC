// Antonio Costas Salazar
window.onload = principal;

function principal() {
    document.getElementById("cambiaNombre").innerHTML = "Antonio Costas Salazar";
    document.getElementById("btnCambiar").addEventListener("click", intercambiarCeldas);
}

function intercambiarCeldas() {
    let filaO = parseInt(document.getElementById("inFilaO").value);
    let columnaO = parseInt(document.getElementById("inColumnaO").value);
    let filaD = parseInt(document.getElementById("inFilaD").value);
    let columnaD = parseInt(document.getElementById("inColumnaD").value);

    let celdaOrigen = obtenerCelda(filaO, columnaO);
    let celdaDestino = obtenerCelda(filaD, columnaD);

    intercambiarEstilosContenido(celdaOrigen, celdaDestino);
}

function obtenerCelda(fila, columna) {
    let idCelda = "td_" + fila + "_" + columna;
    return document.getElementById(idCelda);
}

function intercambiarEstilosContenido(celdaOrigen, celdaDestino) {
    let estilosOrigen = celdaOrigen.style.cssText;
    let contenidoOrigen = celdaOrigen.innerHTML;

    celdaOrigen.style.cssText = celdaDestino.style.cssText;
    celdaOrigen.innerHTML = celdaDestino.innerHTML;
    celdaDestino.style.cssText = estilosOrigen;
    celdaDestino.innerHTML = contenidoOrigen;
}


