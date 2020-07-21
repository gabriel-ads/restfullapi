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
router.patch(`${routeName}/:id`, (req, res)=>{
    res.json({
        message: "Vai editar os dados de um pedidos dado um id",
        id: req.params.id
    })
})

//Deleta os dados de um pedidos
router.delete(`${routeName}/:id`, (req, res)=>{
    res.status(204).end()
})

module.exports = router;