"use strict";
const Entrada = require("../src/entrada.js")
const Usuario = require("../src/usuario.js")

describe('Calcular precio de entrada segun tipo de usuario', () => {

    test('Precio de entrada se mantiene cuando el usuario no es socio', ()=> {
        const entrada = new Entrada(100,25);
        const usuario = new Usuario("Matias", "Gonzalez", "35111222", new Date(1990, 0, 1));
        entrada.comprar(usuario);
        expect(entrada.precio).toBe(100);
        expect(entrada.calcularPrecioFinal()).toBe(100);
    })

})