// Antonio Costas Salazar
window.onload = principal;
function principal(e) {
    dibujarFormulario();
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

function dibujarFormulario() {
    let miFormulario = crearElemento("form", undefined, { "id": "miFormulario" });
    miFormulario.appendChild(crearElemento("h1", "Antonio Costas Salazar"));

    miFormulario.appendChild(document.createTextNode("ID: "));
    let inputID = crearElemento("input", undefined, { "id": "inID", "type": "text" });
    inputID.addEventListener("input", manejadorChangeID);

    miFormulario.appendChild(inputID);

    miFormulario.appendChild(document.createTextNode("Nombre: "));
    inputNombre = crearElemento("input", undefined, { "id": "inNombre", "type": "text" });
    inputNombre.addEventListener("input", manejadorChangeNombre);

    miFormulario.appendChild(inputNombre);

    botonGuardar = crearElemento("input", undefined, { "id": "btnGuardar", "type": "button", "value": "Guardar" });
    botonGuardar.addEventListener("click", manejadorClickGuardar);

    miFormulario.appendChild(botonGuardar);

    botonCargar = crearElemento("input", undefined, { "id": "btnCargar", "type": "button", "value": "Cargar" });
    botonCargar.addEventListener("click", manejadorClickCargar);

    miFormulario.appendChild(botonCargar);

    document.body.appendChild(miFormulario);

    document.body.appendChild(crearElemento("div", undefined, { "id": "salida" }));
}

function manejadorChangeID(e) {
    let regEx = /^BCH-?\d{2,6}$/;

    let valor = this.value;
    if (regEx.test(valor)) {
        this.style.backgroundColor = "lightgreen";
    } else {
        this.style.backgroundColor = "red";
    }
}
function manejadorChangeNombre(e) {
    let regEx = /^[a-zA-Z]{3,30}(?:\s[a-zA-Z]{3,30})+$/;
    let valor = this.value;
    if (regEx.test(valor)) {
        this.style.backgroundColor = "lightgreen";
    } else {
        this.style.backgroundColor = "red";
    }
}

function manejadorClickGuardar(e) {
    let regExID = /^BCH-?\d{2,6}$/;
    let regExNombre = /^[a-zA-Z]{3,30}(?:\s[a-zA-Z]{3,30})+$/;
    let valorID = document.getElementById("inID").value;
    let valorNombre = document.getElementById("inNombre").value;

    if (regExID.test(valorID) && regExNombre.test(valorNombre)) {

        let objeto = {
            id: valorID,
            nombre: valorNombre
        }
        objetoJson = JSON.stringify(objeto);

        sessionStorage.setItem(valorID, objetoJson);

    } else {
    }
}


function manejadorClickCargar(e) {
    let txt = ""
    console.log("puta");
    console.log(sessionStorage.length);
    for (let i = 0; i < sessionStorage.length; i++) {
        txt += "Objeto " + (i + 1) + ":<br>";
        txt += "{";
        console.log("putita");
        let claveSesion = sessionStorage.key(i);
        console.log(claveSesion);
        let valorSesion = sessionStorage.getItem(claveSesion);
        let valorParseado = JSON.parse(valorSesion);
        let clavesObjeto = Object.keys(valorParseado);
        for (let j = 0; j < clavesObjeto.length; j++) {
            let claveObjeto = clavesObjeto[j];
            console.log(claveObjeto);
            let valorObjeto = valorParseado[claveObjeto];
            console.log(valorObjeto);
            txt += claveObjeto + ": " + valorObjeto + "<br>";
        }
        txt += "}<br>";
    }
    document.getElementById("salida").innerHTML = txt;
}