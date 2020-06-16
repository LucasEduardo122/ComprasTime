
exports.up = function (knex) {
    return knex.schema.createTable('product', function (product) {
        product.increments();
        product.string('nome');
        product.string('descricao');
        product.string('valor');
        product.string('imagem');
        product.integer('categoria_id')
        product.integer('usuario_id')
        product.foreign('usuario_id').references('users.id')
        product.foreign('categoria_id').references('category.id')
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('product');
};
