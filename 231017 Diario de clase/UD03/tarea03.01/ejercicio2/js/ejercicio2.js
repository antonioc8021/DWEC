window.onload = principal;

function principal()
{
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick()
{
    let txtEntrada = document.getElementById("entrada").value;
    let txtSalida = "Has de introducir un número entero entre 0 y 99999";
    if(esNumero(txtEntrada))
    {
        txtEntrada = parseFloat(txtEntrada);
        if(esEntero(txtEntrada) && enRango(txtEntrada,0,99999))
        {
            let numerosGenerados =  generaNAleatorios(txtEntrada,0,999999);
            let numIntentos = 0;
            let intentos = 999999;
            for(let i=0;i<intentos;i++)
            {
                numIntentos++;
                let aleatorio = generaAleatorio(0,99999);
                console.log(aleatorio);
                if(numerosGenerados.includes(aleatorio))
                {
                    txtSalida = "Se han necesitado " + numIntentos + " intentos hasta obtener un número ganador";
                    i = 999999;
                }
                if(i===(intentos - 1))
                {
                    txtSalida = "No se ha llegado a obtener un número ganador en " + intentos + " intentos";
                }
            }
        }
    }
    document.getElementById("salida").innerHTML = txtSalida;
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

function esNumero(entrada)
{
    return !((entrada === "")||isNaN(entrada));
}

function esEntero(numero)
{
    return Number.isInteger(numero);
}

function enRango(numero,minimo,maximo)
{
    return ((numero>=minimo)&&(numero<=maximo));
}