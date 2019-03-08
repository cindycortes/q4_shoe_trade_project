
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shoes', table => {
      table.increments();
      table.text('image_url');
      table.text('colors');
      table.string('brand');
      table.integer('msrp');
      table.text('name');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shoes')
};
