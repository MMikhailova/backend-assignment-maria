

const createMessage = () => {
    const message = document.createElement('div')
    message.id = 'message'
    message.className = 'message'
                message.innerText="Player X's turn"
  return message
}

export default createMessage
