
exports.up = function (knex) {
    return knex.schema.createTable('users', function (usuario) {

        usuario.increments();
        usuario.string('nome')
        usuario.string('email')
        usuario.string('senha')
        usuario.string('telefone')
        usuario.integer('level_id')
        usuario.foreign('level_id').references('level.id')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('users');
};
