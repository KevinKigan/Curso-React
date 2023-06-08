
describe('Pruebas en DemoComponent', () => { 
    test('should first', () => { 
        const message1 = 'hola Mundo';
    
        const message2 = message1.trim();
    
        expect(message1).toBe(message2)
    })
 })