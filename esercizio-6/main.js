/* 
Proviamo a popolare una tabella in modo dinamico partendo da un array di oggetti contenente dei dati e 
da un elemento table in HTML.
*/

const array = [
  {
    id: "1",
    nome: "Roberto",
    cognome: "Rossi",
    email: "robertorossi@gmail.com",
    codiceFiscale: "qwertyuiopasdfgh",
    indirizzo: "via delle rose 5",
  },
  {
    id: "2",
    nome: "Valeria",
    cognome: "Verdi",
    email: "valeriaverdi@gmail.com",
    codiceFiscale: "qwertyuiopasdfgh",
    indirizzo: "via delle rose 5",
  },
  {
    id: "3",
    nome: "Anna",
    cognome: "Blu",
    email: "annablu@gmail.com",
    codiceFiscale: "qwertyuiopasdfgh",
    indirizzo: "via delle rose 5",
  },
];

array.forEach((data) => {
  creaCard(data);
});

function creaCard(data) {
  const table = document.getElementById("table");
  const markup = `
  
  <tbody>
    <td style="padding-right: 20px;"> ${data.id}</td>
    <td style="padding-right: 20px;"> ${data.nome}</td>
    <td style="padding-right: 20px;"> ${data.cognome}</td>
    <td style="padding-right: 20px;"> ${data.email}</td>
    <td style="padding-right: 20px;"> ${data.codiceFiscale}</td>
    <td style="padding-right: 20px;"> ${data.indirizzo}</td>
  </tbody>
  `;
  table.innerHTML += markup;
}
