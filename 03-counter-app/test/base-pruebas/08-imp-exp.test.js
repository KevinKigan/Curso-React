import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas 08-imp-exp', () => { 
    test('Test getHeroeById', () => { 
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({id: 1,name: 'Batman',owner: 'DC'})
     })
    
    
     test('Test getHeroeById undefined', () => { 
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy()
     })
    
     test('Test getHeroesByOwner DC', () => { 
        const owner = 'DC';
        const listHeroesDC = getHeroesByOwner(owner);
        console.log(typeof(listHeroesDC));

        // expect(hero).toBeFalsy()
        expect(listHeroesDC.length).toBe(3);
        expect(listHeroesDC).toEqual(expect.any(Array));
        expect(listHeroesDC).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]);
          expect(listHeroesDC).toEqual(listHeroesDC.filter( (heroe) => heroe.owner === owner));
     })
    
     test('Test getHeroesByOwner DC', () => { 
        const owner = 'Marvel';
        const listHeroesMarvel = getHeroesByOwner(owner);
        console.log(listHeroesMarvel);

        // expect(hero).toBeFalsy()
        expect(listHeroesMarvel.length).toBe(2);
        expect(listHeroesMarvel).toEqual(expect.any(Array));
        expect(listHeroesMarvel).toEqual(listHeroesMarvel.filter( (heroe) => heroe.owner === owner));
        expect(listHeroesMarvel).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
          ]);
     })
 })