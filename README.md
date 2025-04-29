**Progetto sviluppato in Node.js per la realizzazione di una calcolatrice con operazioni di base e test unitari con copertura del codice.**

## Scopo del progetto
Il progetto ha lo scopo di implementare una calcolatrice che supporti le seguenti operazioni matematiche di base:
- **Somma**
- **Sottrazione**
- **Moltiplicazione**
- **Divisione**
- **Operazioni Multiple**

## Funzionalità
- La calcolatrice supporta quattro operazioni:
  - **Somma**: `add(a, b)`
  - **Sottrazione**: `subtract(a, b)`
  - **Moltiplicazione**: `multiply(a, b)`
  - **Divisione**: `divide(a, b)` (con gestione dell'errore per la divisione per zero)
  
- È presente un insieme di test unitari che copre il **100% del codice**, implementato con **Jest**.

## Tecnologie
- **Node.js**: Ambiente di esecuzione.
- **Jest**: Framework di testing.
- **GitHub Actions**: CI/CD pipeline per eseguire i test in modo automatico.

## Installazione
Per eseguire il progetto, assicurati di avere **Node.js** e **npm** installati sulla tua macchina. Poi, segui questi passi:

1. Clona il repository:
   '''bash
   git clone https://github.com/tuo-utente/ssgs-calc.git
   cd ssgs-calc
