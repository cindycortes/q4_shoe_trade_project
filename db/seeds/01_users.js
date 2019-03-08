const createUsers = require('../../dataEntries/users-generator.js')

exports.seed = function(knex, Promise) {
  let users = createUsers()
  console.log(users[0])
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      console.log('seeding users...')
      // Inserts seed entries
      return knex.batchInsert('users', users)
      console.log('users seeded');
    });
};
