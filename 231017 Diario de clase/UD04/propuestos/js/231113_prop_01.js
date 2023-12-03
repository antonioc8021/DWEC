var nombres = ["Antonio","Ana","Jorge","Santiago","Carlos","Elena","juan","María","Paco","Maribel"];
var apellidos = ["García","Gutierrez","Sierra","Diez","Abascal","Rajoy","Sanchez","Zapatero","Aguita"];

function generaAleatorio(min, max) 
{
    return Math.round(Math.random() * (max - min) + min);
}

function generarDNI()
{
    let letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let resultado = "";
    for(let i=0; i<8; i++)
    {
        resultado += generaAleatorio(0,9);
    }
    resultado += letrasDNI[generaAleatorio(0,letrasDNI.length-1)];
    return resultado;
}

function generarFechaNacimiento()
{
    let fecha = new Date();
    fecha.setFullYear(generaAleatorio(1990,2020));
    fecha.setMonth(generaAleatorio(1,12));
    fecha.setDate(generaAleatorio(1,30));
    return fecha;
}

var coleccion = [];
var coleccion2 = [];

for(let i=0; i<500; i++)
{
    let instancia =  new Object();
    instancia["nombre"] = nombres[generaAleatorio(0,nombres.length -1)];
    instancia["apellidos"] = apellidos[generaAleatorio(0,apellidos.length -1)] + " " 
                                +apellidos[generaAleatorio(0,apellidos.length -1)];
    instancia["id"] = generarDNI();
    instancia["email"] = (instancia["nombre"].substring(0,1)+instancia["apellidos"].split(" ")[0] + "@miinstituto.es").toLowerCase();
    instancia["fechaNacimiento"] = generarFechaNacimiento(),
    instancia["toString"] = function()
                            {
                                let resultado = "";
                                resultado += "Nombre: " + this.nombre +"\n";
                                resultado += "Apellidos: " + this.apellidos +"\n";
                                resultado += "ID: " + this.id +"\n";
                                resultado += "email: " + this.email +"\n";
                                return resultado;
                            };
    instancia["concatenar"] = function(separador)
                            {
                                let resultado = this.nombre + separador
                                                + this.apellidos + separador
                                                + this.id + separador
                                                + this.email;
                                return resultado;
                            }
    coleccion.push(instancia);
}

for(let i=0; i<20; i++)
{
    let instancia =  
    {    
        _nombre: nombres[generaAleatorio(0,nombres.length -1)],
        _apellidos: apellidos[generaAleatorio(0,apellidos.length -1)] + " "
                                    + apellidos[generaAleatorio(0,apellidos.length -1)],
        _id: generarDNI(),
        // email: (this.nombre.substring(0,1)+this.apellidos.split(" ")[0] + "@miinstituto.es").toLowerCase(),
        toString: function()
                            {
                                let resultado = "";
                                resultado += "Nombre: " + this._nombre +"\n";
                                resultado += "Apellidos: " + this._apellidos +"\n";
                                resultado += "ID: " + this._id +"\n";
                                resultado += "email: " + this._email +"\n";
                                return resultado;
                            },
        setNombre: function(nombreNuevo)
        {
            this._nombre = nombreNuevo;
        },
        getNombre: function()
        {
            return this._nombre;
        },
        set nombre(nombreNuevo)     
        {
            console.warn("Están modificando el nombre");
            this._nombre = nombreNuevo;
        },
        get nombre()    
        {
            console.warn("Están accediendo al nombre");
            return this._nombre;
        },
        set apellidos(apellidosNuevos)     
        {
            this._apellidos = apellidosNuevos;
        },
        get apellidos()    
        {
            return this._apellidos;
        },
        set email(idEmail)     
        {
            this._email = idEmail;
        },
        get email()    
        {
            return this._email;
        },
        set id(idNuevo)     
        {
            if(this._verificarDNI(idNuevo))
            {
                this._id = idNuevo;
            }
            else
            {
                console.error("El ID indicado no es un DNI válido");
            }
        },
        get id()    
        {
            return this._id;
        },
        _verificarDNI: function(dni)
        {
            let resultado = false;
            if(dni.length === 9)
            {
                resultado = true;
            }
            return resultado;
        }
    }
    instancia["_email"] = (instancia["_nombre"].substring(0,1)+instancia["_apellidos"].split(" ")[0] 
                            + "@miinstituto.es").toLowerCase();
    coleccion2.push(instancia);
}

var mueble1 =
    {
        nomre: "Armario",
        precio: 150,
        dimensiones:
            {
                altura: 1.80,
                anchura: 2,
                profundidad: 1
            }
    }