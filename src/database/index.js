const Sequelize = require('sequelize')
const dbConfig = require('../config/database');
const Produtos = require('../model/produtos');

const connection = new Sequelize(dbConfig)


Produtos.init(connection);

module.exports = connection;