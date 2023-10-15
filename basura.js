function separaPalabras(texto, separador) {
    return texto.split(separador);
}

function giraPalabras(palabras) {
    return palabras.map(palabra => palabra.split('').reverse().join('')).join(' ');
}

function esPalindromo(texto) {
    // Elimina caracteres no alfanuméricos y convierte a minúsculas
    texto = texto.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedTexto = texto.split('').reverse().join('');
    return texto === reversedTexto;
}

document.getElementById('boton').addEventListener('click', function () {
    const entradaTexto = document.getElementById('entrada').value;
    const separador = ' ';

    const palabras = separaPalabras(entradaTexto, separador);
    const textoCodificado = giraPalabras(palabras);

    const salidaTexto = document.getElementById('salidaTexto');
    salidaTexto.textContent = textoCodificado;

    const esUnPalindromo = esPalindromo(entradaTexto);
    salidaTexto.textContent += '\n' + (esUnPalindromo ? 'Es un palíndromo.' : 'No es un palíndromo.');
});  