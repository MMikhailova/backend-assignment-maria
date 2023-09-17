/**
 * @jest-environment jsdom
 */

import createGrid from '../components/createGrid.js';
import isBoardFull from './isBoardFull.js';

describe('isBoardFull function', () => {
    test('should return true all cells in the grid have marks', () => {
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

        const isBoardFullResult= isBoardFull(grid)
        expect(isBoardFullResult).toEqual(true);
    });
    test('should return false if there are not marks in all cells in the grid', () => {
        const grid = createGrid();
        grid.children[1].innerText = 'X';
        grid.children[2].innerText = '0';
        grid.children[3].innerText = '0';
        grid.children[4].innerText = '0';
        grid.children[5].innerText = 'X';
        grid.children[6].innerText = 'X';
        grid.children[7].innerText = 'X';
        grid.children[8].innerText = '0';

 const isBoardFullResult = isBoardFull(grid);
 expect(isBoardFullResult).toEqual(false);
    });
   
});
