const { Router } = require('express')
const router = new Router()
const controller = require('../controllers/products')
const authenticate = require('./middlewares/authenticate')
const routeName = '/products'

//Lista todos os Produtos
router.get(routeName, controller.getAll)

//Pega os dados de um produto
router.get(`${routeName}/:id`, controller.getById)

//Cria um produto
router.post(routeName, authenticate, controller.create)

//Edita os dados de um Produto
router.patch(`${routeName}/:id`, controller.update)


//Deleta os dados de um Produto
router.delete(`${routeName}/:id`, controller.del)

module.exports = router;