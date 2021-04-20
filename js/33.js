function obtenerEmpleados() {

    const archivo = 'empleados.json';
    
    fetch(archivo)
        .then( resultado => resultado.json())
        .then( datos => {

            const { empleados } = datos;

            empleados.forEach( empleado => {
                
                console.log(empleado.id);
                console.log(empleado.nombre);
                console.log(empleado.puesto);
            })
        })
}
obtenerEmpleados();