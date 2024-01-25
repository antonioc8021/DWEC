window.onload = principal;
let contador = 0;


function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick() {

    let texto = document.getElementById("entrada").value;
    let color = document.getElementById("inColor").value;
    let identificador = "parr_" + contador++;
    let parrafo = crearElemento('p', texto, { "id": identificador });
    parrafo.style.backgroundColor = color;
    parrafo.addEventListener("click", manejadorClickParrafo)    // añado el manejador único
    document.getElementById("salida").appendChild(parrafo);
}


function crearElemento(etiqueta, texto, atributos) {
    let elementoNuevo = document.createElement(etiqueta);
    if (texto !== undefined) {
        let contenido = document.createTextNode(texto);
        elementoNuevo.appendChild(contenido);
    }
    if (atributos !== undefined) {
        for (let clave in atributos) {
            elementoNuevo.setAttribute(clave, atributos[clave]);
        }
    }
    return elementoNuevo;
}

function manejadorClickParrafo(e) {
    console.log(this.id);
    document.getElementById(this.id).style.color = color;
}