/**
 * @jest-environment jsdom
 */
import data from '../data.js';
import createGrid from './createGrid.js';
import createMessage from './createMessage.js';
import updateGrid from './updateGrid.js';

describe('updateGrid function', () => {
    test('all div with class "cell" should not have innerText=""', () => {
        const grid = createGrid();
        grid.children[0].innerText = 'X';
        const message = createMessage();
        updateGrid(grid, message);
        for (const cell of grid.querySelectorAll('cell')) {
            expect(cell.innerText.toEqual(''));
        }
    });
    test('should remove classlist of all div with id cells', () => {
        const grid = createGrid();
        grid.children[0].classList.add('X');
        const message = createMessage();
        updateGrid(grid, message);
        for (const cell of grid.querySelectorAll('cell')) {
            expect(cell.classList.toEqual(''));
        }
    });
    test('should assign X as current player', () => {
        const grid = createGrid();
        data.currentPlayer = '0';
        const message = createMessage();
        updateGrid(grid, message);

        expect(data.currentPlayer).toEqual('X');
    });
    test('should assign gameOver to false', () => {
        const grid = createGrid();
        data.gameOver = true;
        const message = createMessage();
        updateGrid(grid, message);

        expect(data.gameOver).toEqual(false);
    });
});
