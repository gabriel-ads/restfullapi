const { table } = require("../database");

const tableName = 'users'
const columnName = 'salt'

exports.up = function (knex) {
    return knex.schema.table(tableName, (table) => {
        table.string(columnName)
    })
};

exports.down = function (knex) {
    return knex.schema.table(tableName, table => {
        tableName.dropColumn(columnName)
    })
};
