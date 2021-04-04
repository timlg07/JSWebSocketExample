class Client {
    
    constructor(username, renderMessage) {
        this.username = username
        this.socket = new WebSocket('ws://localhost:8080')
        
        this.socket.onopen = event => {
            renderMessage('[open] Connection established')
            this.sendMessage('', 'connect')
        }
    
        this.socket.onmessage = event => {
            const data = JSON.parse(event.data)
            const localTime = new Date(data.time).toLocaleTimeString()

            if (data.type === 'connect') {
                renderMessage(`[${localTime}] ${data.user} connected to the server.`)
            } 
            if (data.type === 'message') {
                renderMessage(`[${localTime}] ${data.user}: ${data.text}`)
            }
        }
    
        this.socket.onclose = event => {
            if (event.wasClean) {
                renderMessage(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`)
            } else {
                renderMessage('[close] Connection died')
            }
        }
    
        this.socket.onerror = error => {
            renderMessage(`[error] ${error.message}`)
        }
    }

    sendMessage(text, type = 'message') {
        this.socket.send(JSON.stringify({
            type: type,
            user: this.username,
            time: new Date().getTime(),
            text: text
        }))
    }
}
