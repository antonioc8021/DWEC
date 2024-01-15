// Expresiones Regulares Antonio Costas, todo esto lo copio y lo pego en la terminal de un about:blank.

// Verificar que un identificador que empiece por "ELEC - " y que continue con entre 3 y 8 dígitos.
let expresionRegular1 = /^ELEC - \d{3,8}$/; // el /d admite números.

// Verificar que un identificador que empiece por "ELEC - " o "DISP - " y que continue con entre 3 y 8 dígitos.
let expresionRegular2 = /^(ELEC - |DISP - )\d{3,8}$/;

// Verificar un String que contenga 1 A mayúscula en cualquier parte de su contenido por lo menos.
let expresionRegular3 = /A/; // al no poner ni inicio ni fin puede estar en cualquier sitio de la String.

// Verificar un String que contenga 1 A mayúscula en cualquier parte de su contenido pero no más.
let expresionRegular4 = /A{1,1}/;

// Verificar un String que contenga 3 A mayúscula en cualquier parte de su contenido pero no más.


