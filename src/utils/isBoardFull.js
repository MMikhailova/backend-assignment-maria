/**
 * True or False
 * The code checks if the all cells of the board are full
 * @param {dom element} grid- A dom element
 * @returns {Boolean} true or false - Returns true if all children.inner  in the array have rendered text content
 *
 *
 * @example
 * const array = [div.cell.X, div.cell, div.cell.X, div.cell, div.cell, div.cell.O, div.cell, div.cell, div.cell]
 * return false //not all nodes render text content
 */

function isBoardFull(grid) {
    for (const cell of grid.children) {
        if (!cell.innerText) {
            return false;
        }
    }
    return true;
}
export default isBoardFull;
