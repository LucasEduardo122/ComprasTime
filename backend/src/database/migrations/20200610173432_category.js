
exports.up = function (knex) {
    return knex.schema.createTable('category', function (category) {
        category.increments();
        category.string('nome');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('category');
};
