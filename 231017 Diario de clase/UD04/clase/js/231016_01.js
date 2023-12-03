var nombres = ["Gonzalo","Yirs","Manuel","David"];
var numeros = [45,2.2,65,1,23.3,789,12345,65.5,3,9];

function ordenarDescendentemente(a,b)
{
    return b-a;
}

function ordenarAscendentemente(a,b)
{
    return a-b;
}

function ordenarEnterosPrimero(a,b)
{
    let resultado = 0;
    if((esEntero(a)&&esEntero(b))||(!esEntero(a)&&!esEntero(b)))
    {
        resultado = a-b;
    }
    else if(esEntero(a))
    {
        resultado = -1;
    }
    else
    {
        resultado = 1;
    }

    return resultado*-1;
}

function esEntero(numero)
{
    return Number.isInteger(numero);
}

