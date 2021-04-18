// For Loop

// for(let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// //Esto permite buscar los numeros pares en la cantidad indicada (10)
// for(let i = 0; i < 10; i++) {
//     if( i % 2 === 0){
//         console.log(`El numero ${i} es par`);
//     }
// }

// //Esto permite buscar los numeros impares en la cantidad indicada (10)
// for(let i = 0; i < 10; i++) {
//     if( i % 2 === 1){ //solo se cambia el 0 por 1 y se buscan los impares
//         console.log(`El numero ${i} es par`);
//     }
// }

const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500 },
    { nombre: 'Television 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },
];
//Esto permite mostrar la informacion del arreglo con un for
for( let i = 0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
}


//////////////////////////////////////////////////////////////////////////////////
//While Loop

let i = 0; //Indice o valor inicial

// while(i<10){ //Condicion
//     if(i % 2 === 0){
//         console.log(`El numero ${i} es par`);
//     } else {
//         console.log(`El numero ${i} es impar`);
//     }
//     i++; //Incremento
// }

while(i < carrito.length) {
    console.log(carrito[i].nombre)
    i++;
}

//////////////////////////////////////////////////////////////////////////////////
//Do While Loop



