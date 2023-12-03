/* 
Antonio Sierra
02/10/2023
Ejemplos de DOM
 */

window.onload = principal;
var enlace1;
let parrafos;


function principal()
{

    // document.write("<h1>Buenos días</h1>");
    // document.write("<h2>Segundo write</h2>");
    
    // document.writeln("<a>soy un enlace raro</a>");
        
    parrafos = document.getElementsByTagName("p");

    enlace1 = document.getElementById("enlace1");
    enlace1.href = "https://es.wikipedia.org/wiki/Wikipedia:Portada";
    enlace1.innerText = "Enlace a la Wikipedia";

    for(var i=0; i<parrafos.length; i++)
    {
        parrafos[i].innerHTML += " Modificado " + i;
    }

    for(var i=0; i<parrafos.length; i++)
    {
        console.log("Párrafo: " + parrafos[i].id);
        console.log(" - Clase: " + parrafos[i].className);
        console.log(" - innerHTML: " + parrafos[i].innerHTML);
        console.log(" - innerText: " + parrafos[i].innerText);
    }

    // // Vamos a cambiar el documento completo
    var division1 = document.getElementById("division1");
    division1.innerHTML += "<h1>Antonio Sierra</h1>";
    for(var i=0; i<6; i++)
    {
        division1.innerHTML += "<p id=\"autoParr" + (i+1) 
                +"\">Párrafo autogenerado " + (i+1)+"</p>";
    }

    // // Voy a acceder a un elemento autogenerado
    // var autoParrafo3 = document.getElementById("autoParr3");

    // // Obtener elementos por clase
    // var parrafosPares = document.getElementsByClassName("par");
    // var parrafosImpares = document.getElementsByClassName("impar");

    // //QuerySelector

    // var seleccion = document.querySelectorAll("#division1 p.impar");

    // // General
    // /*
    //     getElementById(id)			Devuelve el elemento con id id
    //     getElementsByClassName(class)	Devuelve un arrayde elementos que tienen clase class
    //     getElementsByTagName(tagname)	Devuelve un arrayde elementos cuya etiqueta es tagname
    //     querySelector(query)			Devuelveel primer elemento que concuerda con el grupo de selectores especificados entre paréntesis
    //     querySelectorAll(query)		Devuelveun arrayde elementos que concuerdan con el grupo de selectores especificados entre paréntesis
    // */

}
