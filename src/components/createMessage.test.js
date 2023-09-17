/**
 * @jest-environment jsdom
 */

import createMessage from './createMessage.js';

describe('createMessage function', () => {
    test('should return a div with the id "message"', () => {
        const message = createMessage();
        expect(message.id).toEqual('message');
        expect(message.tagName).toEqual('DIV');
    });
    test('should display text "X player turn" when new game starts', () => {
        const message = createMessage();
        expect(message.innerText).toEqual("Player X's turn");
    });
});
