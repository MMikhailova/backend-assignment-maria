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

function match(array1, array2) {
console.log(array1,array2)
    for (const line of array1) {
        const [a, b, c] = line;
        if (
            array2[a] &&
            array2[a] === array2[b] &&
            array2[a]=== array2[c]
        ) {
            return true;
        }
    }

    return false;
}

export default match;
