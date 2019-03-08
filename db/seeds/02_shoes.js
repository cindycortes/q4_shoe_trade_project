const smallData = require('../../dataEntries/shoeTypes')


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shoes').del()
    .then(function () {
      console.log('seeding shoes...')
      // Inserts seed entries
      return knex('shoes').insert(smallData)
    });
};
