const connection = require('../database/connection');

module.exports = {
    async cadastrarCategoria(request, response) {
        const { nome } = request.body;

        await connection('category').insert({
            nome
        })

        return response.json({sucesso: 'Categoria cadastrada com sucesso'})
    },
    async listarCategoria(request, response) {
        const dados = await connection('category')
        .select('*')

        return response.json(dados);
    }   
}