// Antonio Costas Salazar
window.onload = principal;

function principal() {
    let miFormulario = crearElemento("form", undefined, { "id": "miFormulario" });
    miFormulario.appendChild(crearElemento("h1", "Antonio Costas Salazar"));
    miFormulario.appendChild(document.createTextNode("Codigo: "));
    miFormulario.appendChild(crearElemento("input", undefined, {
        "id": "inCodigo",
        "type": "text"
    }));

    miFormulario.appendChild(crearElemento("br"));
    miFormulario.appendChild(crearElemento("br"));

    miFormulario.appendChild(document.createTextNode("Cantidad: "));
    miFormulario.appendChild(crearElemento("input", undefined, {
        "id": "inCantidad",
        "type": "number"
    }));

    miFormulario.appendChild(crearElemento("br"));
    miFormulario.appendChild(crearElemento("br"));
    miFormulario.appendChild(crearElemento("input", undefined, {
        "id": "btnGuardar",
        "type": "button", "value": "Guardar"
    }));

    miFormulario.appendChild(crearElemento("br"));
    miFormulario.appendChild(crearElemento("br"));
    miFormulario.appendChild(crearElemento("input", undefined, {
        "id": "btnCargar",
        "type": "button", "value": "Cargar"
    }));
    miFormulario.appendChild(crearElemento("br"));
    miFormulario.appendChild(crearElemento("br"));
    miFormulario.appendChild(crearElemento("div", undefined, { "id": "salida" }));

    document.body.appendChild(miFormulario);
    document.getElementById("inCodigo").addEventListener("change", cambiaCodigo);
    document.getElementById("inCantidad").addEventListener("change", cambiaCantidad);
    document.getElementById("btnGuardar").addEventListener("click", guardar);
    document.getElementById("btnCargar").addEventListener("click", cargar);
}

function cargar() {
    let salida = "";
    for (let i = 0; i < sessionStorage.length; i++) {
        salida += sessionStorage.key(i) + ": " + sessionStorage.getItem(sessionStorage.key(i)) + "<br>";
    }
    document.getElementById("salida").innerHTML = salida;
}

function guardar() {
    let id = document.getElementById("inCodigo").value;
    let nombre = document.getElementById("inCantidad").value;
    if (checkCodigo(id) && checkCantidad(nombre)) {
        sessionStorage.setItem(id, nombre);
    }
}

function cambiaCodigo(e) {
    if (!checkCodigo(this.value)) {
        this.style.backgroundColor = "red";
    }
    else {
        this.style.backgroundColor = "";
    }
}

function cambiaCantidad(e) {
    if (!checkCantidad(this.value)) {
        this.style.backgroundColor = "red";
    }
    else {
        this.style.backgroundColor = "";
    }
}

function checkCodigo(id) {
    let exReg = /^ABC_?\d{3,10}$/;
    return exReg.test(id);
}

function checkCantidad(nombre) {
    let exReg = /^[0-9]{3,100000}$/;
    return exReg.test(nombre);
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