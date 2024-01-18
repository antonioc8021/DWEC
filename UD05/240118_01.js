window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick() {
    let valorEntrada = document.getElementById("entrada").value;

    anadirListaRecientes(valorEntrada);

    actualizarListaRecientes();
}


function anadirListaRecientes(busqueda) {
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
}


function actualizarListaRecientes() {
    let coleccionrecientes = JSON.parse(localStorage.getItem(("colRecientes")) || {});
    // El or mas las llaves hace exactamente lo mismo que la condición de abajo
    // if (coleccionrecientes === null) {
    //     coleccionrecientes = {};
    // }
    let listado = "";
    for (let clave in coleccionrecientes) {
        listado += "<option>" + coleccionrecientes[clave] + "</option>";
    }
    document.getElementById("listaRecientes").innerHTML = listado;

}



