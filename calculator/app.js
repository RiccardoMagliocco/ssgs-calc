const readline = require('readline');
const calculator = require('./calculator');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Benvenuto nella Calcolatrice CLI!");
console.log("Operazioni disponibili:");
console.log("1. Addizione");
console.log("2. Sottrazione");
console.log("3. Moltiplicazione");
console.log("4. Divisione");

rl.question("Seleziona un'operazione (1-4): ", (operation) => {
  if (!['1', '2', '3', '4'].includes(operation)) {
    console.error("Operazione non valida.");
    rl.close();
    return;
  }

  rl.question("Inserisci il primo numero: ", (input1) => {
    rl.question("Inserisci il secondo numero: ", (input2) => {
      const a = parseFloat(input1);
      const b = parseFloat(input2);

      if (isNaN(a) || isNaN(b)) {
        console.error("Input non valido: inserire solo numeri.");
        rl.close();
        return;
      }

      try {
        let result;
        switch (operation) {
          case '1': result = calculator.add(a, b); break;
          case '2': result = calculator.subtract(a, b); break;
          case '3': result = calculator.multiply(a, b); break;
          case '4': result = calculator.divide(a, b); break;
        }
        console.log(`Risultato: ${result}`);
      } catch (err) {
        console.error("Errore:", err.message);
      }

      console.log("Grazie per aver usato la Calcolatrice. Arrivederci!");
      rl.close();
    });
  });
});
