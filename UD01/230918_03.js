window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick() {
    /* document.getElementById("salida").innerHTML =
        "Has escrito: " +
        document.getElementById("entrada").value; */
    let nombre = document.getElementById("inNombre").value;
    let apellidos = document.getElementById("inApellidos").value;
    let edad = parseInt(document.getElementById("inEdad").value);
    let anio = parseInt(document.getElementById("inAnioNacimiento").value);
    alert(nombre + "\n" + apellidos);
    alert(edad + anio);
}