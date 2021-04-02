let socket = new WebSocket('ws://localhost:8080')

socket.onopen = event => {
    renderMessage('[open] Connection established')
    renderMessage('Sending to server')
    let name = prompt('Username: ') || 'Anonymous'
    sendMessage(`${name} joined the chat.`)
};

socket.onmessage = event => {
    renderMessage(`[message] ${event.data}`)
};

socket.onclose = event => {
    if (event.wasClean) {
        renderMessage(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`)
    } else {
        renderMessage('[close] Connection died')
    }
};

socket.onerror = error => {
    renderMessage(`[error] ${error.message}`)
};

function sendMessage(message) {
    socket.send(message)
}
