// let arrayNumeros = [1, 2, 3, 4, 5, 6, 7];


// Math.random() * range + start;


function generaSegundo() {
    let numero = Math.random() * (4) + 2;

    numero = Math.round(numero);

    return numero
}

let numero = generaSegundo();

// console.log(numero);

function restarSegundo() {
    let segundo = generaSegundo();
    for (let i = segundo; i >= 0; i--) {
        console.log(i);
        if (i === 0) {
            i = generaSegundo();
        }
    }
    return "Vas a tener que esperar: " + segundo + " segundos"
}

console.log(restarSegundo());


// setInterval(molestar, 500);
// setTimeout(decirHola, 2000);



// function molestar() {
//     console.warn("Soy un pesado");
// }

// function decirHola() {
//     console.log("Hola!");
// }