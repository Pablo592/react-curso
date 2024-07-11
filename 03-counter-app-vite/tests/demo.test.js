describe('Pruebas', () => {

    test('should first', () => {
    
        // 1. Inicialización
        const message = 'Hello World';
    
        // 2. Estímulo
        const message2 = message.trim();
    
        // 3. Observar el comportamiento
        expect(message).toBe(message2);
    
    })
})