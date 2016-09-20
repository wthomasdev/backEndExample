
exports.up = function(knex, Promise) {
  return knex.schema.createTable('players', function(table) {
    table.increments();
    table.string('username');
    table.integer('score');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('players');
};
