/// Creación aleatoria

var vehiculos =
    {
        Coche: 
            {
                Ford: ["Modeo","Escort","Kuga","Fiesta","Focus","Moustang"],
                Nissan: ["NV200","Micra","Juke","Qashquais"],
                Renault: ["Clio","Megane","Kangu"],
                Volswagen: ["Polo","Golf"],
                Seat: ["Toledo","Leon","Ibiza","Ateca"]
            },
        Moto:
            {
                Kymco: ["SuperDink","GranDink"],
                Yamaha: ["YBR","MT09","T Max","X Max","N Max"]
            },
        Camion:
            {
                Volvo: ["Modelo Guay","El otro modelo"],
                Pegaso: ["Yoquese","El grande", "Canyonero"],
                Volswagen: ["Polarizado","El Golfo"]
            },
        Lancha:
            {
                Regina: ["La que flota","La que no"],
                Yamaha: ["Minúsculo","La rápida","Cosas de lanchas"]
            },
        Avionetas:
            {
                Canario: ["Amarillo","Azul","Rojo"],
                Cotorra: ["Pesada","Cantante","Muda","Caballo alado"],
                Renault: ["Vuelabajo","Él","Alado","Pegaso"]
            }
    };

function vehiculoAleatorio(vehiculos)
{
    let tipo = Object.keys(vehiculos)[generaAleatorio(0,Object.keys(vehiculos).length -1)];
    let marca = Object.keys(vehiculos[tipo])[generaAleatorio(0,Object.keys(vehiculos[tipo]).length-1)];
    let modelo = vehiculos[tipo][marca][generaAleatorio(0,vehiculos[tipo][marca].length-1)];
    
    return [tipo,marca,modelo];    
}

function generaAleatorio(min, max) 
{
    return Math.round(Math.random() * (max - min) + min);
}

function matriculaAleatoria()
{
    let letras = "QWRTYPSDFGHJKLZXCVBNM";
    let resultado = generaAleatorio(0,9999).toString().padStart(4,"0") 
                        + letras[generaAleatorio(0,letras.length-1)] + letras[generaAleatorio(0,letras.length-1)]
                        + letras[generaAleatorio(0,letras.length-1)];
    return resultado;
}


/// Crear instancias

var misVehiculos = [];

var numVehiculos = 10;

for(let i=0; i< numVehiculos;i++)
{
    let datosAleatorios = vehiculoAleatorio(vehiculos);

    let vehTempo = {
        _tipo:       datosAleatorios[0],
        _marca:      datosAleatorios[1],
        _modelo:     datosAleatorios[2],
        _matricula:  matriculaAleatoria(),
        _kilometros: 0,
        toString:   function()
                    {
                        return  "Tipo: " + this._tipo + "\n" +
                                "Marca: " + this._marca + "\n" +
                                "Modelo: " + this._modelo + "\n" +
                                "Matrícula" + this._matricula + "\n" +
                                "km: " + this._kilometros + "\n";
                    },
        concatenar: function(separador)
                    {
                        return this._tipo + separador +
                                    this._marca + separador +
                                    this._modelo + separador +
                                    this._matricula + separador +
                                    this._kilometros + separador;
                    },
        aumentarKM: function(kilometros)
                    {
                        if(this.verificarNumero(kilometros))
                        {
                            this._kilometros += kilometros;
                            return this._kilometros;
                        }
                        else
                        {
                            return "Kilómetros erróneos";
                        }
                    },
        verificarNumero:    function(numero)
                            {
                                let resultado = false;
                                if(!isNaN(numero))
                                {
                                    resultado = true;
                                }
                                return resultado;
                            },
        verificarMatricula: function(matricula)
                            {
                                let resultado = false;
                                if(matricula.length === 6 || matricula.length === 7)
                                {
                                    resultado = true;
                                }
                                return resultado;
                            },
        set tipo(entrada)
        {
            this._tipo = entrada;
        },
        get tipo()
        {
            return this._tipo;
        },
        set marca(entrada)
        {
            this._marca = entrada;
        },
        get marca()
        {
            return this._marca;
        },
        set modelo(entrada)
        {
            this._modelo = entrada;
        },
        get modelo()
        {
            return this._modelo;
        },
        set matricula(entrada)
        {
            if(this.verificarMatricula(entrada))
            {
                this._matricula = entrada;
            }
        },
        get matricula()
        {
            return this._matricula;
        },
        set kilometros(entrada)
        {
            this._kilometros = entrada;
        },
        get kilometros()
        {
            return this._kilometros;
        }
    }
    misVehiculos.push(vehTempo);
}