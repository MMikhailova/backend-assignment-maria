import dom from '../dom.js';
import restartHandler from '../handlers/restartHandler.js';

const restartListener = () => {
    dom.restartButton.addEventListener('click', restartHandler);
};

export default restartListener;
