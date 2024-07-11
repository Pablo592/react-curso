import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Pruebas de 02-template-string', () => {

    test('getSaludo deberetornar "Hola Fernando"', () => {
        const nombre = 'Fernando';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre);
    })
})