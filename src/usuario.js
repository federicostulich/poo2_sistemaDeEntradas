"use strict";

const Socio = require("../src/socio.js")
const NoSocio = require("../src/noSocio.js")

function Usuario(nombre,apellido, dni, fechaNacimiento, membresia = new NoSocio()) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.fechaNacimiento = fechaNacimiento;
    this.membresia = membresia;

    this.asociar = () => {
        this.validarQueEsSocio();
        this.membresia = new Socio();
    };

    this.desasociar = () => {
        this.validarQueNoEsSocio();
        this.membresia = new NoSocio();
    };

    this.validarQueEsSocio = () => {
        this.membresia.validarQueEsSocio()
    };

    this.validarQueNoEsSocio = () => {
        this.membresia.validarQueNoEsSocio()
    };

    this.obtenerDescuento = () => {
        return this.membresia.descuento;
    }

    this.esSocio = () => {
        return this.membresia.esSocio
    }
}

module.exports = Usuario;