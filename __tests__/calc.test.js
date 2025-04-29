const { add, subtract, multiply, divide } = require('../calc');

describe('Funzioni calcolatrice', () => {
    test('add() somma due numeri', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('subtract() sottrae due numeri', () => {
        expect(subtract(5, 2)).toBe(3);
    });

    test('multiply() moltiplica due numeri', () => {
        expect(multiply(4, 3)).toBe(12);
    });

    test('divide() divide due numeri', () => {
        expect(divide(10, 2)).toBe(5);
    });

    test('divide() lancia errore su divisione per zero', () => {
        expect(() => divide(5, 0)).toThrow("Divisione per zero non consentita.");
    });
});
