
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shoes', table => {
      table.increments();
      table.string('type');
      table.string('color');
      table.string('brand');
      table.decimal('msrp');
      table.string('name');
      table.string('gender');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shoes')
};
