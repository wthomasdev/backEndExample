
exports.seed = function(knex, Promise) {
      return Promise.all([
        // Inserts seed entries
        knex('players').insert({
          username: 'Will',
          score:9000
        }),
        knex('players').insert({
          username:'Steven',
          score:10
        }),
        knex('players').insert({
          username:'Daniel',
          score:15
        })
      ]);
};
