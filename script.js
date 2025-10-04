let gridContainer = document.getElementById('grid-container');

for (let i = 0; i <= 15;  i++) {
    let gridRow = document.createElement('div');
    gridRow.classList.add('grid-row');
    gridRow.setAttribute('id', `row-${i}`);
    
    for (let j = 0; j <= 15; j++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.setAttribute('id', `square-${i}`);
        gridRow.appendChild(gridSquare);
    };
    gridContainer.appendChild(gridRow);
};