function Usuario(nombre,apellido, dni, fechaNacimiento, esSocio = false) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.fechaNacimiento = fechaNacimiento;
    this.esSocio = esSocio;
    
}

module.exports = Usuario;