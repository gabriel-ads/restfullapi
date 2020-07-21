const service = require('../services/orders')
const handleError = require('./handleError')

const getAll = async (req, res) => {
    try {
        const orders = await service.getAll()
        res.json(orders)
    } catch (error) {
        handleError(res, error)
    }
}

const getById = (req, res) => {
    service.getById(req.params.id).then((order) => res.json(order)).catch((error) => handleError(res, error))
}

const create = async (req, res) => {
    try {
        const order = req.body
        if (!order.quantity || !order.product_id) {
            throw { status: 400, message: 'Invalid data' }
        }
        const created = await service.create(order)
        res.status(201).json(created)
    } catch (error) {
        handleError(res, error)
    }
}
const update = async (req, res) => {
    try {
        const updated = await service.update(req.params.id, req.body)
        res.json(updated)
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
}