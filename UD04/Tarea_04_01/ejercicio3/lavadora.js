class Lavadora extends Electrodomestico {
    constructor(id, modelo, consumo, bajoConsumo) {
        super(id, modelo, consumo);
        this._bajoConsumo = bajoConsumo;
        this._capacidad = 1;
        this._tipoCarga = 0;
        this._tiposCargaArr = ["Indefinida", "Lateral", "Superior"];
    }

    calcularConsumo(horas) {
        let consumoElectro = super.calcularConsumo(horas);
        if (this._bajoConsumo) {
            return consumoElectro / 2;
        } else {
            return consumoElectro;
        }
    }

    setCapacidad(valor) {
        if (Number.isInteger(valor) && valor >= 1) {
            this._capacidad = valor;
        }
    }

    getCapacidad() {
        return this._capacidad;
    }

    setBajoConsumo(valor) {
        this._bajoConsumo = valor;
    }

    getBajoConsumo() {
        return this._bajoConsumo;
    }

    setTipoCarga(tipo) {
        if (tipo >= 0 && tipo <= 2) {
            this._tipoCarga = tipo;
        } else {
            this._tipoCarga = 0;
        }
    }

    getTipoCarga() {
        return this._tipoCarga;
    }

    getTipoCargaTexto() {
        return this._tiposCargaArr[this._tipoCarga];
    }

    toString() {
        let electroString = super.toString();
        return `${electroString} ${this._capacidad} ${this._bajoConsumo}`;
    }
}

// Ejemplo de uso
let antonio = new Lavadora("1510", "samsung", 2, true);
console.log(antonio);
