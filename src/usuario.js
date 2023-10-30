function Usuario(nombre,apellido, dni, fechaNacimiento, esSocio = false) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.fechaNacimiento = fechaNacimiento;
    this.esSocio = esSocio;

    this.asociar = () => {
        this.validarQueEsSocio();
        this.esSocio = true;
    }

    this.desasociar = () => {
        this.validarQueNoEsSocio();
        this.esSocio = false;
    }

    this.validarQueEsSocio = () => {
        if(this.esSocio){
            throw new Error("El usuario ya es socio.");
        }
    }

    this.validarQueNoEsSocio = () => {
        if(!this.esSocio){
            throw new Error("El usuario no es socio.");
        }
    }
    
}

module.exports = Usuario;