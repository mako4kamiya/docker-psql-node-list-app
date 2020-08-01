const knex = require('../knex');

exports.getItems = () => knex.from('items').select("*")