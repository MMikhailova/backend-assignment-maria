/**
  * Check if there is a winner.
  * Compare a grid cells innerText with the winning combination in array. If there is a match return true, otherwise false.
 * @param {grid}  - div element with id grid and children with id cells
 * @returns {boolean} true or false -  Return true if three div children of the grid are equal
 */
function checkWin(grid) {
    debugger
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const line of lines) {
        const [a, b, c] = line;
        if (grid.children[a].innerText &&
            grid.children[a].innerText === grid.children[b].innerText &&
            grid.children[a].innerText === grid.children[c].innerText) {
            return true;
        } 
    }
}

    export default checkWin;