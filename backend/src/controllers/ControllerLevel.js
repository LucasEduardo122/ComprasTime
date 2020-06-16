const connection = require('../database/connection');

module.exports = {
    async cadastrarLevel(request, response) {
        const { nome } = request.body

        await connection('level').insert({
            nome
        })

        return response.json({sucesso: 'Level cadastrado com sucesso'})
    }
}