const username = prompt('Enter your username: ') || 'Anonymous'
const form = document.getElementById('send')
const input = document.getElementById('input')
const log = document.getElementById('log')

form.addEventListener('submit', e => {
    sendMessage(username + ": " + input.value)
    input.value = ''
    e.preventDefault()
})

function renderMessage(message) {
    const messageElement = document.createElement('li')
    messageElement.innerText = message
    log.appendChild(messageElement)
}