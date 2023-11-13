var nombres = ["Antonio", "Ana", "Jorge", "Santiago", "Carlos", "Elena", "Juan", "Maria", "Paco", "Maribel"];
var apellidos = ["Gacía", "Gutierrez", "Sierra", "Diez", "Abascal", "Rajoy", "Sanchez", "Zapatero", "Aguita"];

function generarAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

var coleccion = [];

for (let i = 0; i < 20; i++) {
    let instacia = new Object();
    instacia["nombre"] = nombres[generarAleatorio(0, nombres.length - 1)];

    coleccion.push(instacia);
}
