//Constant Variables
const container = document.querySelector('.container')
const clearBtn = document.createElement('button');
const test = document.querySelector('.test');

//Add the "clear" button to the page
clearBtn.textContent = "Start Over";
document.querySelector('body').insertBefore(clearBtn, container);
clearBtn.addEventListener('click', clearGrid);



//Add squares to the page
function createGrid(numOfSquares) {
    let squares = "";
    let i = 0;
    while (i < numOfSquares) {
        squares += `<div class="square"></div>`;
        i++;
    }
    container.innerHTML = squares;

    addEventToSquares();
}

createGrid(100);

//Adds event listeners to squares after being created
function addEventToSquares() {
    const allSquares = document.querySelectorAll('.square');

    allSquares.forEach(square => square.addEventListener('mouseover', function() {
        square.classList.add('blue');
    }));
}



//Clear the grid
function clearGrid() {
    container.innerHTML = "";

    //TODO - need to figure out how to clear the grid without setting innerHTML ="" because this will not remove event listeners which could cause a memory leak

    let newSquares = prompt("Please enter how many squares you would like.");

    if (newSquares <= 100) {
        createGrid(newSquares);
    } else {
        newSquares = prompt("Please enter a number less than 100.");
        createGrid(newSquares);
    }

}

