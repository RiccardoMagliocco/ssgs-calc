const calculator = require('./calc');

test('addizione corretta: 2 + 2 = 4', () => {
    const result = calculator.add(2, 2);
    expect(result).toBe(4);
});

test('addizione sbagliata: 3 + 5 != 7 (fallirà)', () => {
    const result = calculator.add(3, 5);
    expect(result).toBe(7); // Questo fallisce: 3 + 5 = 8, non 7
});
