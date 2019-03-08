
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_shoes', table => {
      table.increments();
      table.integer('user_id')
      table.integer('shoe_id')
      table.integer('shoe_size')
      table.boolean('isSelling')
      table.integer('price')
      table.integer('purchased_price')
      table.integer('purchased_date')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_shoes')
};
