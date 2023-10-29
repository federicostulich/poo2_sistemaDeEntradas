const Entrada = require("./entrada.js")

describe('Crear y comrpar entradas//Gestion de entradas', () => {

    test('Crear una entrada', ()=> {
        const entrada = new Entrada(100,25)
        expect(entrada.precio).toBe(100)
        expect(entrada.ubicacion).toBe(25)
    })

    test('Una entrada está disponible', ()=> {
        const entrada = new Entrada(100,25)
        expect(entrada.estaDisponible).toBe(true);
    })

    test('Comprar entrada', ()=> {
        const entrada = new Entrada(100,25)
        entrada.comprar("Juan")
        expect(entrada.estaDisponible).toBe(false);
    })

    test('Intento comprar una entrada ya vendida', ()=> {
        const entrada = new Entrada(100,25)
        entrada.comprar("Juan")  
        expect(entrada.comprar).toThrow(new Error('No esta disponible'));
    })

    test('Entrada guarda informacion del comprador', ()=> {
        const entrada = new Entrada(100,25)
        entrada.comprar("Juan")  
        expect(entrada.comprador).toBe("Juan");
    })

    test('Comprar entrada necesita un comprador', ()=> {
        const entrada = new Entrada(100,25)
        expect(entrada.comprar).toThrow(new Error("Necesita informacion del comprador"));
    })
})