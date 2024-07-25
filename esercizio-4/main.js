/* 
Creare due input di tipo datepicker, ed al click di un bottone calcolate la differenza tra la data2 e la data1. 
Assicurarsi che la seconda sia maggiore della prima.
*/

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const data1 = document.getElementById("data1");
  const data2 = document.getElementById("data2");
  const day1 = new Date(data1.value);
  const day2 = new Date(data2.value);
  console.log(data1.value);
  console.log(data2.value);
  if (day2 < day1) {
    alert("Hai inserito la seconda data minore rispetto alla prima");
  } else {
    const diffTime = Math.abs(day2 - day1);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffDays + " days");
  }
});
