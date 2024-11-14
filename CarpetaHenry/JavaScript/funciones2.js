function cuidadoConElConsolLog(nombre) {
    console.log(nombre);   
    return nombre; 
}

function otraFuncion() {
    return (
        "El nombre retornado por la funcion 'cuidadoConElConsoleLog' es: " + 
        cuidadoConElConsolLog('Camilo')
    );
}

function cuidadoConElNombre(nombre) {
    return nombre;
    console.log(nombre);
}