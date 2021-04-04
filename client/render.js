document.addEventListener('DOMContentLoaded', () => {
    const username = prompt('Enter your username: ') || 'Anonymous'
    const log = document.getElementById('log')
    const client = new Client(username, renderMessage)
    
    document.forms.publish.onsubmit = function() {
        client.sendMessage(this.message.value)
        this.message.value = ''
        return false
    }
    
    function renderMessage(message) {
        const messageElement = document.createElement('li')
        messageElement.innerText = message
        log.appendChild(messageElement)
    }
})