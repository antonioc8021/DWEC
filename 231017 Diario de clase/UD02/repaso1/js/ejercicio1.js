// 230925
// Ejercicio 1 - Ejercicios de repaso DWEC02.01

/////////////////// SOLUCIÓN 1
// window.onload = principal;

// for(let i =1;i<=3; i++)
// {
//     alert("Mensaje " + i);
// }

/////////////////// SOLUCIÓN 1 - FIN

/////////////////// SOLUCIÓN 2




function principal()
{
    console.log("Principal");
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick()
{
    for(let i=1; i<=10; i++)
    {
        document.getElementById("salida").innerHTML += "<br>Mensaje " + i; 
    }
}

/////////////////// SOLUCIÓN 2 - FIN