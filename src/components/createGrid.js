import clickListener from '../events/clickListener.js';

const createGrid = () => {
    const grid = document.createElement('div');
    grid.id = 'grid';
    grid.className = 'grid';
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        clickListener(cell);
        grid.appendChild(cell);
    }

    return grid;
};

export default createGrid;
