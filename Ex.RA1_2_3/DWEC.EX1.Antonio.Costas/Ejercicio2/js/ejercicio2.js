// Antonio Costas Salazar
// RA 2 y 3

window.onload = principal;
let segundo = generaSegundo();
let miIntervalo;

function principal() {
    document.getElementById("Parar").onclick = manejadorClick;
    miIntervalo = setInterval(restarSegundo, 1000);
    document.getElementById("divSalida").innerHTML = restarSegundo(segundo);
}

function manejadorClick() {

}

function generaSegundo() {
    let numero = Math.random() * (4) + 2;
    numero = Math.round(numero);
    return numero
}

function restarSegundo() {
    segundo--;
    if (segundo === 0) {
        segundo = generaSegundo();
    }
    // for (let i = segundo; i >= 0; i--) {
    //     console.log(i);
    //     if (i === 0) {
    //         i = generaSegundo();
    //     }
    // }
    document.getElementById("divSalida").innerHTML = "Vas a tener que esperar: " + segundo + " segundos"

}

