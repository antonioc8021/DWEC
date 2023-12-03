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

function esNumero2(entrada)
{
    let resultado = false;
    
    let enNumero = parseFloat(entrada);
    if(entrada == enNumero)
    {
        resultado = true;
    }

    return resultado;
}

function esNumero3(entrada)
{
    let resultado = true;
    if((entrada === "")||(isNaN(entrada)))
    {
        resultado = false;
    }
    
    return resultado;
}

function esNumero4(entrada)
{
    return !((entrada === "")||isNaN(entrada));
}

function esEntero(numero)
{
    return Number.isInteger(numero);
}

function esPositivo(numero)
{
    return (numero >= 0);
}

function factorial(numero)
{
    let resultado = 1;
    if(numero === 0)
    {
        resultado = 0;
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

function enRango(numero,minimo,maximo)
{
    return ((numero>=minimo)&&(numero<=maximo));
}

function esDivisible(dividendo,divisor)
{
    return ((dividendo%divisor)===0);
}

function esPrimo(numero)
{
    let resultado = true;
    if(numero - parseInt(numero) !== 0)
    {
        resultado = false;
    }
    for(let i = 2; (i<numero)&&resultado; i++)
    {
        console.log(i);
        if(numero%i===0)
        {
            resultado = false;
        }
    }
    return resultado;
}

function esPrimo2(numero)
{
    let resultado = true;
    if(numero - parseInt(numero) !== 0)
    {
        resultado = false;
    }
    for(let i = 2; i<numero; i++)
    {
        console.log(i);
        if(numero%i===0)
        {
            resultado = false;
            i = numero;
        }
    }
    return resultado;
}

function generaAleatorio(min, max) 
{
    return Math.round(Math.random() * (max - min) + min);
}

function generaNAleatorios(cantidad,min,max)
{
    let salida =[]
    for(let i=0; i<cantidad; i++)
    {
        salida.push(generaAleatorio(min,max));
    }
    return salida;
}