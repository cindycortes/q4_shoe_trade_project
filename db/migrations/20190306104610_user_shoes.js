
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_shoes', table => {
      table.increments();
      table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .index();
      table.integer('shoe_id')
        .notNullable()
        .references('id')
        .inTable('shoes')
        .onDelete('CASCADE')
        .index(); 
      table.integer('shoe_size')
        .notNullable()
        .references('shoe_size')
        .inTable('users')
        .onDelete('CASCADE')
        .index();  
      table.boolean('isSelling')
      table.integer('price')
      table.integer('purchased_price')
      table.integer('purchased_date')     
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_shoes')
};
