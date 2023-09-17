/**
 * @jest-environment jsdom
 */

import data from '../data';
import createGrid from './createGrid';
import createMessage from './createMessage';
import updateMessage from './updateMessage';

describe('updateMessage function', () => {
    test('should update message as to display current player turn ', () => {
        const grid = createGrid();
        const message = createMessage();
        updateMessage(grid, message);
        expect(message.innerText).toEqual(
            `Player ${data.currentPlayer}'s turn`,
        );
    });
});
