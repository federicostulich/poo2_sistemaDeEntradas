function Socio() {
    this.descuento = 0.8;
    this.esSocio = true;
    
    this.validarQueEsSocio = () => {
        throw new Error("El usuario ya es socio.");
    };
    this.validarQueNoEsSocio = () => {
        return true
    };
}

module.exports = Socio