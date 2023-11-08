"use strict";
const Entrada = require("../src/entrada.js")
const Usuario = require("../src/usuario.js")

describe('Crear y comrpar entradas//Gestion de entradas', () => {


    let entrada;
    let usuario;

    beforeEach(() => {
        entrada = new Entrada(100,25);
        usuario = new Usuario("Matias", "Gonzalez", "35111222", new Date(1990, 0, 1));
    });

    test('Crear una entrada', ()=> {
        expect(entrada.precio).toBe(100);
        expect(entrada.ubicacion).toBe(25);
    });

    test('Una entrada está disponible', ()=> {
        expect(entrada.estaDisponible).toBe(true);
    });

    test('Comprar entrada', ()=> {
        entrada.comprar(usuario);
        expect(entrada.estaDisponible).toBe(false);
    });

    test('Intento comprar una entrada ya vendida', ()=> {
        entrada.comprar(usuario);
        expect(entrada.comprar).toThrow(new Error('No esta disponible'));
    });

    test('Entrada guarda informacion del comprador', ()=> {
        entrada.comprar(usuario);
        expect(entrada.comprador).toBe(usuario);
    });

    test('Comprar entrada necesita un comprador', ()=> {
        expect(entrada.comprar).toThrow(new Error("Necesita informacion del comprador"));
    });

});
