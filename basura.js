let arrayNumeros = [1, 2, 3, 4, 5, 6, 7];


// Math.random() * range + start;

console.log(Math.random() * 4 + 3);


setInterval(molestar, 500);
setTimeout(decirHola, 2000);



function molestar() {
    console.warn("Soy un pesado");
}

function decirHola() {
    console.log("Hola!");
}