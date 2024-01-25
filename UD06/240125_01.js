window.onload = principal;

function principal(e) {
    dibujarFormulario();
}

function dibujarFormulario() {
    let miFormulario = crearElemento("form", undefined, { "id": "miFormulario" });
    miFormulario.appendChild(document.createTextNode("Filas: "));
    miFormulario.appendChild(crearElemento("input", undefined, { "id": "inFilas", "type": "number" }));
    miFormulario.appendChild(crearElemento("br"));
    miFormulario.appendChild(crearElemento("br"));

    miFormulario.appendChild(document.createTextNode("Columnas: "));
    miFormulario.appendChild(crearElemento("input", undefined, { "id": "inColumnas", "type": "number" }));
    miFormulario.appendChild(crearElemento("br"));
    miFormulario.appendChild(crearElemento("br"));


    let boton = crearElemento("input", undefined, { "id": "btnCrear", "type": "button", "value": "Crear Tabla" });

    boton.addEventListener("click", manejarClick);
    miFormulario.appendChild(crearElemento("br"));
    miFormulario.appendChild(crearElemento("br"))
    miFormulario.appendChild(boton);

    miFormulario.appendChild(crearElemento("div", undefined, { "id": "salida" }));

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


function manejarClick(e) {
    if (document.getElementById("salida").firstChild !== null) {
        document.getElementById("salida").removeChild(document.getElementById("salida").firstChild);
    }
    let nFilas = document.getElementById("inFilas").value;
    let nColumnas = document.getElementById("inColumnas").value;
    let contenido = document.createTextNode("Filas: " + nFilas + "\nColumnas: " + nColumnas);
    document.getElementById("salida").appendChild(dibujarTabla(nFilas, nColumnas, "celda"));
}

function dibujarTabla(nFilas, nColumnas, baseID) {
    let miTabla = crearElemento("table", undefined, { "id": baseID });
    for (let i = 0; i < nFilas; i++) {
        let filaTemp = crearElemento("tr", undefined, { "id": baseID });
        for (let j = 0; j < nColumnas; j++) {
            let id = baseID + "_td_" + i + "_" + j;
            let columnaTemp = crearElemento("td", id, { "id": id });
            filaTemp.appendChild(columnaTemp);
        }
        miTabla.appendChild(filaTemp);
    }
    return miTabla;
}