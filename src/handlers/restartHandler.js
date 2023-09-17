import createGrid from '../components/createGrid.js';
import createMessage from '../components/createMessage.js';
import updateGrid from '../components/updateGrid.js';
// import data from "../data.js";
import dom from '../dom.js';

const restartHandler = () => {
    const gridExist = document.getElementById('grid');
    const message = document.getElementById('message');
    if (!gridExist) {
        dom.container.append(createMessage()),
            dom.container.append(createGrid());
    } else {
        updateGrid(gridExist, message);
    }
};
export default restartHandler;
