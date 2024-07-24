/* 
Creare un array con un numero casuale di numeri interi e calcolate la somma totale.
*/

let arrayLength = Math.floor(Math.random() * 20 + 1);
console.log(arrayLength);
const numberArray = [];

let sum = 0;

for (let i = 0; i < arrayLength; i++) {
  let number = Math.floor(Math.random() * 100);
  numberArray.push(number);

  sum += number;
}

console.log(numberArray);
console.log(`La somma è: ${sum}`);
