// Antonio Costas Salazar
const Dispositivo = {
    crear(id, autonomia, carga) {
        const dispositivo = {
            _id: id || "NOID",
            _autonomia: autonomia || 0,
            _carga: carga || 0,

            verificarID(id) {
                let verificador = false;
                if (id.length >= 10) {
                    verificador = true;
                }
                return verificador;
            },

            toString() {
                return `DISP: id->${this._id}; autonomia->${this._autonomia}; carga->${this._carga}`;
            },

            horasRestantes(uso) {
                return uso * this._autonomia * this._carga / 100;
            },

            set id(id) {
                id = id.toUpperCase();
                if (this.verificarID(id)) {
                    this._id = id
                }
            },

            get id() {
                return this._id;
            },

            set autonomia(autonomia) {
                this._autonomia = autonomia;
            },

            get autonomia() {
                return this._autonomia;
            },

            set carga(carga) {
                if ((carga >= 0) && (carga <= 100)) {
                    this._carga = carga;
                }
            },

            get carga() {
                return this._carga;
            }

        }
        return dispositivo;
    }

}
const dispositivo1 = new Dispositivo.crear("PEdazoDeIdQuePongo", 123, 90);
console.log(dispositivo1);
