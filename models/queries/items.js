const knex = require('../knex');

exports.getItems = () => knex.from('items').select("*")
exports.createItems = () => knex.from('items').select("*")
exports.createItems = (itemName) => knex("items").insert({name: itemName})
exports.deleteItems = (itemId) => knex("items").where('id', itemId).del()