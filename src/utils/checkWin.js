/**
  * Check if elements on defined positions in the array are equal.
  * The first array defines which elements to compare.
  * The compared elements are defined by their order in the second array.
 *
 * @param {array} array1 - The first array defines the order of elements to compare between each other
 * @param {array} array2 - The second array to be compared
 * @returns {boolean} true or false -  Return true if at least one combination of elements of the seconde array are equal between them
 *
 */

function checkWin(grid) {
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