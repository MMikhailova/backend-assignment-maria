/**
 * True or False
 * The code checks if the all cells of the board are full
 * @param {array} array - The array of node elements
 * @returns {Boolean} true or false - Returns true if all elements in the array have rendered text content
 *
 *
 * @example
 * const array = [div.cell.X, div.cell, div.cell.X, div.cell, div.cell, div.cell.O, div.cell, div.cell, div.cell]
 * return false //not all nodes render text content
 */

function isBoardFull(array) {
    for (const element of array) {
        if (!element.innerText) {
            return false;
        }
    }
    return true;
}
export default isBoardFull;
