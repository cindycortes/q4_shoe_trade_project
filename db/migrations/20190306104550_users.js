
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
      table.increments('id');
      table.string('name');
      table.string('email');
      table.integer('shoe_size');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
