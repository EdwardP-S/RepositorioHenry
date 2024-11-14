function sumaTres(x) {
    console.log(x + 3);
}

sumaTres(5); 

// PRIMERO : return - no imprime el resultado en la consola,
// solo lo devuelve.
function sumaTres(x) {
    return x + 3;
}

// SEGUNDO : Guarda la función dentro de 
// una variable

var sumaTres = function(x) {
    return x + 3;
}

// TERCERO : Sintaxis funcion de flecha => - 
// las tres tienen la misma funcionalidad
// recibir número, sumar de tres o retornarlo. 

var sumaTres = (x) => {
    return x + 3;
}