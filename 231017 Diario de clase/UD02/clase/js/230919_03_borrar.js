window.onload = principal;

function principal()
{
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick()
{
    let entrada = parseInt(document.getElementById("entrada").value);
    let resultadoTotal = "";
    resultadoTotal += tablaSumar(entrada)+"<br>";
    resultadoTotal += tablaMultiplicar(entrada)+"<br>";
    resultadoTotal += tablaDividir(entrada)+"<br>";

    
    
    document.getElementById("salida").innerHTML = resultadoTotal;
}

//// FUNCIONES PRINCIPALES

function suma(n1,n2)
{
    return n1 + n2;
}

function tablaSumar(numero)
{
    let resultado = "TABLA DE SUMAR<br>=====================<br>";

    for(let i=1;i<=10;i++)
    {
        let resultadoSuma = suma(numero,i);
        resultado += numero + " + " + i + " = " + resultadoSuma + "<br>";
    }
    return resultado;
}

function multiplica(n1,n2)
{
    return n1 * n2;
}

function tablaMultiplicar(numero)
{
    let resultado = "TABLA DE MULTIPLICAR<br>=====================<br>";

    for(let i=1;i<=10;i++)
    {
        let resultadoMultiplica = multiplica(numero,i);
        resultado += numero + " * " + i + " = " + resultadoMultiplica + "<br>";
    }
    return resultado;
}

function divide(n1,n2)
{
    return n1 / n2;
}

function tablaDividir(numero)
{
    let resultado = "TABLA DE DIVIDIR<br>=====================<br>";

    for(let i=1;i<=10;i++)
    {
        let resultadoDivide = divide(numero,i);
        resultado += numero + " / " + i + " = " + resultadoDivide + "<br>";
    }
    return resultado;
}