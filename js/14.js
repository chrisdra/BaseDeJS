//Arreglos o Arrays

const numeros = [10,20,30,40,50];
// console.table(numeros); //muestra la informacion en ua tabla

// console.table(meses);

// // Acceder a los arreglos
// console.log(numeros[4]);
// console.log(numeros[2]);
// console.log(numeros[200]);

// //conocer la extension de un arreglo
// console.log(meses.length);

// meses.forEach( function(meses){
//     console.log(numero);
// })

// numeros[5] = 60;
// numeros[6] = 60;

numeros.push(60,70,80); //agrega al final del arreglo
numeros.unshift(-10,-20,-30); //agrega al inicio del arreglo

console.table(numeros);

const meses = ['Enero','Febrero','Marzo','Abril','Mayo',];

meses.pop(); //Elimina el ultimo elemento
meses.shift(); //elimina el primer elemento

meses.splice(2, 1);
console.table(meses);

//Rest Operator o Spread Operator

const nuevoArreglo = ['Junio',...meses];
console.log(nuevoArreglo);