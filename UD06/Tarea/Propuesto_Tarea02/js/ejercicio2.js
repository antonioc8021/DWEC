document.addEventListener("DOMContentLoaded", function () {
    function crearTabla(filas, columnas) {
        let tabla = document.createElement("table");
        tabla.id = "tabla";

        for (let i = 1; i <= filas; i++) {
            let fila = document.createElement("tr");

            for (let j = 1; j <= columnas; j++) {
                let celda = document.createElement("td");
                celda.textContent = "x";
                celda.addEventListener("click", function () {
                    toggleCelda(this);
                });
                fila.appendChild(celda);
            }

            tabla.appendChild(fila);
        }

        return tabla;
    }

    function toggleCelda(celda) {
        if (celda.style.backgroundColor === "red") {
            celda.style.backgroundColor = "";
        } else {
            celda.style.backgroundColor = "red";
        }
    }

    function insertarValor(fila, columna, valor) {
        let celda = obtenerCelda(fila, columna);

        if (celda && celda.style.backgroundColor !== "red") {
            celda.textContent = valor;
        } else {
            inputValor.value = "CELDA BLOQUEADA";
        }
    }

    function obtenerCelda(fila, columna) {
        let tabla = document.getElementById("tabla");
        if (tabla) {
            let filas = tabla.getElementsByTagName("tr");

            if (fila >= 1 && fila <= filas.length) {
                let celdas = filas[fila - 1].getElementsByTagName("td");

                if (columna >= 1 && columna <= celdas.length) {
                    return celdas[columna - 1];
                }
            }
        }

        return null;
    }

    let formularioTabla = document.createElement("form");

    let inputFilas = document.createElement("input");
    inputFilas.type = "number";
    inputFilas.placeholder = "Número de filas";
    formularioTabla.appendChild(inputFilas);

    let inputColumnas = document.createElement("input");
    inputColumnas.type = "number";
    inputColumnas.placeholder = "Número de columnas";
    formularioTabla.appendChild(inputColumnas);

    let botonCrearTabla = document.createElement("button");
    botonCrearTabla.type = "button";
    botonCrearTabla.textContent = "Crear tabla";
    botonCrearTabla.addEventListener("click", function () {
        let filas = parseInt(inputFilas.value);
        let columnas = parseInt(inputColumnas.value);

        let tablaExistente = document.getElementById("tabla");
        if (tablaExistente) {
            tablaExistente.remove();
        }

        let salida = document.getElementById("salida");
        salida.appendChild(crearTabla(filas, columnas));
    });

    formularioTabla.appendChild(inputFilas);
    formularioTabla.appendChild(inputColumnas);
    formularioTabla.appendChild(botonCrearTabla);
    document.body.appendChild(formularioTabla);

    let salidaTabla = document.createElement("div");
    salidaTabla.id = "salida";
    document.body.appendChild(salidaTabla);

    let formularioInsertar = document.createElement("form");

    let inputFila = document.createElement("input");
    inputFila.type = "number";
    inputFila.placeholder = "Fila";
    formularioInsertar.appendChild(inputFila);

    let inputColumna = document.createElement("input");
    inputColumna.type = "number";
    inputColumna.placeholder = "Columna";
    formularioInsertar.appendChild(inputColumna);

    let inputValor = document.createElement("input");
    inputValor.type = "text";
    inputValor.placeholder = "Valor";
    formularioInsertar.appendChild(inputValor);

    let botonInsertar = document.createElement("button");
    botonInsertar.type = "button";
    botonInsertar.textContent = "Insertar";
    botonInsertar.addEventListener("click", function () {
        let fila = parseInt(inputFila.value);
        let columna = parseInt(inputColumna.value);
        let valor = inputValor.value;

        insertarValor(fila, columna, valor);
    });

    formularioInsertar.appendChild(inputFila);
    formularioInsertar.appendChild(inputColumna);
    formularioInsertar.appendChild(inputValor);
    formularioInsertar.appendChild(botonInsertar);
    document.body.appendChild(formularioInsertar);
});