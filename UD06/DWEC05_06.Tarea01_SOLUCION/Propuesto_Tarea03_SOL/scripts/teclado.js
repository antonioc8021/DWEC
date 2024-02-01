window.addEventListener("load", principal, false);

// APARTADO 1
function principal(e)
{
    
    document.body.addEventListener("keydown",pulsarTecla);
    document.body.addEventListener("keyup",soltarTecla);

    let teclas = document.getElementsByClassName("KeyboardKey");
    for(let i=0; i<teclas.length; i++ ) {
        teclas[i].addEventListener("mouseenter",entrarTecla);
        teclas[i].addEventListener("mouseleave",salirTecla);
        teclas[i].addEventListener("mousedown",pulsarClick);
        teclas[i].addEventListener("mouseup",soltarClick);
    }
}

// APARTADO 2
function pulsarTecla(e)
{   
    let tecla = document.getElementById("tecla"+e.code); 
    if(tecla !== null) {
        tecla.style.backgroundColor = "lightgreen";
        document.getElementById("salida").innerHTML = "key: " + e.key +"<br>code: "+ e.code; 
    }
}

function soltarTecla(e)
{
    let tecla = document.getElementById("tecla"+e.code); 
    if(tecla !== null) {
        tecla.style.backgroundColor = ""; 
        document.getElementById("salida").innerHTML = "";
    }
}

// APARTADO 3
function entrarTecla(e)
{
    this.style.backgroundColor = "lightcoral"; 
    document.getElementById("salida").innerHTML = this.value; 
}

function salirTecla(e)
{
    this.style.backgroundColor = ""; 
    document.getElementById("salida").innerHTML = ""; 
}

// APARTADO 4
function pulsarClick(e)
{
    this.style.backgroundColor = "lightblue"; 
    document.getElementById("salida").innerHTML = this.value + " PULSADA"; 
}

function soltarClick(e)
{
    this.style.backgroundColor = "lightcoral"; 
    document.getElementById("salida").innerHTML = this.value; 
}