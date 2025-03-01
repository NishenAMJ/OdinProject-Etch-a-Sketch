const content = document.querySelector(".container");

const gettheNum = document
  .querySelector(".btn")
  .addEventListener("click", () => {
    createGrid(userinput());
  });
let isGridCreated = false;
content.style.backgroundColor = colorRandom();
function userinput() {
  const inputnum = prompt("Enter the number of squares you want to create");
  if (inputnum > 100) {
    alert("Please enter a number less than 100");
    return;
  }
  return inputnum;
}
function createGrid(num) {
  ClearGrid();
  for (let i = 0; i < num; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");
    content.appendChild(row);

    for (let j = 0; j < num; j++) {
      const square = document.createElement("div");
      square.classList.add("grid-square");
      row.appendChild(square);

      const squares = document.querySelectorAll(".grid-square");

      squares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
          square.style.backgroundColor = colorRandom();
          square.style.transition = "background-color 0.5s linear";
        });

        square.addEventListener("mouseleave", () => {
          square.style.backgroundColor = "";
        });
      });
    }
  }
}
function ClearGrid() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

function colorRandom() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
}
