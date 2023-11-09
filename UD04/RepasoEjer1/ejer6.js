window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick() {
    document.getElementById("salida").innerHTML = "Has escrito: " + document.getElementById("entrada").value;
}


function crearPersona(nombres, apellidos, telefonos, edades) {
    let nombre = nombres;
    let apellido = apellidos;
    let telefono = telefonos || '555';
    let edad = edades || '0';
    console.log(`Nombre: ${nombre}, apellido: ${apellido}, teléfono: ${telefono}, edad: ${edad}`);
}

