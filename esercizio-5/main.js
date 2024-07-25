/* 
Creare un array di oggetti con delle proprietà come url dell'immagine, titolo e descrizione (3 oggetti).
Con questo array dovete generare dinamicamente delle card con i rispettivi dati inseriti.

*/

const array = [
  {
    url: "https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?w=2000",
    titolo: "Titolo Card1",
    descrizione:
      "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.Lorem consectetur adipiscing elit.",
  },
  {
    url: "https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?w=2000",
    titolo: "Titolo Card2",
    descrizione:
      "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.Lorem consectetur adipiscing elit.",
  },
  {
    url: "https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?w=2000",
    titolo: "Titolo Card3",
    descrizione:
      "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.Lorem consectetur adipiscing elit.",
  },
];

array.forEach((data) => {
  creaCard(data);
});

function creaCard(data) {
  const card = document.getElementById("container");
  const markup = `<div class="w-full md:w-1/2 xl:w-1/3 px-4">
  <div class="bg-white rounded-lg overflow-hidden mb-10 shadow-xl">
    <img
      src="${data.url}"
      alt="image"
      class="w-full"
    />
    <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
      <h3 class="font-semibold text-dark text-xl">${data.titolo}</h3>
      <p class="text-base text-body-color leading-relaxed mb-7">
        ${data.descrizione}
      </p>
    </div>
  </div>
</div>
  `;
  card.innerHTML += markup;
}
