// Declaracion de funcion

//Estas permiten crear una funcion propia para una funcion en especial
function sumar() {
    console.log(10 * 10);
}

sumar();

//Expresion de la funcion
const sumar2 = function() {
    console.log( 3 + 3 );
}

sumar2();

//IIFE
//esto permite proteger algunas variables de otros archivos
(function() {
    console.log('Esto es una funcion');
})();