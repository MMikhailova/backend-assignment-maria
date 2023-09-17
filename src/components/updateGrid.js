import data from "../data.js";
// import dom from "../dom.js";
import updateMessage from "./updateMessage.js";



const updateGrid = (grid, message) => {
       console.log(message)
     for (const cell of grid.children) {
            cell.innerText = "";
            cell.classList.remove("X", "O");
        }
       data.currentPlayer = "X";
        data.gameOver = false;
       updateMessage(message)
    
  
}

export default updateGrid
