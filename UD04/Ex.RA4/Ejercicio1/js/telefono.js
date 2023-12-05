function Telefono(pulgadas, tipoPanel) {
    this._pulgadas = pulgadas || 0;
    this._tipoPanel = tipoPanel || 0;
    this._tiposPanelArr = ["OLED", "AMOLED", "QLED", "NanoCell"];
}

Telefono.prototype = new Dispositivo();
Telefono.prototype.constructor = Telefono;

// métodos de la clase:
Telefono.prototype.verificarID = function (id) {
    let verificador = false;
    if ((id.length >= 10) && (id.length <= 20)) {
        verificador = true;
    }
    return verificador;
}


// getters y setters
Telefono.prototype.setPulgadas = function (pulgadas) {
    this._pulgadas = pulgadas;
}

Telefono.prototype.getPulgadas = function () {
    return this._pulgadas;
}

Telefono.prototype.setTipoPanel = function (tipoPanel) {
    if ((tipoPanel < 0) && (tipoPanel > 3)) {
        this._tipoPanel = 0;
    } else {
        this._tipoPanel = tipoPanel;
    }
}

Telefono.prototype.getTipoPanel = function () {
    return this._tiposPanelArr[this._tipoPanel];
}

// toString:
Telefono.prototype.toString = function () {
    let dispoString = Dispositivo.prototype.toString.call(this);
    return `${dispoString} ${this._pulgadas} ${this._tipoPanel}`;
}


