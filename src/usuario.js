function Usuario(nombre,apellido, dni, fechaNacimiento, esSocio = false) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.fechaNacimiento = fechaNacimiento;
    this.esSocio = esSocio;

    this.asociar = () => {
        if(this.esSocio){
            throw new Error("El usuario ya es socio.");
        }
        this.esSocio = true;
    }

    this.desasociar = () => this.esSocio = false;
    
}

module.exports = Usuario;