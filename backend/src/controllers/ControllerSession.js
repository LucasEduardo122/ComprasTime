const connection = require('../database/connection')

module.exports = {
    async session(request, response) {
        const {email, senha} = request.body;
        const resposta = await connection('users')
        .where({'email': email , 'senha':senha})
        .select('*')
        .first()

        return response.json(resposta)
    }
}