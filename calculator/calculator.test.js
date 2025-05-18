const { add } = require('./calculator');

test('somma 2 + 2 deve essere uguale a 4', () => {
  const risultato = add(2, 2);  // 1. Somma e memorizza in una variabile
  expect(risultato).toBe(4);    // 2. Verifica con asserzione
});
test.skip('somma 2 + 3 deve essere sbagliato', () => {
    const risultato = add(2, 3);  // 1. Somma e memorizza in una variabile
    expect(risultato).toBe(7); // 2. Verifica con asserzione
    });