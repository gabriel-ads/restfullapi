const { Router } = require('express')
const router = new Router()
const routeName = '/products'

//Lista todos os Produtos
router.get(routeName, (req, res)=>{
    res.json([{message: "Vai retornar todos os produtos"}])
})

//Pega os dados de um produto
router.get(`${routeName}/:id`, (req, res)=>{
    res.json({
        message: "Vai retornar os dados de um Produto dado um id",
        id: req.params.id
    })
})

//Cria um produto
router.post(routeName, (req, res)=>{
    // const teste = req.body
const product ={
    name: req.body.name,
    price: req.body.price
}

    res.status(201).json({
        message: "Vai criar um produto",
        createdProduct: product
    })
})

//Edita os dados de um Produto
router.patch(`${routeName}/:id`, (req, res)=>{
    res.json({
        message: "Vai editar os dados de um Produto dado um id",
        id: req.params.id
    })
})

//Deleta os dados de um Produto
router.delete(`${routeName}/:id`, (req, res)=>{
    res.status(204).end()
})

module.exports = router;