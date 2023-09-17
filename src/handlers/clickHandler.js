import updateMessage from '../components/updateMessage.js';
import data from '../data.js';
import dom from '../dom.js';
import checkWin from '../utils/checkWin.js';
import isBoardFull from '../utils/isBoardFull.js';

const clickHandler = (cell) => {
    const message = dom.container.querySelector('#message');
    const grid = dom.container.querySelector('#grid');
    // Checking if the game is finished or keep playing and define the turn
    cell.innerText = data.currentPlayer;
    cell.classList.add(data.currentPlayer);

    if (checkWin(grid)) {
        message.innerText = `Player ${data.currentPlayer} wins!`;
        data.gameOver = true;
    } else if (isBoardFull(grid)) {
        message.innerText = "It's a draw!";
        data.gameOver = true;
    } else {
        data.currentPlayer = data.currentPlayer === 'X' ? 'O' : 'X';
        updateMessage(message);
    }
};

export default clickHandler;
