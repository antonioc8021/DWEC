function Electrodomestico(id,modelo,consumo){
    this._id = id || "NOID";
    this._modelo = modelo || "NOMOD";
    this._consumo = consumo || 1;
}

Electrodomestico.prototype.sacarMensaje= function(nombre,edad)
{
    return this._id +"; " + nombre+ "; " + edad;
}

Electrodomestico.prototype.toStringChano = function()
{
    return "Soy un electrodoméstico";
}

function Lavadora(id,modelo,consumo,bajoConsumo)
{
    Electrodomestico.call(this,id,modelo,consumo);
    this._bajoConsumo = bajoConsumo;
}

Lavadora.prototype = new Electrodomestico();
Lavadora.prototype.constructor = Lavadora;

Lavadora.prototype.sacarMensaje = function(nombre,edad,ciudad)
{
    let resultado= "";
    resultado += Electrodomestico.prototype.sacarMensaje.call(this, nombre, edad);
    resultado += "; " + ciudad;
    return resultado;
}

Lavadora.prototype.toStringChano = function()
{
    // let resultado = Electrodomestico.prototype.toStringChano.call(this);
    let resultado = Electrodomestico.prototype.toStringChano.call()
    return resultado+" y lavadora";
}

var electro1 = new Electrodomestico();
console.log(electro1.sacarMensaje(""))

var lava1 = new Lavadora("123","Teka",2,true)
console.log(lava1.sacarMensaje("Antonio",43,"Santander"));
console.log(lava1.toStringChano());