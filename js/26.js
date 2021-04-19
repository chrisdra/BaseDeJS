//This
const reservacion = {
    nombre: 'Christian',
    apellido: 'Herrera',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} ${this.apellido} reservo y su cantidad a pagar es de ${this.total}`)
    }
}

const reservacion2 = {
    nombre: 'Mary',
    apellido: 'Ruz',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} ${this.apellido} reservo y su cantidad a pagar es de ${this.total}`)
    }
}


reservacion.informacion();
reservacion2.informacion();