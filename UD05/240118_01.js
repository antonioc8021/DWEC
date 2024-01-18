window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick() {
    let valorEntrada = document.getElementById("entrada").value;
    let coleccionrecientes = JSON.parse(localStorage.getItem("colRecientes"));

    if (coleccionrecientes === null) {
        coleccionrecientes = {};
    }

    let contador = 0;

    for (let clave in coleccionrecientes) {
        contador++;
    }

    coleccionrecientes["reciente" + contador] = valorEntrada;
    localStorage.setItem("colRecientes", JSON.stringify(coleccionrecientes));
    // console.log(coleccionrecientes); 

    // voy a actualizar el datalist del input de entrada
    let listado = "";
    for (let clave in coleccionrecientes) {
        listado += "<option>" + coleccionrecientes[clave] + "</option>";
    }



}