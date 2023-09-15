import createGrid from "../components/createGrid.js";
import createMessage from "../components/createMessage.js";
import updateGrid from "../components/updateGrid.js";
// import data from "../data.js";
import dom from "../dom.js";


const restartHandler = () => {
 dom.container.querySelector('#grid')? 
    updateGrid()
:
       (dom.container.append(createMessage()),
    dom.container.append(createGrid()))
 
    
}
    export default restartHandler