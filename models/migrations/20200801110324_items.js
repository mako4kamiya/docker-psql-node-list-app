
exports.up = function(knex) {
    return knex.schema.createTable('items', function (table) {
        table.increments('id');
        table.string('name', 100).notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("items");
};
