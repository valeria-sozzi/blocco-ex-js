/* 
Creare un array con un numero casuale di numeri interi e per ognuno di essi loggare se si tratta di un numero pari o dispari.
Il numero casuale degli elementi deve essere generato dal programma e non messo manualmente.
*/

let arrayLength = Math.floor(Math.random() * 20 + 1);

const numberArray = [];

numberArray.length = arrayLength;

for (let i = 0; i < arrayLength; i++) {
  let number = Math.floor(Math.random() * 100 + 1);
  numberArray.push(number);

  /* if (number % 2 === 0) {
    console.log(`${number} è pari`);
  } else {
    console.log(`${number} è dispari`);
  } */

  const tipo = number % 2 === 0 ? "pari" : "dispari";
  console.log(`${number} è ${tipo}`);
}
