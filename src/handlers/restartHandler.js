import data from "../data.js";
import dom from "../dom.js";



const restartHandler = () => {
        for (const cell of dom.cells) {
            cell.innerText = '';
            cell.classList.remove('X', 'O');
        }
        data.currentPlayer = 'X';
        data.gameOver = false;
       dom.message.innerText = "Player X's turn";
}
    export default restartHandler