const knex = require('../knex');

exports.getItems = () => knex.from('items').select("*")
exports.createItems = () => knex.from('items').select("*")
exports.createItems = (itemName) => knex("items").insert({name: itemName})
exports.deleteItems = (itemId) => knex("items").where('id', itemId).del()
exports.getThisItem = (itemId) => knex.from('items').where('id', itemId).select("*")
exports.updateItem = (itemId,itemName) => knex("items").where('id', itemId).update({name: itemName})
