"use strict";
const Entrada = require("../src/entrada.js")
const Usuario = require("../src/usuario.js")
const Socio = require("../src/socio.js")

describe('Calcular precio de entrada segun tipo de usuario', () => {

    test('Precio de entrada se mantiene cuando el usuario no es socio', ()=> {
        const entrada = new Entrada(100,25);
        const usuario = new Usuario("Matias", "Gonzalez", "35111222", new Date(1990, 0, 1));
        entrada.comprar(usuario);
        expect(usuario.esSocio()).toBe(false);
        expect(entrada.precio).toBe(100);
        expect(entrada.calcularPrecioFinal()).toBe(100);
    });

    test('Precio de entrada tiene un 20 porciento de descuento cuando el usuario es socio', ()=> {
        const entrada = new Entrada(100,25);
        const usuario = new Usuario("Matias", "Gonzalez", "35111222", new Date(1990, 0, 1), new Socio(), "123456", "Libertador 123");
        entrada.comprar(usuario);
        expect(usuario.esSocio()).toBe(true);
        expect(entrada.precio).toBe(100);
        expect(entrada.calcularPrecioFinal()).toBe(80);
    });

    test('No es posible calcular el precio final de una entrada si no fue comprada por un usuario', ()=> {
        const entrada = new Entrada(100,25);
        expect(entrada.calcularPrecioFinal).toThrow(new Error("La entrada no tiene un usuario asociado."));
    });

});