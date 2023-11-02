function NoSocio() {
    this.descuento = 1;
    this.esSocio = false;

    this.validarQueEsSocio = () => {
        return true;
    };
    
    this.validarQueNoEsSocio = () => {
        throw new Error("El usuario no es socio.");
    };
}

module.exports = NoSocio