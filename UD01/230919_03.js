let todoCorrecto = true;
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(typeof (todoCorrecto));
for (let i = 0; i < numeros.length; i++) {
    console.log(i + 1)
    if (i + 1 !== numeros[i]) {
        console.log('Error en la posición ' + i + ', se esperaba un: ' + (i + 1) + ', y se muestra un: ' + numeros[i]);
        todoCorrecto = false;
        i = 100
    }
}
if (todoCorrecto) {
    alert('Todo en su sitio jefe');
} else {
    alert('Houston tenemos un problema')
}