// Ejemplo básico de setTimeout y setInterval

setTimeout(decirHola,2000);
setInterval(molestar,500);


function decirHola()
{
    console.log("Hola!");
}

function molestar()
{
    console.warn("Soy un pesado");
}