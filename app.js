const readline = require('readline');
const calculator = require('./calc');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Benvenuto nella Calcolatrice CLI!");
console.log("Operazioni disponibili:");
console.log(" - add (somma)");
console.log(" - subtract (sottrazione)");
console.log(" - multiply (moltiplicazione)");
console.log(" - divide (divisione)");
console.log("Digita 'exit' per uscire.");
console.log("----------------------------------");

function askOperation() {
    rl.question("Seleziona un'operazione: ", function (operation) {
        operation = operation.toLowerCase();

        if (operation === 'exit') {
            console.log("Grazie per aver utilizzato la calcolatrice. Arrivederci!");
            rl.close();
            return;
        }

        if (!['add', 'subtract', 'multiply', 'divide'].includes(operation)) {
            console.log("Errore: operazione non riconosciuta.");
            askOperation(); // ripeti la richiesta
            return;
        }

        rl.question("Inserisci il primo numero: ", function (num1) {
            rl.question("Inserisci il secondo numero: ", function (num2) {
                const a = parseFloat(num1);
                const b = parseFloat(num2);

                if (isNaN(a) || isNaN(b)) {
                    console.log("Errore: uno o entrambi i valori non sono numeri validi.");
                    askOperation(); // ripeti la richiesta
                    return;
                }

                try {
                    let result;
                    switch (operation) {
                        case 'add':
                            result = calculator.add(a, b);
                            break;
                        case 'subtract':
                            result = calculator.subtract(a, b);
                            break;
                        case 'multiply':
                            result = calculator.multiply(a, b);
                            break;
                        case 'divide':
                            result = calculator.divide(a, b);
                            break;
                    }

                    console.log(`Risultato: ${result}`);
                } catch (err) {
                    console.error("Errore:", err.message);
                }

                console.log("----------------------------------");
                askOperation();
            });
        });
    });
}

askOperation();
