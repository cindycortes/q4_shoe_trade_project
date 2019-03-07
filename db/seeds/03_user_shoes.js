const makeTransactions = require('../../dataEntries/user_shoes-generator')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_shoes').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_shoes').insert([
        makeTransactions() 
      ]);
    });
};
