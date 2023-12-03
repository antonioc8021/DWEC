// 230925
// Ejercicio 2 - Ejercicios de repaso DWEC02.01
window.onload = principal;

function principal()
{
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick()
{
    let valor = parseInt(document.getElementById("entrada").value);
    let resultado = "Es impar";
    if(valor%2===0)
    {
        resultado = "Es par";
    }

    document.getElementById("salida").innerHTML = resultado;
}