const { Router } = require('express')
const router = new Router()
const controller = require('../controllers/users')
const routeName = '/users'

router.post(routeName, controller.create)

router.post(`${routeName}/login`, controller.login)

const getById = async id => {
    const user = await repository.getOne({id:id})
    if(!user.id){
        throw {status: 404, message: "Not Found"}
    }
    return user
}

module.exports = router;