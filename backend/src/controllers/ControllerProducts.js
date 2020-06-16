const connection = require('../database/connection');

module.exports = {
    async cadastrarProduto(request, response) {
        const {nome, descricao, valor, imagem, categoria_id, usuario_id} = request.body;

        await connection('product').insert({
            nome,
            descricao,
            valor,
            imagem,
            categoria_id,
            usuario_id
        })
        
        return response.json({sucess: 'Produto cadastrado com sucesso'})
    },

    async listarProduto(request, response) {
        const resposta = await connection('product')
        .join('category', 'category.id', '=', 'product.categoria_id')
        .join('users', 'users.id', '=' , 'product.usuario_id' )
        .select('product.*',
        'category.nome as categoria',
        'users.nome as usuario'
        )

        return response.json(resposta);
    },

    async removerProduto(request, response){

        const {id} = request.body;
        

        await connection('product')
        .where('id', id)
        .delete('*');


        return response.json({sucess: "Produto Removido"});
    }
}