//Objeto

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

// forEach
meses.forEach(function(mes){ //Busca entregndo un texto especifico 
    if(mes == 'Marzo') {
        console.log('Marzo si existe')
    }
});

//Icludes
let resultado = meses.includes('Marzo'); //Busca entregando true o false dependiendo si se encuentra o no
//console.log(resultado);

//Some ideal para arreglo de objetos
resultado = carrito.some(function(producto) {
    return producto.nombre === 'Celular Pro'
})

//Reduce (esto realiza una suma del precio de todos los productos)
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0);

//Filter
resultado = carrito.filter(function(producto) {
    return producto.precio < 400
});

resultado = carrito.filter(function(producto) {
    return producto.nombre == 'Celular' //retorna todos los que se llamen celular (!== esto llama a todo menos el celular)
});

console.log(resultado);
