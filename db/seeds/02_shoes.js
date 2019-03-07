const smallData = require('../../dataEntries/shoeTypes')


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shoes').del()
    .then(function () {
      // Inserts seed entries
      return knex('shoes').insert([
        { smallData }
      ]);
    });
};
