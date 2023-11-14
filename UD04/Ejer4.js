// array de tres niveles, en el primero declaro el tipo de vehículo, en el segundo la marca y en el tercero el modelo de cada marca.
let _vehiculo = [
    ['Coche'['Mercedes'['ClaseA', 'Clase B', 'Clase C', 'ClaseD'],
        'BMW'['Serie 1', 'Serie2', 'Serie 3', 'Serie 4'],
        'Audi'['A1', 'A2', 'A3', 'A4']],
    'Moto'['Yamaha'['R125', 'XMAX', 'Tracer 9', 'YZ'],
    'Honda'['Africa twin', 'NX', 'CRF', 'CB1000'],
    'BMW'['']],
    'Camión'['Volvo'[''],
    'Mercedes'[''],
    'Iveco'['']]]
]

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

function generaAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

