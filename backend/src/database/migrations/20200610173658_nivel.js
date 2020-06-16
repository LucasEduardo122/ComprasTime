
exports.up = function (knex) {
    return knex.schema.createTable('level', function (level) {
        level.increments()
        level.string('nome')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('level')
};
