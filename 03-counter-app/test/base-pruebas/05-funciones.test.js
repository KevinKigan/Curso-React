import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('Test getUser', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(testUser);

    })

    test('Test getUsuarioActivo', () => {
        const name = 'Kevin'
        
        const testUser = {
            uid: 'ABC567',
            username: name
        }

        const user = getUsuarioActivo('Kevin')

        expect(user).toStrictEqual(testUser);

    })
})
