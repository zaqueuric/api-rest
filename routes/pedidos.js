const express = require('express');
const router = express.Router();

// RETORNA TODOS OS PEDIDOS
router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Retorna todos os pedidos.',
    });
});

// INSERE UM PEDIDO
router.post('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: "O pedido foi criado.",
    });
});

// RETORNA OS DADOS DE UM PEDIDO
    // Passando parametro na rota
router.get('/:id_pedido', (req, res, next) =>{
    const id = req.params.id_pedido;

    res.status(200).send({
        mensagem: "Detalhes do pedido.",
        id: id,
    });
});

// EXCLUI UM PEDIDO
router.delete('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: "Pedido escolhido.",
    });
});

module.exports = router;