const container = document.createElement('div');
container.classList.add('container');

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < 16; j++) {
        const cell = document.createElement('div');
        cell.classList.add('square');
        row.appendChild(cell);
    }
    container.appendChild(row);
}
document.body.appendChild(container);

const cells = document.querySelectorAll('.square');
cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'black';
    });
});