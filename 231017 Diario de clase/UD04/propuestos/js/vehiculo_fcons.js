function Vehiculo(tipo,marca,modelo,matricula,kilometros) {
    this._tipo = tipo;
    this._marca = marca;
    this._modelo = modelo;
    this._matricula = matricula;
    this._kilometros = kilometros || 0;

    this.toString = function()
                {
                    return  "Tipo: " + this._tipo + "\n" +
                            "Marca: " + this._marca + "\n" +
                            "Modelo: " + this._modelo + "\n" +
                            "Matrícula" + this._matricula + "\n" +
                            "km: " + this._kilometros + "\n";
                };
    this.concatenar = function(separador)
                {
                    return this._tipo + separador +
                                this._marca + separador +
                                this._modelo + separador +
                                this._matricula + separador +
                                this._kilometros + separador;
                };
    this.aumentarKM = function(kilometros)
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
    this.verificarNumero = function(numero)
                        {
                            let resultado = false;
                            if(!isNaN(numero))
                            {
                                resultado = true;
                            }
                            return resultado;
                        };
    this.verificarMatricula = function(matricula)
                        {
                            let resultado = false;
                            if(matricula.length === 6 || matricula.length === 7)
                            {
                                resultado = true;
                            }
                            return resultado;
                        };
    this.setTipo = function(entrada)
    {
        this._tipo = entrada;
    };
    this.getTipo = function()
    {
        return this._tipo;
    };
    this.setMarca = function(entrada)
    {
        this._marca = entrada;
    };
    this.getMarca = function()
    {
        return this._marca;
    };
    this.setModelo = function(entrada)
    {
        this._modelo = entrada;
    };
    this.getModelo = function()
    {
        return this._modelo;
    };
    this.setMatricula =  function(entrada)
    {
        if(this.verificarMatricula(entrada))
        {
            this._matricula = entrada;
        }
    };
    this.getMatricula = function()
    {
        return this._matricula;
    };
    this.setKilometros = function(entrada)
    {
        this._kilometros = entrada;
    };
    this.getKilometros = function()
    {
        return this._kilometros;
    };
}