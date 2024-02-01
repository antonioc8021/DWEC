window.addEventListener("load",principal);

function principal(e)
{
    let elemento = document.createTextNode("Nº Divisiones: ");
    document.body.appendChild(elemento);
    elemento = crearElemento("input",undefined,["type","text"],["id","inDiv"]);
    document.body.appendChild(elemento);

    elemento = document.createTextNode("Nº Párrafos: ");
    document.body.appendChild(elemento);
    elemento = crearElemento("input",undefined,["type","text"],["id","inPar"]);
    document.body.appendChild(elemento);

    elemento = document.createTextNode("Nº Elementos lista: ");
    document.body.appendChild(elemento);
    elemento = crearElemento("input",undefined,["type","text"],["id","inLi"]);
    document.body.appendChild(elemento);

    elemento = crearElemento("input",undefined,["type","button"],["id","inCrear"],["value","Crear"]);
    elemento.addEventListener("click",crearContenidos);
    document.body.appendChild(elemento);

    elemento = crearElemento("div",undefined,["id","salida"]);
    document.body.appendChild(elemento);
}

function crearContenidos(e)
{
    document.getElementById("salida").innerHTML = "";

    let nDiv = parseInt(document.getElementById("inDiv").value);
    let nPar = parseInt(document.getElementById("inPar").value);
    let nLi = parseInt(document.getElementById("inLi").value);

    for(let i = 0; i < nDiv; i++)
    {
        let divisionNueva = crearElemento("div","División " + i,["id","div"+i]);
		divisionNueva.addEventListener("click", manejadorClick);
        for(let j=0; j< nPar; j++)
        {
            let parrafoNuevo = crearElemento("p","Párrafo "+i+"-"+j,["id","p"+i+"-"+j]);
			parrafoNuevo.addEventListener("click", manejadorClick);
            divisionNueva.appendChild(parrafoNuevo);
        }

        let listadoNuevo = crearElemento("ul",undefined,["id","ul"+i]);
		listadoNuevo.addEventListener("click", manejadorClick);
        for(let j=0; j<nLi; j++)
        {
            let elementNuevo = crearElemento("li","Elemento "+i+"-"+j,["id","li"+i+"-"+j]);
			elementNuevo.addEventListener("click", manejadorClick);
            listadoNuevo.appendChild(elementNuevo);
        }
        divisionNueva.appendChild(listadoNuevo);
        document.getElementById("salida").appendChild(divisionNueva);
    }
}

function manejadorClick(e) {
	e.stopPropagation();
	this.parentNode.removeChild(this);
}

function crearElemento()
{
    let elementoNuevo = document.createElement(arguments[0]);
    if(arguments[1] !== undefined)
    {
        let contenidoTexto = document.createTextNode(arguments[1]);
        elementoNuevo.appendChild(contenidoTexto);
    }
    for(let i=2;i<arguments.length;i++)
    {   
        // console.log(arguments[i]);
        elementoNuevo.setAttribute(arguments[i][0],arguments[i][1]);
    }

    return elementoNuevo;
}