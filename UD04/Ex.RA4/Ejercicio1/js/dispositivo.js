function Dispositivo(id, autonomia, carga) {
    this._id = id || "NOID";
    this._autonomia = autonomia || 0;
    this._carga = carga || 0;
}

// métodos de la clase:
Dispositivo.prototype.verificarID = function (id) {
    let verificador = false;
    if (id.length >= 10) {
        verificador = true;
    }
    return verificador;
}


Dispositivo.prototype.horasRestantes = function (uso) {
    return uso * this._autonomia * this._carga / 100;
}


// getters y setters
Dispositivo.prototype.setId = function (id) {
    id = id.toUpperCase();
    if (this.verificarID(id)) {
        this._id = id
    }
}

Dispositivo.prototype.getId = function () {
    return this._id;
}

Dispositivo.prototype.setAutonomia = function (autonomia) {
    this._autonomia = autonomia;
}

Dispositivo.prototype.getAutonomia = function () {
    return this._autonomia;
}

Dispositivo.prototype.setCarga = function (carga) {
    if ((carga >= 0) && (carga <= 100)) {
        this._carga = carga;
    }
}

Dispositivo.prototype.getCarga = function () {
    return this._carga;
}

// toString
Dispositivo.prototype.toString = function () {
    return `DISP: id->${this._id}; autonomia->${this._autonomia}; carga->${this._carga}`;
}