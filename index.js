import express from 'express';
//import {createServer} from 'node:https';
import {createServer} from 'node:http';
import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';

// HTTPS
//const fs = require('node:fs');

const app = express();
const server = createServer(app);

// HTTPS
//const serverSsl = createServer(app);

// HTTPS
// const options = {
//     key: fs.readFileSync('caminho/para/sua/chave-privada.key'),
//     cert: fs.readFileSync('caminho/para/seu/certificado.crt')
// };

// HTTPS
// serverSsl.createServer(options, (req, res) => {
//     res.writeHead(200);
//     res.end('Olá, Mundo Seguro!');
// }).listen(443, () => {
//     console.log('Servidor HTTPS rodando na porta 443.');
// });

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

server.listen(3000, () => console.log('Server is running on port 3000'));
