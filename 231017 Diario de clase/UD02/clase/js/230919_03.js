window.onload = principal;

function principal()
{
    document.getElementById("miBoton").onclick = manejadorClick;
}

/// MANEJADORES

function manejadorClick()
{
    var numero = parseInt(document.getElementById("entrada").value);

    let textoSalidaTotal = tablaSumar(numero) + tablaMultiplicar(numero) + tablaDividir(numero);

    document.getElementById("salida").innerHTML = textoSalidaTotal;
                                        
}

/// MANEJADORES - FIN

/// FUNCIONES GENERALES

function suma(numero1, numero2)
{
    return numero1 + numero2;
}

function multiplica(numero1, numero2)
{
    return numero1 * numero2;
}

function divide(numero1, numero2)
{
    return numero1 / numero2;
}

function tablaSumar(numero)
{
    let textoSalida = "TABLA DE SUMAR<br>==========================<br>";
    for(let i=1; i<=10; i++)
    {
        textoSalida += numero + " + " + i + " = " + suma(numero, i) + "<br>";
    }
    textoSalida +="<br>"
    return textoSalida;
}

function tablaMultiplicar(numero)
{
    let textoSalida = "TABLA DE MULTIPLICAR<br>==========================<br>";
    for(let i=1; i<=10; i++)
    {
        textoSalida += numero + " * " + i + " = " + multiplica(numero, i) + "<br>";
    }
    textoSalida +="<br>"
    return textoSalida;
}

function tablaDividir(numero)
{
    let textoSalida = "TABLA DE DIVIDIR<br>==========================<br>";
    for(let i=1; i<=10; i++)
    {
        textoSalida += numero + " / " + i + " = " + divide(numero, i) + "<br>";
    }
    textoSalida +="<br>"
    return textoSalida;
}

/// FUNCIONES GENERALES - FIN