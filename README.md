```markdown
# ssgs-calc

**Laboratorio 6: Calcolatrice.**

## Funzionalità

Le funzioni implementate sono:

- `add(a, b)` → Somma
- `subtract(a, b)` → Sottrazione
- `multiply(a, b)` → Moltiplicazione
- `divide(a, b)` → Divisione (con gestione dell'errore per divisione per zero)

La funzione aggiuntiva implementata è:

-  `exit` -> Possibilità di svolgere più azioni e non una sola, con la possibilità di uscire quando si vuole
## Tecnologie utilizzate

- [Node.js](https://nodejs.org/)
- [Jest](https://jestjs.io/) per i test
- [GitHub Actions](https://docs.github.com/en/actions) per la Continuous Integration

## Installazione

Assicurati di avere Node.js installato. Poi, segui questi passaggi:

```bash
git clone https://github.com/tuo-username/ssgs-calc.git
cd ssgs-calc
npm install
```

## Esecuzione

Per eseguire i test:

```bash
npm test
```

Per generare anche la copertura del codice:

```bash
npm test -- --coverage
```

Al termine, troverai il report dettagliato nella cartella `coverage`.

## Integrazione Continua (CI)

Il progetto utilizza GitHub Actions per eseguire i test automaticamente ad ogni `push` o `pull request` sul ramo `master`.

La pipeline esegue:
- Installazione delle dipendenze
- Esecuzione dei test
- Generazione del report di copertura del codice

Puoi visualizzare i risultati direttamente nella sezione **Actions** del repository.

## Esempio di utilizzo

```javascript
const { add, subtract, multiply, divide } = require('./calc');

console.log(add(5, 3));        // Output: 8
console.log(subtract(10, 4)); // Output: 6
console.log(multiply(2, 6));  // Output: 12
console.log(divide(9, 3));    // Output: 3
```

## Copertura del codice

I test coprono il 100% delle righe di codice, come richiesto dal progetto. Il report HTML è consultabile aprendo `coverage/lcov-report/index.html` nel browser.
