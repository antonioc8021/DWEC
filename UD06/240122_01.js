window.addEventListener("load", principal);

let pSalida;
let btnMiBoton;

function principal(e) {
    pSalida = document.getElementById("salida");
    btnMiBoton = document.querySelector("miBoton");

    // console.log(pSalida.parentNode.childNodes);
    // console.log(pSalida.parentNode.childNodes.length);
    // console.log(pSalida.parentNode.childNodes[0]);

    // vamos a crear un elemento
    let elementoNuevo = document.createElement("div");
    let contenidoTexto = document.createTextNode("Contenido para mi división");
    elementoNuevo.appendChild(contenidoTexto);
    elementoNuevo.id = 'divNueva';
    elementoNuevo.setAttribute("Antonio", "Costas");
    elementoNuevo.setAttribute("class", "division");

    document.body.appendChild(elementoNuevo);

    elementoNuevo.innerHTML = "Hola hola";
    document.getElementById("salida").appendChild(elementoNuevo);
}


function manejadorClicl(e) {
    let miInput = document.getElementById("entrada");
    document.getElementById("salida").appendChild(miInput);
}



function crearElemento(etiqueta, texto, atributos) {
    let elementoNuevo = document.createElement(etiqueta);
    if (texto !== undefined) {
        let Contenido = document.createTextNode(texto);
        elementoNuevo.appendChild(contenido);
    }
    if (atributos !== undefined) {

    }

    return elementoNuevo;
}