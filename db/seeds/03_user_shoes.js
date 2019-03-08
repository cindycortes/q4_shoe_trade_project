const makeTransactions = require('../../dataEntries/user_shoes-generator')

exports.seed = function(knex, Promise) {
  let transactions = makeTransactions()
  // Deletes ALL existing entries
  return knex('user_shoes').del()
    .then(function () {
      console.log('seeding ownership...')
      // Inserts seed entries
      return knex('user_shoes').insert(transactions);
    });
};
