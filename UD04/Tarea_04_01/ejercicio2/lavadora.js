function Lavadora(id, modelo, consumo, bajoConsumo) {
    Electrodomestico.call(this, id, modelo, consumo);
    this._bajoConsumo = bajoConsumo;
}

Lavadora.prototype = new Electrodomestico();
Lavadora.prototype.constructor = Lavadora;

Lavadora.prototype.calcularConsumo = function (horas) {
    let consumoElectro;
    if (this._bajoConsumo) {
        return consumoElectro / 2;
    } else {
        return consumoElectro * this.horas;
    }
}

// Setters y Getters específicos de Lavadora
Lavadora.prototype.setCapacidad = function (valor) {
    if (Number.isInteger(valor) && valor >= 1) {
        this._capacidad = valor;
    }
}

Lavadora.prototype.getCapacidad = function () {
    return this._capacidad;
}

Lavadora.prototype.setBajoConsumo = function (valor) {
    this._bajoConsumo = valor;
}

Lavadora.prototype.getBajoConsumo = function () {
    return this._bajoConsumo;
}

Lavadora.prototype.setTipoCarga = function (tipo) {
    if (tipo >= 0 && tipo <= 2) {
        this._tipoCarga = tipo;
    } else {
        this._tipoCarga = 0;
    }
}

Lavadora.prototype.getTipoCarga = function () {
    return this._tipoCarga;
}

Lavadora.prototype.getTipoCargaTexto = function () {
    return this._tipoCarga[this._tipoCarga];
}

// toString
Lavadora.prototype.toString = function () {
    let electroString = Electrodomestico.prototype.toString.call(this);
    return `${electroString} ${this._capacidad} ${this._bajoConsumo}`;
}

let antonio = new Lavadora("1510", "samsung", "2", "1");
console.log(antonio);