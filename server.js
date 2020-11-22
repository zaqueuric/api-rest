// Variaveis
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000; // Caso a variavel não estiver preenchida ela pega a 3000
const server = http.createServer(app);

server.listen(port);
