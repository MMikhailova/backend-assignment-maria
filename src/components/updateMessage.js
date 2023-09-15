import dom from "../dom.js"

import data from "../data.js";

const updateMessage = () => {
dom.container.querySelector('#message').innerText = `Player ${data.currentPlayer}'s turn`;
}

export default updateMessage
