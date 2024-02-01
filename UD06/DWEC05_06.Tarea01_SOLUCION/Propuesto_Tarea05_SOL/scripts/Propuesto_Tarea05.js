window.onload = principal;

function principal() {
    let miFormulario = crearElemento("form",undefined,{"id": "miFormulario"});
    miFormulario.appendChild(document.createTextNode("ID: "));
    miFormulario.appendChild(crearElemento("input",undefined,{  "id":"inID", 
                                                                "type": "text"}));
    
    miFormulario.appendChild(crearElemento("br"));
    miFormulario.appendChild(crearElemento("br"));

    miFormulario.appendChild(document.createTextNode("Nombre: "));
    miFormulario.appendChild(crearElemento("input",undefined,{  "id":"inNombre", 
                                                                "type": "text"}));
    
    miFormulario.appendChild(crearElemento("br"));
    miFormulario.appendChild(crearElemento("br"));
    miFormulario.appendChild(crearElemento("input",undefined,{  "id":"btnGuardar", 
    "type": "button", "value":"Guardar"}));
    
    miFormulario.appendChild(crearElemento("br"));
    miFormulario.appendChild(crearElemento("br"));
    miFormulario.appendChild(crearElemento("input",undefined,{  "id":"btnCargar", 
    "type": "button", "value":"Cargar"}));
    miFormulario.appendChild(crearElemento("br"));
    miFormulario.appendChild(crearElemento("br"));
    miFormulario.appendChild(crearElemento("div",undefined,{  "id":"salida"}));

    document.body.appendChild(miFormulario);
    document.getElementById("inID").addEventListener("change",cambiaID);
    document.getElementById("inNombre").addEventListener("change",cambiaNombre);
    document.getElementById("btnGuardar").addEventListener("click",guardar);
    document.getElementById("btnCargar").addEventListener("click",cargar);
}

function cargar() {
    let salida = "";
    for(let i=0; i<sessionStorage.length;i++) {
        salida += sessionStorage.key(i) + ": " + sessionStorage.getItem(sessionStorage.key(i)) + "<br>";
    }
    document.getElementById("salida").innerHTML = salida;
}

function guardar() {
    let id = document.getElementById("inID").value;
    let nombre = document.getElementById("inNombre").value;
    if(checkID(id) && checkNombre(nombre)) {
        sessionStorage.setItem(id,nombre);
    }
}

function cambiaID(e) {
    if(!checkID(this.value)) {
        this.style.backgroundColor = "red";
    }
    else {
        this.style.backgroundColor = "";
    }
}

function cambiaNombre(e) {
    if(!checkNombre(this.value)) {
        this.style.backgroundColor = "red";
    }
    else {
        this.style.backgroundColor = "";
    }
}

function checkID(id) {
    let exReg=/^BCH-?[0-9]{2,6}$/;
    return exReg.test(id);
}

function checkNombre(nombre) {
    let exReg=/^[a-zA-Z]{2,15}\s[a-zA-Z]{1,15}$/;
    return exReg.test(nombre);
}

function crearElemento(etiqueta, texto, atributos) {
    let elementoNuevo = document.createElement(etiqueta);
    if(texto !== undefined) {
        let contenido = document.createTextNode(texto);
        elementoNuevo.appendChild(contenido);
    }
    if(atributos !== undefined) {
        for(let clave in atributos) {
            elementoNuevo.setAttribute(clave, atributos[clave]);
        }
    }
    return elementoNuevo;
}