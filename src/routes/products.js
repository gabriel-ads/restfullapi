const { Router } = require('express')
const router = new Router()
const knex = require('../../database')
const controller = require('../controllers/products')
const routeName = '/products'
const tableName = 'products'

//Lista todos os Produtos
router.get(routeName, controller.getAll)

//Pega os dados de um produto
router.get(`${routeName}/:id`, controller.getById)

//Cria um produto
router.post(routeName, controller.create)

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
router.delete(`${routeName}/:id`, controller.del)

module.exports = router;