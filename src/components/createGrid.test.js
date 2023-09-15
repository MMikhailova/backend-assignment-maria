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

    // test('should include a paragraph with the correct sum result', () => {
    //     const sumData = { result: 10 };
    //     const container = createSum(sumData);
    //     const resultParagraph = container.querySelector('p');
    //     expect(resultParagraph.innerText).toEqual(10);
    // });

    // test('should append the result paragraph to the container', () => {
    //     const sumData = { result: 7 };
    //     const container = createSum(sumData);
    //     expect(container.children.length).toEqual(1);
    //     expect(container.firstChild.tagName).toEqual('P');
    // });

    // test('should handle non-numeric results', () => {
    //     const sumData = { result: 'Test Result' };
    //     const container = createSum(sumData);
    //     const resultParagraph = container.querySelector('p');
    //     expect(resultParagraph.innerText).toEqual('Test Result');
    // });

    // test('should handle missing result', () => {
    //     const sumData = {};
    //     const container = createSum(sumData);
    //     const resultParagraph = container.querySelector('p');
    //     expect(resultParagraph.innerText).toEqual(undefined);
    // });
});
