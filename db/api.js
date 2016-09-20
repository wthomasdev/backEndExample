var knex = require('./knex');

module.exports = {
  getScores: function () {
    return knex('players').select().orderBy('score','desc');
  }
}
