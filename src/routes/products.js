const { Router } = require('express')
const router = new Router()
const knex = require('../database')
const routeName = '/products'
const tableName = 'products'

//Lista todos os Produtos
router.get(routeName, (req, res) => {
    knex(tableName).then(result => res.json(result))
})

//Pega os dados de um produto
router.get(`${routeName}/:id`, (req, res) => {
    knex(tableName)
        .where({ id: req.params.id })
        .then(([found]) => res.json(found))
})

//Cria um produto
router.post(routeName, (req, res) => {
    knex(tableName)
        .insert({ name: req.body.name, price: req.body.price })
        .then(([inserted]) => res.status(201).json(inserted))
})

//Edita os dados de um Produto
router.patch(`${routeName}/:id`, async (req, res) => {
    try {
        const [found] = await knex(tableName).where({ id: req.params.id })
        if (!found) {
            const err = Error('Not Found')
            err.status = 404
            throw err
        }

        const updated = await knex(tableName)
            .where({ id: req.params.id })
            .update(req.body)
        res.json(updated)

    } catch (err) {
        res.status(err.status(res.status || 500).json({ message: err.message }))
    }

})


//Deleta os dados de um Produto
router.delete(`${routeName}/:id`, (req, res) => {
    knex(tableName)
        .where({ id: req.params.id })
        .del()
        .then(() => res.status(204).end())

})

module.exports = router;