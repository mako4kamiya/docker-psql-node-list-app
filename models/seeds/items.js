exports.seed = function(knex) {
    return knex('items').del().then(function () {
        return knex('items').insert([
            {name: 'じゃがいも'},
            {name: 'にんじん'},
            {name: 'たまねぎ'},
        ]);
    });
};
