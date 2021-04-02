const http = require('http')
const ws = require('ws')

const wss = new ws.Server({ noServer: true })

function accept(req, res) {
    const isWebsocket = req.headers.upgrade.toLowerCase() === 'websocket'
    const isUpgradeOrKeepAlive = req.headers.upgrade && req.headers.connection.match(/\bupgrade\b/i)

    if (isWebsocket && isUpgradeOrKeepAlive) {
        wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onConnect)
    } else {
        res.end()
    }
}

function onConnect(ws) {
    ws.on('message', message => {
        ws.send(message);
        console.log(message)

        // setTimeout(() => ws.close(1000, "Bye!"), 5000)
    })
}

if (!module.parent) {
    http.createServer(accept).listen(8080)
} else {
    exports.accept = accept
}