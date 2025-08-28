import express from 'express';
import {createServer} from 'node:https';
import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';
import {Server} from "socket.io";

// HTTPS
const fs = require('node:fs');

const app = express();

// HTTPS
const serverSsl = createServer(app);

// Client
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    },
    path: "/my-custom-path/"
});

// HTTPS
const options = {
    key: fs.readFileSync('caminho/para/sua/chave-privada.key'),
    cert: fs.readFileSync('caminho/para/seu/certificado.crt')
};

// HTTPS
serverSsl.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('Olá, Mundo Seguro!');
}).listen(443, () => {
    console.log('Servidor HTTPS rodando na porta 443.');
});

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
    console.log('User connected');
})

server.listen(3000, () => console.log('Server is running on port 3000'));
