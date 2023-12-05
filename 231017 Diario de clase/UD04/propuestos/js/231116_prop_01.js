/// Creación aleatoria

var vehiculos =
{
    Coche:
    {
        Ford: ["Modeo", "Escort", "Kuga", "Fiesta", "Focus", "Moustang"],
        Nissan: ["NV200", "Micra", "Juke", "Qashquais"],
        Renault: ["Clio", "Megane", "Kangu"],
        Volswagen: ["Polo", "Golf"],
        Seat: ["Toledo", "Leon", "Ibiza", "Ateca"]
    },
    Moto:
    {
        Kymco: ["SuperDink", "GranDink"],
        Yamaha: ["YBR", "MT09", "T Max", "X Max", "N Max"]
    },
    Camion:
    {
        Volvo: ["Modelo Guay", "El otro modelo"],
        Pegaso: ["Yoquese", "El grande", "Canyonero"],
        Volswagen: ["Polarizado", "El Golfo"]
    },
    Lancha:
    {
        Regina: ["La que flota", "La que no"],
        Yamaha: ["Minúsculo", "La rápida", "Cosas de lanchas"]
    },
    Avionetas:
    {
        Canario: ["Amarillo", "Azul", "Rojo"],
        Cotorra: ["Pesada", "Cantante", "Muda", "Caballo alado"],
        Renault: ["Vuelabajo", "Él", "Alado", "Pegaso"]
    }
};

function vehiculoAleatorio(vehiculos) {
    let tipo = Object.keys(vehiculos)[generaAleatorio(0, Object.keys(vehiculos).length - 1)];
    let marca = Object.keys(vehiculos[tipo])[generaAleatorio(0, Object.keys(vehiculos[tipo]).length - 1)];
    let modelo = vehiculos[tipo][marca][generaAleatorio(0, vehiculos[tipo][marca].length - 1)];

    return [tipo, marca, modelo];
}

function generaAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function matriculaAleatoria() {
    let letras = "QWRTYPSDFGHJKLZXCVBNM";
    let resultado = generaAleatorio(0, 9999).toString().padStart(4, "0")
        + letras[generaAleatorio(0, letras.length - 1)] + letras[generaAleatorio(0, letras.length - 1)]
        + letras[generaAleatorio(0, letras.length - 1)];
    return resultado;
}


/// Crear instancias

var misVehiculos = [];

var numVehiculos = 10;

for (let i = 0; i < numVehiculos; i++) {
    let datosAleatorios = vehiculoAleatorio(vehiculos);
    let vehTemp = new Vehiculo(datosAleatorios[0], datosAleatorios[1],
        datosAleatorios[2], matriculaAleatoria());
    misVehiculos.push(vehTemp);
}