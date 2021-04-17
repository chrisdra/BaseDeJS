// Objetos

const nombreProducto = "Monitor 20 pulgadas";
const precio = 300;
const disponible = false;

const producto = {
    nombreProducto : "Monitor 20 Pulgadas", 
    precio : 300,
    disponible : true
}

console.log(producto);

console.log(producto.precio); //Con esto accedemos a cierta caracteristica del objeto
console.log(producto.nombreProducto);
console.log(producto.disponible);

console.log(producto["precio"]); //misma sintaxis que la anterior, solo que diferente manera

//Agregar nuevas propiedades
producto.imagen = "imagen.jpg";

//Eliminar propiedades
delete producto.disponible;
console.log(producto);