const { add, subtract, multiply, divide } = require('./calculator');

test('somma 2 + 2 deve essere uguale a 4', () => {
  const risultato = add(2, 2);
  expect(risultato).toBe(4);
});

test('somma 2 + 3 deve essere uguale a 5', () => {
  const risultato = add(2, 3);
  expect(risultato).toBe(5);
});

test('sottrazione 5 - 3 deve essere uguale a 2', () => {
  const risultato = subtract(5, 3);
  expect(risultato).toBe(2);
});

test('moltiplicazione 4 * 3 deve essere uguale a 12', () => {
  const risultato = multiply(4, 3);
  expect(risultato).toBe(12);
});

test('divisione 10 / 2 deve essere uguale a 5', () => {
  const risultato = divide(10, 2);
  expect(risultato).toBe(5);
});

test('divisione per zero deve lanciare un errore', () => {
  expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
});