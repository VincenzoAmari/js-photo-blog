document.addEventListener("DOMContentLoaded", function () {
  const board = document.querySelector(".board");

  fetch("https://lanciweb.github.io/demo/api/pictures/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      board.innerHTML = "";

      data.forEach((item) => {
        const photoDiv = document.createElement("div");
        photoDiv.classList.add("photo");

        const img = document.createElement("img");
        img.src = item.url;
        img.alt = item.title;

        const caption = document.createElement("p");
        caption.classList.add("caption");
        caption.textContent = `${item.title} - ${item.date}`;

        photoDiv.appendChild(img);
        photoDiv.appendChild(caption);
        board.appendChild(photoDiv);
      });
    })
    .catch((error) => {});
});
