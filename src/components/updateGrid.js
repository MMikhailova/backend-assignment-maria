import data from "../data.js";
import dom from "../dom.js";



const updateGrid = () => {
    const grid=dom.container.querySelector('#grid')
     for (const cell of grid.children) {
            cell.innerText = "";
            cell.classList.remove("X", "O");
        }
       data.currentPlayer = "X";
        data.gameOver = false;
        dom.container.querySelector('#message').innerText = "Player X's turn";
    
  
}

export default updateGrid
