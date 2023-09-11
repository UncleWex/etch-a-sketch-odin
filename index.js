let currentGridSize = 16;
let gridRows = [];

const gridContainer = document.querySelector(".grid-container");
const createNewGridButton = document.querySelector(".create-grid");
const clearGridButton = document.querySelector(".clear-grid");

createNewGridButton.addEventListener("click", (e) => {
    for(let i = 0; i < currentGridSize; i++) {
        gridContainer.removeChild(gridRows[i]);
    }
    currentGridSize = Number(prompt("Enter new grid size: ", 16));
    if (Number.isNaN(currentGridSize) || currentGridSize <= 0 || currentGridSize > 100){
        alert("Invalid value! Grid size is set to 16");
        currentGridSize = 16;
    }
    gridRows = [];
    createGrid(currentGridSize);
});

clearGridButton.addEventListener("click", (e) => {
    let cells = document.querySelectorAll("div");
    cells.forEach(cell => cell.classList.remove("grid-cell-painted"));
});

let paintGridCell = (e) => {
    e.target.backgroundColor = "red";
};

let createGrid = (gridSize) => {
    for(let i = 0; i < gridSize; i++) {
        gridRows[i] = document.createElement("div");
        gridRows[i].classList.add("grid-row");
        for(let j = 0; j < gridSize; j++) {
            let gridCell = document.createElement("div");
            gridCell.classList.add("grid-cell");
            gridCell.addEventListener("mouseover", (e) => {
                e.target.classList.add("grid-cell-painted");
            });
            gridRows[i].appendChild(gridCell);
        }
        gridContainer.appendChild(gridRows[i]);
    } 
};

createGrid(currentGridSize);
