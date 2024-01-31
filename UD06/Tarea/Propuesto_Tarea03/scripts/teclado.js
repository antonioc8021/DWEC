window.addEventListener("load", principal, false);

// APARTADO 1
function principal(e) {
    let teclado = document.getElementById("teclado");
    let teclitas = teclado.childNodes;

    document.body.addEventListener("keydown", pulsarTecla);
    document.body.addEventListener("keyup", soltarTecla);

    for (let i = 0; i < teclitas.length; i++) {
        console.log(teclitas[i]);

        teclitas[i].addEventListener("mouseover", entrarTecla);
        teclitas[i].addEventListener("mouseout", salirTecla);

        teclitas[i].addEventListener("mousedown", pulsarClick);
        teclitas[i].addEventListener("mouseup", soltarClick);

    }
}

// APARTADO 2
function pulsarTecla(e) {
    let codigo = e.code;
    let id = "tecla" + codigo;

    let tecla = document.getElementById(id);

    tecla.style.background = "lightgreen";

    let txt = "Code es: " + e.code + "<br> Key es: " + e.key;
    document.getElementById("salida").innerHTML = txt;
}

function soltarTecla(e) {
    let codigo = e.code;
    let id = "tecla" + codigo;

    let tecla = document.getElementById(id);

    if (tecla.style.background === "lightgreen") {
        tecla.style.background = "";
    }

    document.getElementById("salida").innerHTML = "";

}

// APARTADO 3
function entrarTecla(e) {
    this.style.background = "red";

    let idTecla = this.id;
    let valor = document.getElementById(idTecla).value;

    document.getElementById("salida").innerHTML = valor;

}

function salirTecla(e) {
    this.style.background = "";


    document.getElementById("salida").innerHTML = "";

}

// APARTADO 4
function pulsarClick(e) {
    this.style.background = "lightblue";

    let idTecla = this.id;
    let valor = document.getElementById(idTecla).value;
    valor += " PULSADA";

    document.getElementById("salida").innerHTML = valor;
}

function soltarClick(e) {
    this.style.background = "";

    let idTecla = this.id;
    let valor = document.getElementById(idTecla).value;

    document.getElementById("salida").innerHTML = valor;

}