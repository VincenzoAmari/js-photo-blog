// [
//   {
//       "id": 1,
//       "title": "Skate Park",
//       "date": "01-07-2024",
//       "url": "https://marcolanci.it/boolean/assets/pictures/1.png"
//   },
//   {
//       "id": 2,
//       "title": "Passeggiata",
//       "date": "16-07-2024",
//       "url": "https://marcolanci.it/boolean/assets/pictures/2.png"
//   },
//   {
//       "id": 3,
//       "title": "Alpi",
//       "date": "01-07-2024",
//       "url": "https://marcolanci.it/boolean/assets/pictures/3.png"
//   },
//   {
//       "id": 4,
//       "title": "Sagra",
//       "date": "21-08-2024",
//       "url": "https://marcolanci.it/boolean/assets/pictures/4.png"
//   },
//   {
//       "id": 5,
//       "title": "Watergun",
//       "date": "23-08-2024",
//       "url": "https://marcolanci.it/boolean/assets/pictures/5.png"
//   },
//   {
//       "id": 6,
//       "title": "Riviera",
//       "date": "30-08-2024",
//       "url": "https://marcolanci.it/boolean/assets/pictures/6.png"
//   }
// ]

const endpoint = "https://lanciweb.github.io/demo/api/pictures/";
const methodFetch = { method: "GET" };

const board = document.querySelector(".board");

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const { date, id, title, url } = item;

      board.innerHTML += `
        <div class="photo">
          <img src="${url}" alt="${title}"/>
          <span class="caption">${date}</span>
          <h3>${title}</h3>
        </div>
      `;
    });
  })
  .catch((error) => {
    console.log("Errore nel recupero dei dati:", error);
  });
