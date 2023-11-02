"use strict";

function Entrada(precio,ubicacion) {
    this.precio = precio;
    this.ubicacion = ubicacion;
    this.estaDisponible = true;
    this.comprador = null;

    this.comprar = (comprador) => {
        this.validarDisponibilidad();
        this.validarComprador(comprador);
        
        this.estaDisponible = false;
        this.comprador = comprador;
    };

    this.validarDisponibilidad = () => {
        if(!this.estaDisponible) throw new Error('No esta disponible');
    };

    this.validarComprador = (comprador) => {
        if(!comprador) throw new Error("Necesita informacion del comprador");
    };

    this.calcularPrecioFinal = () => {
        if (this.comprador === null) throw new Error("La entrada no tiene un usuario asociado.")
        if (this.comprador.esSocio) return this.precio * 0.8;
        return this.precio;
    }
}

module.exports = Entrada;