// 230925
// Ejercicio 2 - Ejercicios de repaso DWEC02.01

window.onload = principal;
var miArray = [];


function principal()
{
    document.getElementById("miBoton").onclick = manejadorClick;
    document.getElementById("btnImprimir").onclick = manejadorImprimir;
}

function manejadorClick()
{
    miArray.push(document.getElementById("entrada").value);
    document.getElementById("entrada").value = "";
}

function manejadorImprimir()
{
    miArray.sort();
    document.getElementById("salida").innerHTML = "";
    let textoFinal = "";
    for(let i=0; i<miArray.length;i++)
    {
        textoFinal += miArray[i]+"<br>";
    }
    document.getElementById("salida").innerHTML = textoFinal;
}
