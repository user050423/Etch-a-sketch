// create resize button
const resizeButton = document.createElement('button');
resizeButton.classList.add('resize-button');
resizeButton.textContent = 'Resize Grid';
document.body.appendChild(resizeButton);

// create container once
const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);


function createGrid(size) {
    container.innerHTML = ''; // clear existing grid

    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('square');
            cell.addEventListener('mouseover', () => {
                // Set a random color on each hover
                cell.style.backgroundColor = getRandomColor();
            });
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

function getRandomColor() {
    // Return a random color in hex format (e.g. #3fa2c1)
    return `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`;
}


resizeButton.addEventListener('click', () => {
    let newSize = parseInt(prompt('Enter the number of squares per side (up to 100):'));
    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }
    createGrid(newSize);
});

createGrid(16); // start with default 16x16