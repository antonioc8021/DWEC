window.addEventListener("load", principal, true);

// APARTADO 1
function principal(e) {
    let nombreParrafo = document.getElementById("nombre");
    nombreParrafo.textContent = "Jose Manuel Estébanez";

    // APARTADO 2
    let divisiones = document.querySelectorAll("#divBlanco, #divNegro, #divRojo, #divAmarillo, #divPurpura, #divVerde, #divGris, #divRosa, #divNaranja, #divAqua, #divCian, #divMarino, #divOliva, #divBeige, #divOro");

    for (let division of divisiones) {
        division.addEventListener("mouseover", entroDiv);
        division.addEventListener("mouseleave", salgoDiv);
        division.addEventListener("click", clickDiv);
    }

    // APARTADO 3
    let btnCrear = document.getElementById("btnCrear");

    btnCrear.addEventListener("click", crearDivision);

}

// APARTADO 2
function entroDiv(e) {
    let salida = document.getElementById("salida");
    salida.textContent = e.target.id;
}

function salgoDiv() {
    let salida = document.getElementById("salida");
    salida.textContent = "ID a borrar";
}

function clickDiv(e) {
    e.stopPropagation();
    e.target.remove();
}

// APARTADO 3
function crearDivision() {
    let nuevaDivisionID = Math.random(0,100);

    let nuevaDivision = crearElemento("div", { atributos: { id: nuevaDivisionID,style:"background-color:"+colorAleatorio()+";" }, textoContenido:nuevaDivisionID });

    nuevaDivision.addEventListener("mouseover", entroDiv);
    nuevaDivision.addEventListener("mouseleave", salgoDiv);
    nuevaDivision.addEventListener("click", clickDiv);

    let divCreacion = document.getElementById("divCreacion");
    divCreacion.appendChild(nuevaDivision);
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
        elemento.textContent = opciones.textoContenido;
    }

    return elemento;
}

function colorAleatorio()
{
    let colores =["red","yellow","blue","green","orange","blue","black","pink","purple","gold","olive","navy","beige","gray","aqua","cyan"];
    return colores[Math.round(Math.random()*colores.length)];
}