function Animal(edad, nombre, especie, color){
    this._edad = edad || 0;
    this._nombre = nombre || "Sin nombre";
    this._especie = especie || "Sin determinar";
    this._color = color || "Pardo";
}

Animal.prototype.crece=function(){
    this._edad += 1;
}

Animal.prototype.toString=function(){
    return this._edad + "; " + this._nombre + "; " + this._especie + "; " + this._color + "; ";
}

