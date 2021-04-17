// Objetos

const producto = {
    nombreProducto : "Monitor 20 Pulgadas", 
    precio : 300,
    disponible : true
}

//.seal te permite solo modificar
Object.freeze(producto); //esto permite como evitar que se agregen datos a un objeto, que se eliminen o se modifiquen
producto.imagen = 'imagen.jpg';

console.log(Object.isFrozen(producto));
console.log(producto);