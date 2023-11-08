function SinComprador() {
    
    this.obtenerDescuento = () => {
        throw new Error("La entrada no tiene un usuario asociado.")
    }
}

module.exports = SinComprador