// Tarea DWEC02.01 - Ejercicio 2

window.onload = principal;

function principal()
{
    document.getElementById("btnSumar").onclick = manejadorSumar;
    document.getElementById("btnRestar").onclick = manejadorRestar;
    document.getElementById("btnMultiplicar").onclick = manejadorMultiplicar;
    document.getElementById("btnDividir").onclick = manejadorDividir;
    document.getElementById("btnFactorial").onclick = manejadorFactorial;
    document.getElementById("btnSumatorio").onclick = manejadorSumatorio;
}

//// MANEJADORES
function mostrarMensajeSalida(texto)
{
    document.getElementById("salida").innerHTML = texto;
}


function manejadorSumar()
{
    if(verificarNumero("entrada1")&&verificarNumero("entrada2"))
    {
        let valor1 = parseFloat(document.getElementById("entrada1").value);
        let valor2 = parseFloat(document.getElementById("entrada2").value);
        let resultado = sumar(valor1,valor2);
        mostrarMensajeSalida(valor1 + " + " + valor2 + " = " + resultado);
    }
    else
    {
        mostrarMensajeSalida("No has introducido dos valores para la suma correctamente");
    }
}

function manejadorRestar()
{
    if(verificarNumero("entrada1")&&verificarNumero("entrada2"))
    {
        let valor1 = parseFloat(document.getElementById("entrada1").value);
        let valor2 = parseFloat(document.getElementById("entrada2").value);
        let resultado = restar(valor1,valor2);
        mostrarMensajeSalida(valor1 + " - " + valor2 + " = " + resultado);
    }
    else
    {
        mostrarMensajeSalida("No has introducido dos valores para la resta correctamente");
    }
}

function manejadorMultiplicar()
{
    if(verificarNumero("entrada1")&&verificarNumero("entrada2"))
    {
        let valor1 = parseFloat(document.getElementById("entrada1").value);
        let valor2 = parseFloat(document.getElementById("entrada2").value);
        let resultado = multiplicar(valor1,valor2);
        mostrarMensajeSalida(valor1 + " * " + valor2 + " = " + resultado);
    }
    else
    {
        mostrarMensajeSalida("No has introducido dos valores para la multiplicación correctamente");
    }
}

function manejadorDividir()
{
    if(verificarNumero("entrada1")&&verificarNumero("entrada2"))
    {
        let valor1 = parseFloat(document.getElementById("entrada1").value);
        let valor2 = parseFloat(document.getElementById("entrada2").value);
        let resultado = dividir(valor1,valor2);
        mostrarMensajeSalida(valor1 + " / " + valor2 + " = " + resultado);
    }
    else
    {
        mostrarMensajeSalida("No has introducido dos valores para la división correctamente");
    }
}

function manejadorFactorial()
{
    if(verificarNumero("entrada1"))
    {
        let valor1 = parseFloat(document.getElementById("entrada1").value);
        if(esEntero(valor1)&&esPositivo(valor1))
        {
            let resultado = factorial(valor1);
            mostrarMensajeSalida("Factorial de " + valor1 + " = " + resultado);
        }
        else
        {
            mostrarMensajeSalida("No has introducido un valor para el factorial correctamente");
        }
    }
    else
    {
        mostrarMensajeSalida("No has introducido un valor para el factorial correctamente");
    }
}

function manejadorSumatorio()
{
    if(verificarNumero("entrada1"))
    {
        let valor1 = parseFloat(document.getElementById("entrada1").value);
        if(esEntero(valor1)&&esPositivo(valor1))
        {
            let resultado = sumatorio(valor1);
            mostrarMensajeSalida("Sumatorio de " + valor1 + " = " + resultado);
        }
        else
        {
            mostrarMensajeSalida("No has introducido un valor para el sumatorio correctamente");
        }
    }
    else
    {
        mostrarMensajeSalida("No has introducido un valor para el sumatorio correctamente");
    }
}

//// FUNCIONES
function verificarNumero(identificador)
{
    // console.log("verificarNumero");     // Para comproboar el funcionamiento
    let salida = false;
    let valorEntrada = document.getElementById(identificador).value;
    if(esNumero(valorEntrada))
    {
        salida = true;
    }
    return salida;
}

function esNumero(entrada)
{
    let resultado = true;
    if(entrada === "")
    {
        resultado = false;
    }
    else if(isNaN(entrada))
    {
        resultado = false;
    }
    return resultado;
}

function esEntero(numero)
{
    return Number.isInteger(numero);
}

function esPositivo(numero)
{
    return (numero >= 0);
}

function sumar(numero1, numero2)
{
    return numero1 + numero2;
}

function restar(numero1, numero2)
{
    return numero1 - numero2;
}

function multiplicar(numero1, numero2)
{
    return numero1 * numero2;
}

function dividir(numero1, numero2)
{
    return numero1 / numero2;
}

function factorial(numero)
{
    let resultado = 1;
    if(numero === 0)
    {
        resultado = 1;
    }
    else
    {
        for(let i=1;i<=numero; i++)
        {
            resultado = resultado * i;
        }
    }

    return resultado;
}

function sumatorio(numero)
{
    let resultado = 0;
    for(let i=1;i<=numero; i++)
    {
        resultado = resultado + i;
    }
    return resultado;
}