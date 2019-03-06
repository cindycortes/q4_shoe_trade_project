
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shoes', table => {
      table.increments();
      table.string('type');
      table.string('color');
      table.string('brand');
      table.integer('msrp');
      table.string('name');
      
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shoes')
};
