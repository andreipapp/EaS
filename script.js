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
    addColorOnHover();
}
function removeDivs() {
    const divs = document.querySelectorAll('.dim');
    divs.forEach(function (div) {
        div.remove();
    })
}
function addColorOnHover() {
    const squares = document.querySelectorAll('.dim');
    squares.forEach(function (square) {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'blue';
        })
    })
}
gridSizeButton.addEventListener('click', () => {
    removeDivs();
    const gridSize = prompt('Enter the size of the grid: ');
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const div = document.createElement('div');
            div.setAttribute('class', 'dim');
            div.setAttribute('style', `width: calc(705px/${gridSize}); height: calc(705px/${gridSize})`);
            container.appendChild(div);
        }
    }
    addColorOnHover();
})




createGrid(20);