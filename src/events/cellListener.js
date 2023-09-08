import dom from '../dom.js';
import handleCellClick from '../handlers/handleCellClick.js';

const cellListener = () => {
    for (const cell of dom.cells) {
        cell.addEventListener("click",()=> handleCellClick(cell));
    }
};
export default cellListener;
