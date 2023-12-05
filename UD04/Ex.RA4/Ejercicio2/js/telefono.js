class Telefono extends Dispositivo {
    constructor(pulgadas, tipoPanel) {
        super(id, modelo, consumo);
        this._pulgadas = pulgadas || 0;
        this._tipoPanel = tipoPanel || 0;
        this._tiposPanelArr = ["OLED", "AMOLED", "QLED", "NanoCell"];
    }

    // métodos de la clase:
    toString() {
        let dispoString = super.toString();
        return `${dispoString} ${this._pulgadas}; ${this.tipoPanel}`;
    }

    verificarID(id) {
        let verificador = false;
        if ((id.length >= 10) && (id.length <= 20)) {
            verificador = true;
        }
        return verificador;
    }

    // getters y setters:
    set pulgadas(pulgadas) {
        this._pulgadas = pulgadas;
    }

    get pulgadas() {
        return this._pulgadas;
    }

    set tipoPanel(tipoPanel) {
        if ((tipoPanel < 0) && (tipoPanel > 3)) {
            this._tipoPanel = 0;
        } else {
            this._tipoPanel = tipoPanel;
        }
    }

    get tipoPanel() {
        return this._tiposPanelArr[this._tipoPanel];
    }


}
