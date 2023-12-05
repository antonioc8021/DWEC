function Electrodomestico(id, modelo, consumo) {
    this._id = id || "NOID";
    this._modelo = modelo || "NOMOD";
    this._consumo = consumo || 1;
}

Electrodomestico.prototype.verificarID = function (id) {
    let resultado = false;
    if (id.startswith("ELEC-") && id.length >= 10 && id.length <= 20) {
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

// getters y setters:
Electrodomestico.prototype.setID = function (id) {
    if (this.verificarID(id)) {
        this._id = id.toUpperCase();
    }
}

Electrodomestico.prototype.getID = function () {
    return this._id;
}

Electrodomestico.prototype.setModelo = function (modelo) {
    modelo = modelo.toUpperCase();
    if (modelo.length >= 6) {
        this._modelo = modelo;
    }
}

Electrodomestico.prototype.getModelo = function () {
    return this._modelo;
}

Electrodomestico.prototype.setConsumo = function (consumo) {
    if (Number.isInteger(consumo) && consumo >= 1) {
        this._consumo = consumo;
    }
}

Electrodomestico.prototype.getConsumo = function () {
    return this._consumo;
}

// toString:
Electrodomestico.prototype.toString = function () {
    return `ELEC: ${this._id} ${this._modelo} ${this._consumo}`;
}

let electro1 = new Electrodomestico("1415", "lavadora", "2.3");
console.log(electro1);