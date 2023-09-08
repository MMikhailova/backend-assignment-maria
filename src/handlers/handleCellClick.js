import data from "../data.js";
import dom from "../dom.js";
import isBoardFull from "../utils/isFull.js";
import match from "../utils/matchArrays.js";

const handleCellClick = (cell) => {
  
    // Checking if the game is finished or keep playing and define the turn
    if (cell.innerText || data.gameOver) return;

    cell.innerText = data.currentPlayer;
    cell.classList.add(data.currentPlayer);
    //Creating an array for the board cells content
    let boardArray = [];
    for (const cell of dom.cells) {
        boardArray.push(cell.innerText);
    }
    //Match the winning combination with the current board
    if (
        match(
            [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
            ],
            boardArray,
        )
    ) {
        dom.message.innerText = `Player ${data.currentPlayer} wins!`;
        data.gameOver = true;
    } else if (isBoardFull(dom.cells)) {
        dom.message.innerText = "It's a draw!";
        data.gameOver = true;
    } else {
        data.currentPlayer = data.currentPlayer === 'X' ? 'O' : 'X';
        dom.message.innerText = `Player ${data.currentPlayer}'s turn`;
    }
  

}
export default handleCellClick;