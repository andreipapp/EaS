const container = document.querySelector('.container');



const squares = document.querySelectorAll('.dim');

squares.forEach(function (square) {

    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = 'blue';
    })
})