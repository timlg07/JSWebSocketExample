const form = document.getElementById('send')
const input = document.getElementById('input')
const chat = document.getElementById('chat')

form.addEventListener('submit', e => {
    sendMessage(input.value)
    input.value = ''
    e.preventDefault()
})

function renderMessage(message) {
    const messageElement = document.createElement('li')
    messageElement.innerText = message
    chat.appendChild(messageElement)
}