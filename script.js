const container = document.querySelector('.container');
const gridSizeButton = document.querySelector('.grid-size');
const randomColorButton = document.querySelector('.random-color');
const resetButton = document.querySelector('.reset');

function createGrid(size) {
    removeDivs();
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.classList.add('dim');
            div.style.width = `calc(705px / ${size})`;
            div.style.height = `calc(705px / ${size})`;
            container.appendChild(div);
        }
    }
    addColorOnHover('blue');
}
function removeDivs() {
    const divs = document.querySelectorAll('.dim');
    divs.forEach(function (div) {
        div.remove();
    })
}
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
function addRandomColor() {

    const squares = document.querySelectorAll('.dim');
    squares.forEach(function (square) {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = getRandomColor();
        })
    })
}
function addColorOnHover(color) {
    const squares = document.querySelectorAll('.dim');
    squares.forEach(function (square) {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = color;
        })
    })
}
function reset() {
    const squares = document.querySelectorAll('.dim');
    squares.forEach(function (square) {
        square.style.backgroundColor = null;
    })
}

gridSizeButton.addEventListener('click', () => {
    removeDivs();
    const gridSize = prompt('Enter the size of the grid: ');
    createGrid(gridSize);
    addColorOnHover('blue');
})
randomColorButton.addEventListener('click', () => {
    addRandomColor();
});

resetButton.addEventListener('click', () => {
    console.log('working');
    reset();
})





createGrid(20);
