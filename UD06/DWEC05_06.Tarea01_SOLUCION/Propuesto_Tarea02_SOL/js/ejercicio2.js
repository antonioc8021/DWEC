window.onload = principal;


function principal(e) {
    dibujarFormulario();
}

function dibujarFormulario() {
    let miFormulario = crearElemento("form",undefined,{"id": "miFormulario"});
    miFormulario.appendChild(document.createTextNode("Filas: "));
    miFormulario.appendChild(crearElemento("input",undefined,{  "id":"inFilas", 
                                                                "type": "number"}));
    miFormulario.appendChild(crearElemento("br"));
    miFormulario.appendChild(crearElemento("br"));

    miFormulario.appendChild(document.createTextNode("Columnas: "));
    miFormulario.appendChild(crearElemento("input",undefined,{  "id":"inColumnas", 
                                                                "type": "number"}));
    miFormulario.appendChild(crearElemento("br"));

    miFormulario.appendChild(crearElemento("br"));
    miFormulario.appendChild(crearElemento("br"));

    let boton = crearElemento("input",undefined,{  "id":"btnCrear",
                                                    "type":"button",
                                                    "value": "Crear Tabla"})
    boton.addEventListener("click",manejadorClick);
    miFormulario.appendChild(boton);
    miFormulario.appendChild(crearElemento("br"));
    miFormulario.appendChild(crearElemento("br"));

    miFormulario.appendChild(crearElemento("div",undefined,{    "id":"salida"}))

    miFormulario.appendChild(document.createTextNode("Filas: "));
    miFormulario.appendChild(crearElemento("input",undefined,{  "id":"inFilasMod", 
                                                                "type": "number"}));
    miFormulario.appendChild(crearElemento("br"));
    miFormulario.appendChild(crearElemento("br"));

    miFormulario.appendChild(document.createTextNode("Columnas: "));
    miFormulario.appendChild(crearElemento("input",undefined,{  "id":"inColumnasMod", 
                                                                "type": "number"}));
    miFormulario.appendChild(crearElemento("br"));
    miFormulario.appendChild(crearElemento("br"));

    miFormulario.appendChild(document.createTextNode("Nuevo texto: "));
    miFormulario.appendChild(crearElemento("input",undefined,{  "id":"inValor", 
                                                                "type": "text"}));
    miFormulario.appendChild(crearElemento("br"));

    miFormulario.appendChild(crearElemento("br"));
    miFormulario.appendChild(crearElemento("br"));

    boton = crearElemento("input",undefined,{  "id":"btnInsert",
                                                    "type":"button",
                                                    "value": "Modificar"})
    boton.addEventListener("click",manejadorClickInsertar);
    miFormulario.appendChild(boton);

    document.body.appendChild(miFormulario);
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

function manejadorClick(e) {
    // document.getElementById("salida").innerHTML = "";
    if(document.getElementById("salida").firstChild !== null) {
        document.getElementById("salida").removeChild(document.getElementById("salida").firstChild);
    }

    let nFilas = document.getElementById("inFilas").value;
    let nColumnas = document.getElementById("inColumnas").value;
    let contenido = document.createTextNode("Filas: " + nFilas + "\nColumnas: " + nColumnas);
    // document.getElementById("salida").appendChild(contenido);
    document.getElementById("salida").appendChild(dibujarTabla(nFilas,nColumnas,"miTabla"));
}

function dibujarTabla(nFilas, nColumnas, baseID) {
      let miTabla = crearElemento("table",undefined,{"id":baseID});
      for(let i = 0; i< nFilas; i++) {
        let filaTemp = crearElemento("tr",undefined,{"id": baseID + "_tr_" + i});
        for(let k=0; k<nColumnas; k++) {
            let id = baseID +"_td_" + i +"_" + k;
            let columnaTemp = crearElemento("td","x",{"id":id});
            columnaTemp.addEventListener('click',manejadorClickTD);
            filaTemp.appendChild(columnaTemp);
        }
        miTabla.appendChild(filaTemp);
      }
      return miTabla;
}

function manejadorClickTD(e) {
    if(this.style.backgroundColor === "red") {
        this.style.backgroundColor = "";
    }
    else {
        this.style.backgroundColor = "red";
    }
}

function manejadorClickInsertar(e) {
    let fila = document.getElementById("inFilasMod").value;
    let columna = document.getElementById("inColumnasMod").value;

    let celda = document.getElementById("miTabla_td_"+fila+"_"+columna);
    if(celda.style.backgroundColor === "red") {
        document.getElementById("inValor").value ="CELDA BLOQUEADA";
    }
    else {
        celda.innerHTML = document.getElementById("inValor").value;
    }
}