const connection = require('../database/connection');

module.exports = {
    async cadastrarUser(request, response) {
        const {nome, email, senha, telefone} = request.body;
        const level_id = 2;

        await connection('users').insert({
            nome, 
            email, 
            senha, 
            telefone,
            level_id
        })

        return response.json({sucess: 'Cadastrado com sucesso'})
    }
    
}