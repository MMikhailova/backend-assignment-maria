/**
 * @jest-environment jsdom
 */

import createGrid from './createGrid.js';

describe('createGrid function', () => {
    test('should return a div with the id "grid"', () => {
        const grid = createGrid();
        expect(grid.id).toEqual('grid');
        expect(grid.tagName).toEqual('DIV');
    });

    test('should append 9 div with the className "cell" ', () => {
        const grid = createGrid();
        expect(grid.children.length).toEqual(9);
        for (let i = 0; i < 9; i++) {
            expect(grid.children[i].className).toEqual('cell');
        }
    });

    test('all div with class "cell" should not have innerText', () => {
        const grid = createGrid();
        for (const cell of grid.querySelectorAll('cell')) {
            expect(cell.innerText.toEqual(''));
        }
    });
});
