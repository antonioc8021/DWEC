class Dispositivo {
    constructor(id, autonomia, carga) {
        this._id = id || "NOID";
        this._autonomia = autonomia || 0;
        this._carga = carga || 0;
    }

    // métodos de la clase:

    toString() {
        return `DISP: id->${this._id}; autonomia->${this._autonomia}; carga->${this._carga}`;
    }

    verificarID(id) {
        let verificador = false;
        if (id.length >= 10) {
            verificador = true;
        }
        return verificador;
    }

    horasRestantes(uso) {
        return uso * this._autonomia * this._carga / 100;
    }

    // getters y setters
    set id(id) {
        id = id.toUpperCase();
        if (this.verificarID(id)) {
            this._id = id
        }
    }

    get id() {
        return this._id;
    }

    set autonomia(autonomia) {
        this._autonomia = autonomia;
    }

    get autonomia() {
        return this._autonomia;
    }

    set carga(carga) {
        if ((carga >= 0) && (carga <= 100)) {
            this._carga = carga;
        }
    }

    get carga() {
        return this._carga;
    }
}