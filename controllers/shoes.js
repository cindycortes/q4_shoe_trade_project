const knex = require('../db/knex')

module.exports = {

    getAllShoes(req, res) {
        knex('shoes')
            .then(shoe => res.json(shoe))
    },


    getUserCollection(req, res) {
        knex('user_shoes')
            .where('id', req.params.id)
            .then(userShoes => res.json(userShoes))
    },


    addShoe(req, res) {
        knex('shoes')
            .insert(req.body)
            .returning('*')
            .then(newShoe => res.json(newShoe))
    },


    shoeForSale(req, res) {
        knex('user_shoes') // or shoes table?
            .where('id', req.params.id)
            .update(req.body)
            .returning('*')
            .then(updatedShoeSale => res.json(updatedShoeSale))
    },

    purchase(req, res) {
        knex('shoes')
            .where('id', req.params.id)
            .update(req.body)
            .returning('*')
            .then(shoePurchased => res.json(shoePurchased))
    },

    delete(req, res) {
        knex('user_shoes')
            .where('id', req.params.id)
            .del()
            .returning('*')
            .then(deleteShoes => res.json(deleteShoes))
    }
}