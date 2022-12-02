const { update } = require('../model/produtos');
const produtos = require('../model/produtos')

module.exports = {
    async index(req, res) {
        const produtos = await Produtos.findAll();
        return res.json(produtos);
    },
    async findByid(req, res) {
        const {id} = req.params;
        const produtos = await Produtos.findAll({
            where: {
                id: id
            }
        });
        return res.json(produtos);
    },
    async findstoreByid(req, res) {
        const {id} = req.params;
        const produtos = await Produtos.findAll({
            where: {
                id: id
            }
        });
        return res.json(produtos);
    },  

    async store (req, res) {
        const { nome, email} = req.body;
        const produtos = await Produtos.create({
            nome, email
        });
        return res.json(produtos);
    },
    async delete(req, res) {
        const {id} = req.params;
        const produtos = await Produtos.destroy({
            where: {
                id: id
            }
        });
        return res.json(produtos);
},
async update (req, res) {
    const { id, nome, email} = req.body;
    const produtos = await Produtos.update({
        nome, email
    }, { where: {
            id: id 
         }
    });
    return res.json(produtos)
},
}