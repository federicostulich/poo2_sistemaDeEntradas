"use strict";
const Usuario = require("../src/usuario.js")
const Socio = require("../src/socio.js")

describe('Gestion de usuarios', () => {

    test('Crear un usuario', ()=> {
        const usuario = new Usuario("Matias",
                                    "Gonzalez",
                                    "35111222",
                                    new Date(1990, 0, 1));
        expect(usuario.nombre).toBe("Matias");
        expect(usuario.apellido).toBe("Gonzalez");
        expect(usuario.dni).toBe("35111222");
        expect(usuario.fechaNacimiento).toEqual(new Date(1990, 0, 1));
        expect(usuario.esSocio()).toBe(false);
    });

    test('Crear un usuario que es socio', ()=> {
        const usuario = new Usuario("Matias",
                                    "Gonzalez",
                                    "35111222",
                                    new Date(1990, 0, 1),
                                    new Socio(),
                                    "123456",
                                    "Libertador 123");
        expect(usuario.esSocio()).toBe(true);
        expect(usuario.tarjeta).toBe("123456");
        expect(usuario.direccion).toBe("Libertador 123");
    });

    test('Asociar un usuario', ()=> {
        const usuario = new Usuario("Matias", "Gonzalez", "35111222", new Date(1990, 0, 1));
        expect(usuario.esSocio()).toBe(false);
        usuario.asociar();
        expect(usuario.esSocio()).toBe(true);
    });

    test('Desasociar un usuario', ()=> {
        const usuario = new Usuario("Matias", "Gonzalez", "35111222", new Date(1990, 0, 1), new Socio(), "123456", "Libertador 123");
        expect(usuario.esSocio()).toBe(true);
        usuario.desasociar();
        expect(usuario.esSocio()).toBe(false);
    });

    test('No es posible asociar un usuario que ya es socio', ()=> {
        const usuario = new Usuario("Matias", "Gonzalez", "35111222", new Date(1990, 0, 1), new Socio(),"123456", "Libertador 123");
        expect(usuario.esSocio()).toBe(true);
        expect(usuario.asociar).toThrow(new Error("El usuario ya es socio."));
    });

    test('No es posible desasociar un usuario que no es socio', ()=> {
        const usuario = new Usuario("Matias", "Gonzalez", "35111222", new Date(1990, 0, 1));
        expect(usuario.esSocio()).toBe(false);
        expect(usuario.desasociar).toThrow(new Error("El usuario no es socio."));
    });

    test('No es posible crear socio sin tarjeta', ()=> {
        const creacionUsuario = () => new Usuario("Matias", "Gonzalez", "35111222", new Date(1990, 0, 1), new Socio());
        expect(creacionUsuario).toThrow(new Error("Los socios necesitan un numero de tarjeta."));
    });

    test('No es posible crear socio sin direccion', ()=> {
        const creacionUsuario = () => new Usuario("Matias", "Gonzalez", "35111222", new Date(1990, 0, 1), new Socio(), "123456");
        expect(creacionUsuario).toThrow(new Error("Los socios necesitan una direccion."));
    });
});