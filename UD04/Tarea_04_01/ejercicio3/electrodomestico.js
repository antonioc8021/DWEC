class Electrodomestico {
    constructor(id, modelo, consumo) {
        this._id = id || "NOID";
        this._modelo = modelo || "NOMOD";
        this._consumo = consumo || 1;
    }

    verificarID(id) {
        return id.startsWith("ELEC-") && id.length >= 10 && id.length <= 20;
    }

    calcularConsumo(horas) {
        if (horas >= 0) {
            return horas * this._consumo;
        } else {
            return -1;
        }
    }

    setID(id) {
        if (this.verificarID(id)) {
            this._id = id.toUpperCase();
        }
    }

    getID() {
        return this._id;
    }

    setModelo(modelo) {
        modelo = modelo.toUpperCase();
        if (modelo.length >= 6) {
            this._modelo = modelo;
        }
    }

    getModelo() {
        return this._modelo;
    }

    setConsumo(consumo) {
        if (Number.isInteger(consumo) && consumo >= 1) {
            this._consumo = consumo;
        }
    }

    getConsumo() {
        return this._consumo;
    }

    toString() {
        return `ELEC: ${this._id} ${this._modelo} ${this._consumo}`;
    }
}

let electro1 = new Electrodomestico("1415", "lavadora", 2.3);
console.log(electro1);
