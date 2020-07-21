const knex = require('../../database')
const Order = require('../models/Order')
const tableName = 'orders'

const getAll = async () => {
    const orders = await knex(tableName)
    return orders.map((order) => new Order(order))
}

const getById = async (id) => {
    const [order] = await knex(tableName).where({ id: id })
    return new Order(order)
}

const create = async (order) => {
    const [id] = await knex(tableName).insert(order)
    return id
}
const update = (id, order) => knex(tableName).where({id:id}).update(order)

module.exports = {
    getAll,
    getById,
    create,
    update,
}