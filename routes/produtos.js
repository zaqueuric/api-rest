const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota de produtos.',
    });
});

router.post('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: "Usando o POST dentro da rota de produtos.",
    });
});

// Passando parametro na rota
router.get('/:id_produto', (req, res, next) =>{
    const id = req.params.id_produto;

    if (id  === 'teste'){
        res.status(200).send({
            mensagem: "Você descobriu o ID especial.",
            id: id,
        });
    } else {
        res.status(200).send({
            mensagem: "Você passou um ID desconhecido.",
            id: id,
        });
    }
});

module.exports = router;