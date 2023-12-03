function Electrodomestico(id, modelo, consumo) {
    this._id = id || "NOID";
    this._modelo = modelo || "NOMOD";
    this._consumo = consumo;
}

Electrodomestico.prototype = {
    set id(nuevoId) {
        nuevoId = nuevoId.toUpperCase();
        if (this.verificarID(nuevoId)) {
            this._id = nuevoId;
        }
    },
    get id() {
        return this._id;
    },
    set modelo(nuevoModelo) {
        nuevoModelo = nuevoModelo.toUpperCase();
        if (nuevoModelo.length >= 6) {
            this._modelo = nuevoModelo;
        }
    },
    get modelo() {
        return this._modelo
    },
    set consumo(nuevoConsumo) {

    }
}

Electrodomestico.prototype.toString = function () {
    return "ELEC" + this._id + "; " + this._modelo + "; " + this._consumo + ";";
}


Electrodomestico.prototype.verificarID = function (id) {
    let resultado = false;
    if (id.startswith("ELEC - ") && id.length >= 10 && id.length <= 20) {
        resultado = true;
    }
    return resultado;
}

Electrodomestico.prototype.calcularConsumo = function (horas) {
    let resultado = -1;
    if (horas >= 0) {
        resultado = horas * this._consumo;
    }
    return resultado;
}