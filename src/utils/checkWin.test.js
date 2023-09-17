/**
 * @jest-environment jsdom
 */

import createGrid from '../components/createGrid';
import checkWin from './checkWin';

describe('checkWin function', () => {
    test('should return true if there are three X in a horizontal line', () => {
        const grid = createGrid();
        grid.children[0].innerText = 'X';
        grid.children[1].innerText = 'X';
        grid.children[2].innerText = 'X';

        const checkWinResult = checkWin(grid);
        expect(checkWinResult).toEqual(true);
    });
    test('should return undefined if there are not three equal marks in a line so there is no winner', () => {
        const grid = createGrid();
        grid.children[0].innerText = 'X';
        grid.children[1].innerText = 'X';
        grid.children[2].innerText = '0';
        grid.children[3].innerText = '0';
        grid.children[4].innerText = '0';
        grid.children[5].innerText = 'X';
        grid.children[6].innerText = 'X';
        grid.children[7].innerText = 'X';
        grid.children[8].innerText = '0';

        const checkWinResult = checkWin(grid);
        expect(checkWinResult).toEqual(undefined);
    });
    test('should return true if there are three 0 in a horizontal line', () => {
        const grid = createGrid();
        grid.children[0].innerText = '0';
        grid.children[1].innerText = '0';
        grid.children[2].innerText = '0';

        const checkWinResult = checkWin(grid);
        expect(checkWinResult).toEqual(true);
    });
    test('should return true if there are three 0 in a vertical line', () => {
        const grid = createGrid();
        grid.children[0].innerText = 'X';
        grid.children[1].innerText = '0';
        grid.children[2].innerText = '0';
        grid.children[3].innerText = '0';
        grid.children[4].innerText = 'X';
        grid.children[5].innerText = '0';
        grid.children[6].innerText = '0';
        grid.children[7].innerText = '0';
        grid.children[8].innerText = 'X';

        const checkWinResult = checkWin(grid);
        expect(checkWinResult).toEqual(true);
    });
});
