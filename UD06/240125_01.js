window.onload = principal;

function principal(e) {
    dibujarFormulario();
}

function dibujarFormulario() {
    let miFormulario = crearElemento("form", undefined, { "id": "miFormulario" });
    miFormulario.appendChild(document.createTextNode("Filas: "));
    miFormulario.appendChild(crearElemento("input", undefined, { "id": "inFilas", "type": "number" }));
    miFormulario.appendChild(crearElemento("br"));
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


