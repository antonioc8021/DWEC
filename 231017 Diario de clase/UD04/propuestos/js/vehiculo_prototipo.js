function Vehiculo(tipo, marca, modelo, matricula, kilometros) {
    this._tipo = tipo;
    this._marca = marca;
    this._modelo = modelo;
    this._matricula = matricula;
    this._kilometros = kilometros || 0;
}

Vehiculo.prototype = {
    set tipo(entrada) {
        this._tipo = entrada;
    },
    get tipo() {
        return this._tipo;
    },
    set marca(entrada) {
        this._marca = entrada;
    },
    get marca() {
        return this._marca;
    },
    set modelo(entrada) {
        this._modelo = entrada;
    },
    get modelo() {
        return this._modelo;
    },
    set matricula(entrada) {
        if (this.verificarMatricula(entrada)) {
            this._matricula = entrada;
        }
    },
    get matricula() {
        return this._matricula;
    },
    set kilometros(entrada) {
        this._kilometros = entrada;
    },
    get kilometros() {
        return this._kilometros;
    }
}

Vehiculo.prototype.toString = function () {
    return "Tipo: " + this._tipo + "\n" +
        "Marca: " + this._marca + "\n" +
        "Modelo: " + this._modelo + "\n" +
        "Matrícula" + this._matricula + "\n" +
        "km: " + this._kilometros + "\n";
};
Vehiculo.prototype.concatenar = function (separador) {
    return this._tipo + separador +
        this._marca + separador +
        this._modelo + separador +
        this._matricula + separador +
        this._kilometros + separador;
};
Vehiculo.prototype.aumentarKM = function (kilometros) {
    if (this.verificarNumero(kilometros)) {
        this._kilometros += kilometros;
        return this._kilometros;
    }
    else {
        return "Kilómetros erróneos";
    }
};
Vehiculo.prototype.verificarNumero = function (numero) {
    let resultado = false;
    if (!isNaN(numero)) {
        resultado = true;
    }
    return resultado;
};
Vehiculo.prototype.verificarMatricula = function (matricula) {
    let resultado = false;
    if (matricula.length === 6 || matricula.length === 7) {
        resultado = true;
    }
    return resultado;
};
Vehiculo.prototype.setTipo = function (entrada) {
    this._tipo = entrada;
};
Vehiculo.prototype.getTipo = function () {
    return this._tipo;
};
Vehiculo.prototype.setMarca = function (entrada) {
    this._marca = entrada;
};
Vehiculo.prototype.getMarca = function () {
    return this._marca;
};
Vehiculo.prototype.setModelo = function (entrada) {
    this._modelo = entrada;
};
Vehiculo.prototype.getModelo = function () {
    return this._modelo;
};
Vehiculo.prototype.setMatricula = function (entrada) {
    if (this.verificarMatricula(entrada)) {
        this._matricula = entrada;
    }
};
Vehiculo.prototype.getMatricula = function () {
    return this._matricula;
};
Vehiculo.prototype.setKilometros = function (entrada) {
    this._kilometros = entrada;
};
Vehiculo.prototype.getKilometros = function () {
    return this._kilometros;
};
