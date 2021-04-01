let socket = new WebSocket("ws://localhost:8080");
const nl = "<br>";

socket.onopen = event => {
    document.write("[open] Connection established" + nl);
    document.write("Sending to server" + nl);
    let name = prompt("Username: ");
    socket.send(`My name is ${name}`);
};

socket.onmessage = event => {
    document.write(`[message] Data received from server: ${event.data}` + nl);
};

socket.onclose = event => {
    if (event.wasClean) {
        document.write(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}` + nl);
    } else {
        // e.g. server process killed or network down
        // event.code is usually 1006 in this case
        document.write('[close] Connection died' + nl);
    }
};

socket.onerror = error => {
    document.write(`[error] ${error.message}` + nl);
};