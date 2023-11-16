// obejto literal de 3 niveles que se contiene el tipo de vehículo, la marca y el modelo.
let vehiculo =
{
    Coche:
    {
        Mercedes: ['ClaseA', 'Clase B', 'Clase C', 'ClaseD'],
        Bmw: ['Serie 1', 'Serie2', 'Serie 3', 'Serie 4'],
        Audi: ['A1', 'A2', 'A3', 'A4'],
        Volkswagen: ['Polo', 'Golf'],
        Seat: ['Toledo', 'Leon', 'Ibiza', 'Ateca']
    },

    Moto:
    {
        Yamaha: ['R125', 'XMAX', 'Tracer 9', 'YZ'],
        Honda: ['Africa twin', 'NX', 'CRF', 'CB1000'],
        Kymco: ['SuperDink', 'GranDink']
    },
    Camion:
    {
        Volvo: ['Modelo Guay', 'El otro modelo'],
        Pegaso: ['Yoquese', 'El grande', 'Canyonero']
    },
    Lancha:
    {
        Regina: ['La que flota', 'La que no'],
        Yamaha: ['Minúsculo', 'La rápida', 'Cosas de lanchas']
    },
    Avionetas:
    {
        Canario: ['Amarillo', 'Azul', 'Rojo'],
        Cotorra: ['Pesada', 'Cantante', 'Muda']
    }
}

function vehiculoAleatorio(vehiculo) {
    let tipo = Object.keys(vehiculo)[generaAleatorio(0, Object.keys(vehiculo).length - 1)];
    let marca = Object.keys(vehiculo | tipo)[generaAleatorio(0, Object.keys(vehiculo[tipo]).length - 1)];
    let modelo = vehiculo[tipo][marca][generaAleatorio(0, vehiculo[tipo][marca].length - 1)];

    return [tipo, marca, modelo];
}



function generaAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

