// Tarea DWEC03.01 - Ejercicio 3
// Antonio Sierra García

window.onload = principal;

function principal()
{
    actualizarRelojes();
    setInterval(actualizarRelojes,1000);
}

function tiempoVacaciones(fechaFin)
{
    let fechaActual = new Date();
    let msTotales = fechaFin-fechaActual;
    // milisegundos
    let milisegundos = msTotales%1000;
    msTotales = (msTotales - milisegundos)/1000;
    // segundos
    let segundos = msTotales%60;
    msTotales =(msTotales - segundos)/60;
    // minutos
    let minutos = msTotales%60;
    msTotales = (msTotales-minutos)/60;
    // horas
    let horas = msTotales%24;
    let dias = (msTotales-horas)/24;
    return dias + " días, " + horas + " horas, " + minutos + " minutos y " + segundos;
}

function actualizarRelojes()
{
    let fechaFin = new Date("2024-05-25");
    let fraseVacaciones =  tiempoVacaciones(fechaFin);
    document.getElementById("divVacaciones").innerHTML = fraseVacaciones;
    document.getElementById("divReloj").innerHTML = formateaHora(new Date());
}

function formateaHora(fecha)
{
    return fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
}