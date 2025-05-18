# Calcolatrice CLI

Una semplice calcolatrice da linea di comando (CLI) sviluppata in Node.js. Supporta addizione, sottrazione, moltiplicazione e divisione, con gestione degli errori come la divisione per zero. Permette sessioni multiple: dopo ogni calcolo puoi eseguire una nuova operazione senza riavviare il programma.

## Tecnologie utilizzate

- **Node.js** (>= 18.0.0)
- **Jest** per i test automatici
- **GitHub Actions** per la Continuous Integration (CI)

## Installazione

Assicurati di avere **Node.js** versione 18 o superiore installato.

1. Clona il repository:
   ```sh
   git clone https://github.com/RiccardoMagliocco/ssgs-calc
   cd ssgs-calc
   ```

2. Installa le dipendenze:
   ```sh
   npm ci
   ```

## Esecuzione

Per avviare la calcolatrice CLI:
```sh
npm start
```

### Esempio di utilizzo

```
Benvenuto nella Calcolatrice CLI!
Operazioni disponibili:
1. Addizione
2. Sottrazione
3. Moltiplicazione
4. Divisione
Digita 'exit' per uscire.
----------------------------------
Seleziona un'operazione (1-4): 1
Inserisci il primo numero: 5
Inserisci il secondo numero: 3
Risultato: 8
Grazie per aver usato la Calcolatrice. Arrivederci!
```

- Se provi a dividere per zero, il programma segnalerà l’errore.
- Puoi digitare `exit` in qualsiasi momento per uscire.

## Esecuzione dei test

Per eseguire i test automatici e visualizzare la copertura:
```sh
npm test
```
Verrà generato un report di coverage nella cartella `coverage/`.

## Continuous Integration (CI)

Ad ogni push o pull request sulla branch `main`, la pipeline CI (GitHub Actions) esegue i test e carica il report di coverage come artifact.

## Struttura del progetto

- `calculator/app.js` — Entry point CLI
- `calculator/calculator.js` — Funzioni matematiche
- `calculator/calculator.test.js` — Test unitari
- `.github/workflows/nodejs-ci.yml` — Pipeline CI

## Autore

Riccardo Magliocco
