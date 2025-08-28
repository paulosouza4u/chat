import express from 'express';
import {createServer} from 'node:http';
import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';
import {Server} from "socket.io";

const app = express();
const server = createServer(app);

// Socker io
const io = new Server(server);

// Index html
const __dirname = dirname(fileURLToPath(import.meta.url));

// Rota express
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

// Socket io
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
    })
})

server.listen(3000, () => console.log('Server is running on port 3000'));
