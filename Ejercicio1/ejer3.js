// Tarea DAWC03.01 - Ejercicio 3
// Antonio Costas Salazar

window.onload = principal;

function principal() {
    actualizarReloj();
    setInterval(actualizarReloj, 1000);
    reloj();
    setInterval(reloj, 1000);
}

function horaActual() {
    let ahora = new Date();
    let horas = ahora.getHours().toString().padStart(2, '0');
    let minutos = ahora.getMinutes().toString().padStart(2, '0');
    let segundos = ahora.getSeconds().toString().padStart(2, '0');
    return `${horas}:${minutos}:${segundos}`;
}

function reloj() {
    document.getElementById("divReloj").innerHTML = horaActual();

}

function tiempoVacaciones(fechaFin) {
    let fechaActual = new Date();
    let msTotales = fechaFin - fechaActual;
    // milisegundos
    let milisegundos = msTotales % 1000;
    msTotales = (msTotales - milisegundos) / 1000;
    // segundos
    let segundos = msTotales % 60;
    msTotales = (msTotales - segundos) / 60;
    // minutos
    let minutos = msTotales % 60;
    msTotales = (msTotales - minutos) / 60;
    // horas
    let horas = msTotales % 24;
    let dias = (msTotales - horas) / 24;

    return dias + " días, " + horas + " horas, " + minutos + " minutos, " + segundos + " segundos, ";
}


function actualizarReloj() {
    let fechaFin = new Date("2024-01-01");
    let frasesVacaciones = tiempoVacaciones(fechaFin);
    document.getElementById("divVacaciones").innerHTML = frasesVacaciones;
}
