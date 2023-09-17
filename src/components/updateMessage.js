import data from '../data.js';

const updateMessage = (message) => {
    message.innerText = `Player ${data.currentPlayer}'s turn`;
};

export default updateMessage;
