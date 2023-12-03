// Ejercicios propuestos de la diapositiva 24

var nombres = ["Gonzalo","Yirs","Manuel","David","Diego","Pablo","Josemi","Juan","Cristian","Alberto","Andrii"];
var numeros = [45,2.2,65,1,23.3,789,12345,65.5,3,9,12,34.5,76.2,1237.23,42,0,9];
var numerosOrdenados = [1,2,3,4,5,6,7,8,9];
var numerosOrdenados2 = [9,8,7,6,5,4,3,2,1];
var alumnos = [["Ana","Alonso","942112233"],["Bea","Pérez"],["Antonio","Sierra","666123456"],["Jose","Fuentes"]];

console.log(alumnos.sort(ordenarPorNombre));

/*
    Ordena un array numérico de manera aleatorio usando sort()
    Procura mantener una probabilidad igual para que salga el -1, el 0 y el 1
*/
function ordenarAleatoriamente(a,b)
{
    return Math.round(Math.random() * (1.5 - (-1.5)) + (-1.5));
}

// Funcón para que desordene más un array de manera aleatoria
function ordenarAleatoriamente2(a,b)
{
    return (Math.random() * (1000 - (-1000)) + (-1000));
}

/*
    Ordena usando sort() el array por los nombres de los alumnos.
    Hay que tener en cuenta que ha de ser un array de arrays de tamaño 2, en los que el primer elemento
    es el nombre y el segundo el apellido
*/
function ordenarPorNombre(a,b)
{
    // [["Ana","Alonso"],["Bea","Pérez"],["Antonio","Sierra"],["Jose","Fuentes"]]
    // Para comparar y ordenar por nombre tendré que trabajar con el primer elemento de a y b, es decir
    // a[0] y b[0]
    return a[0].localeCompare(b[0]);
}

/* 
    Ordena usando sort() el array por los apellidos de los alumnos.
    Hay que tener en cuenta que ha de ser un array de arrays de tamaño 2, en los que el primer elemento
    es el nombre y el segundo el apellido
*/
function ordenarPorApellido(a,b)
{
    // [["Ana","Alonso"],["Bea","Pérez"],["Antonio","Sierra"],["Jose","Fuentes"]]
    // Para comparar y ordenar por apellido tendré que trabajar con el segundo elemento de a y b, es decir
    // a[1] y b[1]
    return a[1].localeCompare(b[1]);
}


// función que invierte el orden de un array
function ordenarInverso(a,b)
{
    return -1;
}

/* 
    función de ordenación por teléfonos de la colección alumnos definida previamente. De no tener teléfono 
    uno se antepondrá aquel alumno que tenga teléfono, si on tienen teléfono ninguno se considerará que 
    son iguales
*/

