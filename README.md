# JSWebSocketExample

This is a simple demonstration of WebSockets in JavaScript.

## What it does
Most part of the code is used to accomplish the connection between the server and its clients. The main functionality of this application is to send messages to the server who then broadcats the message to all connected clients. The clients show all messages they recieve in a list. Each client can have a different username in order to distinguish between them.

## How to run
### Run the server using node and npm:
1. Install the dependencies:
    ```
    npm ci
    ```
2. Execute the main.js server script with Node.js:
    ```
    npm start
    ```
### Run one or multiple clients:
All you need to do to run the client which will connect to the server via localhost is opening the `client\index.html` file.
