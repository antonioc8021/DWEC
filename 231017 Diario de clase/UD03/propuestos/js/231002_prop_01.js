/*

    Modifica la plantilla dada para que cuando se pulse el botón 1, en el parrafo1 
    se muetre el contenido del input de text entrada. en el caso de que se pulse el 
    botón 2, que se muestre en el parrafo2. Y, de igual modo, si se pulsa el botón 3 
    que se muestre en el parrafo3.

*/

window.onload = principal;

function principal()
{
    document.getElementById("miBoton1").onclick = manejadorClick1;
    document.getElementById("miBoton2").onclick = manejadorClick2;
    document.getElementById("miBoton3").onclick = manejadorClick3;
}

function manejadorClick1()
{
    document.getElementById("parrafo1").innerHTML = document.getElementById("entrada").value;
}

function manejadorClick2()
{
    document.getElementById("parrafo2").innerHTML = document.getElementById("entrada").value;
}

function manejadorClick3()
{
    document.getElementById("parrafo3").innerHTML = document.getElementById("entrada").value;
}