/* 
Utilizzando la programmazione ad oggetti create una classe per il mazzo e tutti i metodi necessari per mischiarlo, 
pescare e rimettere una carta in fondo. Limitatevi all’inizio ad avere 13 carte, quindi dall’asso al re.

Utilizzate dei console log per mandare a schermo la situazione del mazzo ad ogni operazione nonché le carte che pescate 
e rimettete nel mazzo.
*/

class mazzo {
  constructor(carte) {
    this.carte = carte;
    console.log(carte);
    this.cartaPescata;
  }

  shuffle() {
    let currentIndex = this.carte.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [this.carte[currentIndex], this.carte[randomIndex]] = [
        this.carte[randomIndex],
        this.carte[currentIndex],
      ];
    }

    console.log(this.carte);
  }

  draw() {
    drawCard = this.carte.shift();
    console.log(drawCard);
    console.log(this.carte);
    this.cartaPescata = drawCard;
    return drawCard;
  }

  push() {
    this.carte.push(this.cartaPescata);
    console.log(this.carte);
  }
}

const mazzo1 = new mazzo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
console.log("🚀 ~ mazzo1:", mazzo1);

const mixBtn = document.getElementById("mix");
mixBtn.addEventListener("click", () => mazzo1.shuffle());
const drawBtn = document.getElementById("draw");
drawBtn.addEventListener("click", () => mazzo1.draw());
const pushBtn = document.getElementById("push");
pushBtn.addEventListener("click", () => mazzo1.push());
