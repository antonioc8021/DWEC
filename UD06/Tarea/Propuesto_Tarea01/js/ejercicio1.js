window.onload = function () {
    let formulario = document.createElement("form");

    let inputDivisiones = crearElemento("input", undefined, { "type": "text", "placeholder": "Número de divisiones" });
    let inputParrafos = crearElemento("input", undefined, { "type": "text", "placeholder": "Número de párrafos" });
    let inputListado = crearElemento("input", undefined, { "type": "text", "placeholder": "Número de elementos de la lista" });

    let botonCrear = crearElemento("button", "Crear", { "type": "button" });
    botonCrear.addEventListener("click", crearContenido);

    let salida = crearElemento("div", undefined, { "id": "salida" });
    salida.style.border = "1px solid red";
    salida.style.padding = "10px";
    salida.style.margin = "10px 0";

    formulario.appendChild(inputDivisiones);
    formulario.appendChild(inputParrafos);
    formulario.appendChild(inputListado);
    formulario.appendChild(botonCrear);
    formulario.appendChild(salida);

    document.body.appendChild(formulario);
};

function crearContenido() {
    let numDivisiones = parseInt(document.querySelector('input[placeholder="Número de divisiones"]').value);
    let numParrafos = parseInt(document.querySelector('input[placeholder="Número de párrafos"]').value);
    let numListado = parseInt(document.querySelector('input[placeholder="Número de elementos de la lista"]').value);

    let salida = document.getElementById("salida");

    salida.innerHTML = "";

    for (let i = 1; i <= numDivisiones; i++) {
        let nuevaDivision = crearElemento("div", undefined, { "id": "div" + i });
        nuevaDivision.style.border = "1px solid red";
        nuevaDivision.style.padding = "10px";
        nuevaDivision.style.margin = "10px 0";
        for (let j = 1; j <= numParrafos; j++) {
            let nuevoParrafo = crearElemento("p", "División " + i + " - Párrafo " + j, { "id": "parr" + i + j });
            nuevoParrafo.style.border = "1px solid green";
            nuevoParrafo.style.padding = "5px";
            nuevoParrafo.style.margin = "5px 0";
            nuevoParrafo.addEventListener("click", eliminarElemento);
            nuevaDivision.appendChild(nuevoParrafo);
        }

        let nuevoListado = crearElemento("ul", undefined, { "id": "list" + i });
        nuevoListado.style.border = "1px solid blue";
        nuevoListado.style.padding = "5px";
        nuevoListado.style.margin = "5px 0";
        for (let k = 1; k <= numListado; k++) {
            let nuevoElementoLista = crearElemento("li", "Elemento " + k, { "id": "item" + i + k });
            nuevoElementoLista.style.margin = "5px 0";
            nuevoElementoLista.addEventListener("click", eliminarElemento);
            nuevoListado.appendChild(nuevoElementoLista);
        }

        nuevaDivision.appendChild(nuevoListado);
        salida.appendChild(nuevaDivision);
    }
}

function eliminarElemento(event) {
    event.target.parentNode.removeChild(event.target);
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
