const Lavadora = {
    crear(id, modelo, consumo, bajoConsumo) {
        const lavadora = {
            ...Electrodomestico.crear(id, modelo, consumo),

            _bajoConsumo: bajoConsumo,
            _capacidad: 1,
            _tipoCarga: 0,
            _tiposCargaArr: ["Indefinida", "Lateral", "Superior"],

            calcularConsumo(horas) {
                let consumoElectro = Electrodomestico.calcularConsumo.call(this, horas);
                if (this._bajoConsumo) {
                    return consumoElectro / 2;
                } else {
                    return consumoElectro;
                }
            },

            setCapacidad(valor) {
                if (Number.isInteger(valor) && valor >= 1) {
                    this._capacidad = valor;
                }
            },

            getCapacidad() {
                return this._capacidad;
            },

            setBajoConsumo(valor) {
                this._bajoConsumo = valor;
            },

            getBajoConsumo() {
                return this._bajoConsumo;
            },

            setTipoCarga(tipo) {
                if (tipo >= 0 && tipo <= 2) {
                    this._tipoCarga = tipo;
                } else {
                    this._tipoCarga = 0;
                }
            },

            getTipoCarga() {
                return this._tipoCarga;
            },

            getTipoCargaTexto() {
                return this._tiposCargaArr[this._tipoCarga];
            },

            toString() {
                let electroString = Electrodomestico.toString.call(this);
                return `${electroString} ${this._capacidad} ${this._bajoConsumo}`;
            }
        };

        return lavadora;
    }
};

const antonio = Lavadora.crear("1510", "samsung", 2, true);
console.log(antonio);
