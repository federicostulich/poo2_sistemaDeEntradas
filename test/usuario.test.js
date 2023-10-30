const Usuario = require("../src/usuario.js")

describe('Gestion de usuarios', () => {

    test('Crear un usuario', ()=> {
        const usuario = new Usuario("Matias",
                                    "Gonzalez",
                                    "35111222",
                                    new Date(1990, 0, 1))
        expect(usuario.nombre).toBe("Matias")
        expect(usuario.apellido).toBe("Gonzalez")
        expect(usuario.dni).toBe("35111222")
        expect(usuario.fechaNacimiento).toEqual(new Date(1990, 0, 1))
        expect(usuario.esSocio).toBe(false)
    })

    test('Crear un usuario que es socio', ()=> {
        const usuario = new Usuario("Matias",
                                    "Gonzalez",
                                    "35111222",
                                    new Date(1990, 0, 1),
                                    true)
        expect(usuario.esSocio).toBe(true);
    })

    test('Asociar un usuario', ()=> {
        const usuario = new Usuario("Matias", "Gonzalez", "35111222", new Date(1990, 0, 1))
        expect(usuario.esSocio).toBe(false);
        usuario.asociar();
        expect(usuario.esSocio).toBe(true);
    })

})