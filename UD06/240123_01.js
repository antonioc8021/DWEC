window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick() {
    document.getElementById("salida").innerHTML = crearElemento();
}

function crearElemento(tagNombre, opciones) {
    let elemento = document.createElement(tagNombre);
    console.log(opciones);
    if (opciones && opciones.atributos && typeof opciones.atributos === 'object') {
        for (let clave in opciones.atributos) {
            elemento.setAttribute(clave, opciones.atributos[clave]);
        }
    }

    if (opciones && opciones.textoContenido) {
        contenido = document.createTextNode(opciones.textoContenido);
        elemento.appendChild(contenido);
    }

    return elemento;
}