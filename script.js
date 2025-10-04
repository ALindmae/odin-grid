let gridSize;

let genGridButton = document.querySelector('button');
genGridButton.addEventListener('click', () => {
    gridSize = Number(prompt("What size drawing board would you like? (max 100)"));
    if (gridSize > 100) {
        gridSize = Number(prompt("Too big. Define size smaller than 100"));
    }
    else if (gridSize < 1) {
        gridSize = Number(prompt("Too small. Define size bigger than 1"));
    }

    let squareSize = getSquareSize(gridSize);
    generateGrid(gridSize, squareSize);
});



function generateGrid (gridSize, squareSize) {
    let gridContainer = document.getElementById('grid-container');
    gridContainer.replaceChildren();

    for (let i = 0; i <= gridSize - 1;  i++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        gridRow.setAttribute('id', `row-${i}`);
    
        for (let j = 0; j <= gridSize - 1; j++) {
            let gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            gridSquare.setAttribute('id', `square-${i}`);
            gridSquare.style.width = `${squareSize}px`;
            gridRow.appendChild(gridSquare);
        };

    gridContainer.appendChild(gridRow);
    };

    gridContainer.addEventListener('mouseover', (e) =>  {
    let randomColor = getRandomColor();
    if (!(e.target.style.backgroundColor)) {
        e.target.style.backgroundColor = randomColor;
    }

});  
}

function getSquareSize (gridSize) {
    return squareSize = (960 / gridSize) > 50 ? 50 : (960 / gridSize);
}

function getRandomColor () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let randomColor = `rgb(${r},${g},${b})`
    return randomColor;
}