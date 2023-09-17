// import dom from '../dom.js';
import clickHandler from '../handlers/clickHandler.js';

const clickListener = (cell) => {
    cell.addEventListener('click', () => clickHandler(cell));
};
export default clickListener;
