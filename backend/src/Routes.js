const express = require('express');
const ControllerRegister = require('./controllers/ControllerRegister');
const ControllerProduct = require('./controllers/ControllerProducts');
const ControllerCategory = require('./controllers/ControllerCategory');
const ControllerLevel  = require('./controllers/ControllerLevel');
const ControllerSession = require('./controllers/ControllerSession');
const Rota = express.Router();

//Rotas do tipo POST

Rota.post('/register', ControllerRegister.cadastrarUser);
Rota.post('/product/register', ControllerProduct.cadastrarProduto);
Rota.post('/product/excluir', ControllerProduct.removerProduto);
Rota.post('/category/register', ControllerCategory.cadastrarCategoria)
Rota.post('/level/register', ControllerLevel.cadastrarLevel)
Rota.post('/session', ControllerSession.session);
//Rotas do tipo GET

Rota.get('/product/listar', ControllerProduct.listarProduto);
Rota.get('/category/listar', ControllerCategory.listarCategoria);
module.exports = Rota;