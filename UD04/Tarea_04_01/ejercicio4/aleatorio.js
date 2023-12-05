// abuso del math.random por todo el documento para que sea realmente aleatorio

function generarId() {
    // si no le hago el toString da error al intentar juntar un numero y un string
    return "ELEC-" + Math.floor(Math.random() * 100000).toString();
}

function generarModelo() {
    let modelos = ["Marca1", "Marca2", "Marca3"];
    return modelos[Math.floor(Math.random() * modelos.length)];
}

function generarConsumo() {
    return Math.floor(Math.random() * 10) + 1;
}

function generarBajoConsumo() {
    return Math.random() < 0.5;
}

function generarCapacidad() {
    return Math.floor(Math.random() * 10) + 1;
}

function generarTipoCarga() {
    return Math.floor(Math.random() * 3);
}


let objetosAleatorios = [];
for (let i = 0; i < 10; i++) {
    let id = generarId();
    let modelo = generarModelo();
    let consumo = generarConsumo();

    // esto lo que hace es darle un 50% de opciones de que sea lavadora 
    let lavadora = Math.random() < 0.5;
    let objeto;

    if (lavadora) {
        let bajoConsumo = generarBajoConsumo();
        let capacidad = generarCapacidad();
        let tipoCarga = generarTipoCarga();
        objeto = Lavadora.crear(id, modelo, consumo, bajoConsumo);
        objeto.setCapacidad(capacidad);
        objeto.setTipoCarga(tipoCarga);
    } else {
        objeto = Electrodomestico.crear(id, modelo, consumo);
    }

    objetosAleatorios.push(objeto);
}

// Imprimir los objetos aleatorios
objetosAleatorios.forEach((objeto, index) => {
    console.log(`Objeto ${index + 1}:`, objeto.toString());
});
