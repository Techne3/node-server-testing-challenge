
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dogs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dogs').insert([
        {breed: 'Husky'},
        {breed: 'Bull-dog'},
        {breed: 'Beagle'},
        {breed: 'Chow Chow'},
        {breed: 'Pit bull'},
        {breed: 'Great Dane'},
      ]);
    });
};
