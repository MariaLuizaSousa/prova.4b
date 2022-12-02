const express = require('express')
const ProdutosController = require('./controller/ProdutosController');

const routes = express.Router();

routes.get('/', (req, res) => {
 res.send('Socorro')
})

routes.get('/produtos', ProdutosController.index)
routes.get('/produtos/: id', ProdutosController.findstoreByid)
routes.post('/produtos', ProdutosController.store)
routes.delete('/produtos/: id', ProdutosController.delete)
routes.put('/produtos', ProdutosController.update)

module.exports = routes; 