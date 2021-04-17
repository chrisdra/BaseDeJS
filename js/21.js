//Arrow Functions

//Codigo original
// const sumar2 = function(n1, n2) {
//     console.log( n1 + n2);
// }
// sumar2(5, 10);

//Codigo con Arrow functions (Funciona igual que el de arriba con la diferenia que es mas optimizado y reducido, la palabra function es remplazada por la flecha => y remplaza la palabra function
const sumar2 = (n1, n2) => console.log( n1 + n2 );
sumar2(5, 10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`)
aprendiendo('JavaScript')


const meses = ['Enero','Febrero','Marzo','Abril','Mayo',];
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
//esto es de 15.js las funciones originales se encuentran en el 15 y estas estan modificadas al arrow
// forEach
meses.forEach(mes => { 
    if(mes == 'Marzo') {
        console.log('Marzo si existe')
    }
});
let resultado;
//Some ideal para arreglo de objetos
resultado = carrito.some( producto => producto.nombre === 'Celular Pro');

//Reduce (esto realiza una suma del precio de todos los productos)
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

//Filter
resultado = carrito.filter( producto => producto.precio < 400);

resultado = carrito.filter( producto => producto.nombre == 'Celular' );
//retorna todos los que se llamen celular (!== esto llama a todo menos el celular)

console.log(resultado);
