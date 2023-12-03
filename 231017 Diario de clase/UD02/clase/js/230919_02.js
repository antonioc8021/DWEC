var numeros = [1,2,3,2,5,6,7,8,3];


// opcion 1

// let todoCorrecto = true;

// for(let i=0; i<9; i++)
// {
//     let numEsperado = i +1;
//     if(numeros[i] !== numEsperado)
//     {
//         todoCorrecto = false;
//         console.error("Opción 1: Error en la posición " 
//                             + i +", hay un " 
//                             + numeros[i] + " cuando se esperaba un " 
//                             + numEsperado);
//         i=11; 
//     }
// }

// if(todoCorrecto)
//     console.log("todo bien en la opción 1");

// opcion 2

// todoCorrecto = true;
// var i = 0;

// while(i<9)
// {
//     let numEsperado = i +1;
//     if(numeros[i] !== numEsperado)
//     {
//         todoCorrecto = false;
//         console.error("Opción 2: Error en la posición " 
//                             + i +", hay un " 
//                             + numeros[i] + " cuando se esperaba un " 
//                             + numEsperado);
//         i=11; 
//     }
//     i++;
// }
// if(todoCorrecto)
//     console.log("todo bien en la opción 2");

// opcion for in

todoCorrecto = true;
for(i in numeros)
{
    let numEsperado = parseInt(i) + 1;
    if(numeros[i] !== numEsperado)
    {
        todoCorrecto = false;
        console.error("Opción FOR IN: Error en la posición " 
                            + i +", hay un " 
                            + numeros[i] + " cuando se esperaba un " 
                            + numEsperado);
        // i="11"; 
        break;      // DESESPERATE MODE ON <---- NO USAR
    }
}
if(todoCorrecto)
    console.log("todo bien en la opción for in");
