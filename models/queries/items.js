const knex = require('../knex');

exports.getItems = () => knex.select().from('items').orderBy('id', 'ASC')
exports.createItems = (itemName) => knex("items").insert({name: itemName})
exports.deleteItems = (itemId) => knex("items").where('id', itemId).del()
exports.getThisItem = (itemId) => knex.select().from('items').where('id', itemId)
exports.updateItem = (itemId,itemName) => knex("items").where('id', itemId).update({name: itemName})
