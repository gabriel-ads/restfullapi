const { Router } = require('express')
const router = new Router()
const controller = require('../controllers/orders')
const routeName = '/orders'

//Lista todos os pedidoss
router.get(routeName, controller.getAll)

//Pega os dados de um pedidos
router.get(`${routeName}/:id`, controller.getById)

//Cria um pedido
router.post(routeName, controller.create)

//Edita os dados de um pedidos
router.patch(`${routeName}/:id`, controller.update)

//Deleta os dados de um pedidos
router.delete(`${routeName}/:id`, (req, res)=>{
    res.status(204).end()
})

module.exports = router;