window.onload = principal;

function principal(e) {
    crearFormulario();
}

function crearFormulario(e) {
    let miFormulario = crearElemento("form", undefined, { "id": "miFormulario" });
    miFormulario.appendChild(document.createTextNode("Nº Divisiones:"));
    miFormulario.appendChild(crearElemento("input", undefined, { "id": "numDivisiones", "type": "number" }));
    miFormulario.appendChild(crearElemento("br"));
    miFormulario.appendChild(crearElemento("br"));
    miFormulario.appendChild(document.createTextNode("Nº Parrafos:"));
    miFormulario.appendChild(crearElemento("input", undefined, { "id": "numParrafps", "type": "number" }));


    document.body.appendChild(miFormulario);
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