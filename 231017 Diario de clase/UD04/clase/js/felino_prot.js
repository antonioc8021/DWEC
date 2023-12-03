function Felino(edad, nombre, color ,atigrado){
        Animal.call(this, edad, nombre, "Felino", 
                        color);
        this._atigrado = atigrado || false;
}
Felino.prototype = new Animal();
Felino.prototype.constructor = Felino;

Felino.prototype.maulla = function(){
    console.log("Maullo y tengo " + this._edad + " años");
};

Felino.prototype.toString=function(){
    let respuestaMadre = Animal.prototype.toString.call(this);
    return respuestaMadre + this._atigrado +"; ";
}

/* 
    Supongasmo que un felino a partir de los 5 años
    pierde el atigrado
*/
Felino.prototype.crece = function(){
    Animal.prototype.crece.call(this);
    if(this._edad > 5)
    {
        this._atigrado = false;
    }
}

/*
    Supongamos que un gato con un susto gordo pierde
    2 años de vida.

    Por poner un ejemplo de que puedo llamar a 
    cualquier función de la clase madre desde 
    cualquier putno de la clase hija
*/

Felino.prototype.asustar = function()
{
    Animal.prototype.crece.call(this);
    Animal.prototype.crece.call(this);
}