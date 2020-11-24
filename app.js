const express = require('express');
const app = express();
const morgan = require('morgan');

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

app.use(morgan('dev'));

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

/*

app.use('/teste', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'OK, deu certo.'
    });
});

*/

module.exports = app;