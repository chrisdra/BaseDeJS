const metodoPago = 'efectivo';

switch(metodoPago) {
    case 'tarjeta':
        console.log('pagaste con tarjeta');
        break;
    case 'cheque':
        console.log('El usuario va a pagar con cheque, vamos a revisar los fondos primeros');
        break;
    case 'efectivo':
        console.log('pagaste con efectivo');
        break;
    default: 
        console.log('Aun no has pagado');
        break;
}