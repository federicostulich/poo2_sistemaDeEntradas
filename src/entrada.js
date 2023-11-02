"use strict";

const SinComprador = require("./sinComprador.js")

function Entrada(precio,ubicacion) {
    this.precio = precio;
    this.ubicacion = ubicacion;
    this.estaDisponible = true;
    this.comprador = new SinComprador();

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
        return this.precio * this.comprador.obtenerDescuento()
    }
}

module.exports = Entrada;