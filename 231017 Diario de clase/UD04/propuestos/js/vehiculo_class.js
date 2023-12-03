class Vehiculo
{
    constructor(tipo,marca,modelo,matricula,kilometros) {
        this._tipo = tipo;
        this._marca = marca;
        this._modelo = modelo;
        this._matricula = matricula;
        this._kilometros = kilometros || 0;
    }

    toString()
                {
                    return  "Tipo: " + this._tipo + "\n" +
                            "Marca: " + this._marca + "\n" +
                            "Modelo: " + this._modelo + "\n" +
                            "Matrícula" + this._matricula + "\n" +
                            "km: " + this._kilometros + "\n";
                };
    concatenar(separador)
                {
                    return this._tipo + separador +
                                this._marca + separador +
                                this._modelo + separador +
                                this._matricula + separador +
                                this._kilometros + separador;
                };
    aumentarKM(kilometros)
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
                };
    verificarNumero(numero)
                        {
                            let resultado = false;
                            if(!isNaN(numero))
                            {
                                resultado = true;
                            }
                            return resultado;
                        };
    verificarMatricula(matricula)
                        {
                            let resultado = false;
                            if(matricula.length === 6 || matricula.length === 7)
                            {
                                resultado = true;
                            }
                            return resultado;
                        };
    set tipo(entrada)
    {
        this._tipo = entrada;
    };
    get tipo()
    {
        return this._tipo;
    };
    set marca(entrada)
    {
        this._marca = entrada;
    };
    get marca()
    {
        return this._marca;
    };
    set modelo(entrada)
    {
        this._modelo = entrada;
    };
    get modelo()
    {
        return this._modelo;
    };
    set matricula(entrada)
    {
        if(this.verificarMatricula(entrada))
        {
            this._matricula = entrada;
        }
    };
    get matricula()
    {
        return this._matricula;
    };
    set kilometros(entrada)
    {
        this._kilometros = entrada;
    };
    get kilometros()
    {
        return this._kilometros;
    };
}