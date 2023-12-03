window.onload = principal;

function principal()
{
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick()
{
    let txtEntrada = document.getElementById("entrada").value;
    txtEntrada = separaPalabras(txtEntrada, " ");
    for(let i=0; i<txtEntrada.length; i++)
    {
        txtEntrada[i] = giraPalabras(txtEntrada[i]);
    }
    txtEntrada = txtEntrada.join(" ");
    console.log(txtEntrada);
    document.getElementById("salida").innerHTML = txtEntrada + "<br>";
    if(esPalindromo(document.getElementById("entrada").value))
    {
        document.getElementById("salida").innerHTML += "ES PALÍNDROMO";
    }
    else
    {
        document.getElementById("salida").innerHTML += "NO ES PALÍNDROMO";
    }
}

function separaPalabras(entrada, separador)
{
    return entrada.split(separador);
}

function giraPalabras(entrada)
{
    //// OPCIÓN 1
    // return entrada.split("").reverse().join("");

    //// OPCIÓN 2
    let resultado = "";
    for(let i=entrada.length-1;i>=0;i--)
    {
        resultado += entrada[i];
    }
    return resultado;
}

function esPalindromo(entrada)
{
    let mayus = entrada.toUpperCase();
    let reves = giraPalabras(mayus);
    return (mayus === reves);
}