window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick() {
    let parrafo = document.createElement('p');

    let contenido = crearElemento('i', document.getElementById("entrada").value);
    parrafo.appendChild(contenido);

    let color = document.getElementById('inColor').value;
    parrafo.style.backgroundColor = color;

    contenido.style.fontWeigth = 'bold';


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

