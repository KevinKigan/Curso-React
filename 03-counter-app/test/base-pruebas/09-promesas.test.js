import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas'

describe('Pruebas 09-promesas', () => { 
    test('Test getHeroeByIdAsync', (done) => { 
        const id = 1;
        getHeroeByIdAsync(id).then(hero =>{
            expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
            done()
        });
     })
    
    
     test('Test getHeroeByIdAsync Not found', (done) => { 
        const id = 100;
        getHeroeByIdAsync(id).then(hero =>{
            expect(hero).toBeFalsy();
            done()
        }).catch(error =>{
            expect(error).toBe(`No se pudo encontrar el héroe con id ${id}`);
            done();
        });
     })
 })