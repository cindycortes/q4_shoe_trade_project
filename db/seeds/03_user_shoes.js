const makeTransactions = require('../../dataEntries/user_shoes-generator')

exports.seed = function(knex, Promise) {
  let transactions = makeTransactions(1000000)
  console.log(transactions[1]);
  // Deletes ALL existing entries
  return knex('user_shoes').del()
    .then(function () {
      console.log('seeding ownership...')
      // Inserts seed entries
      return knex.batchInsert('user_shoes',transactions);
    });
};
