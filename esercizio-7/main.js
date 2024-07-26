/* 
Create una classe tabella che vi permetta di generare nell’html qualsiasi tabella a piacimento. 
Ogni tabella in fase di creazione deve ricevere 2 parametri. 
Un array con i nomi delle colonne ed un array di oggetti che rappresenta i dati delle righe.

Cambiando i dati che forniamo alla tabella in fase di creazione, il risultato deve sempre e 
comunque dare una tabella correttamente generata.

Gestite la tabella con una classe apposita.
*/

class Table {
  proprieta;
  valori;

  constructor(proprieta, valori) {
    this.proprieta = proprieta;
    this.valori = valori;
    this.creaTabella();
  }

  creaTabella() {
    const table = document.getElementById("table");
    table.appendChild(this.creaProprieta());
    table.appendChild(this.creaValori());
    document.querySelector("body").appendChild(table);
  }

  creaProprieta() {
    const thead = document.createElement("thead");
    this.proprieta.forEach((proprieta) => {
      const th = document.createElement("th");
      const text = document.createTextNode(proprieta);
      th.appendChild(text);
      thead.appendChild(th);
    });
    return thead;
  }

  creaValori() {
    const tbody = document.createElement("tbody");
    this.valori.forEach((riga) => {
      const tr = document.createElement("tr");
      Object.keys(riga).forEach((key) => {
        const cella = document.createElement("td");
        const text = document.createTextNode(riga[key]);
        cella.appendChild(text);
        tr.appendChild(cella);
      });
      tbody.appendChild(tr);
    });
    return tbody;
  }
}

const proprieta1 = [
  "id",
  "nome",
  "cognome",
  "email",
  "codice fiscale",
  "indirizzo",
];

const valori1 = [
  {
    id: 1,
    nome: "luca",
    cognome: "rossi",
    email: "lucarossi@gmaail.it",
    codiceFiscale: "kdrwde32f93x109m",
    indirizzo: "via torino",
  },
  {
    id: 1,
    nome: "luca",
    cognome: "rossi",
    email: "lucarossi@gmaail.it",
    codiceFiscale: "kdrwde32f93x109m",
    indirizzo: "via torino",
  },
  {
    id: 1,
    nome: "luca",
    cognome: "rossi",
    email: "lucarossi@gmaail.it",
    codiceFiscale: "kdrwde32f93x109m",
    indirizzo: "via torino",
  },
  {
    id: 1,
    nome: "luca",
    cognome: "rossi",
    email: "lucarossi@gmaail.it",
    codiceFiscale: "kdrwde32f93x109m",
    indirizzo: "via torino",
  },
];

const proprieta2 = ["id", "prodotto", "prezzo"];
const valori2 = [
  {
    id: 1,
    prodotto: "hamburger",
    prezzo: 3.99,
  },
  {
    id: 1,
    prodotto: "hamburger",
    prezzo: 3.99,
  },
  {
    id: 1,
    prodotto: "hamburger",
    prezzo: 3.99,
  },
];

const table1 = new Table(proprieta1, valori1);
const table2 = new Table(proprieta2, valori2);
