const { Character, CharacterSchema } = require('./charactersModel');
const { Movie, MovieSchema } = require('./moviesModel');
const { Gender, GenderSchema } = require('./gendersModel');

function setupModels(sequelize) {
  Character.init(CharacterSchema, Character.config(sequelize));
  Movie.init(MovieSchema, Movie.config(sequelize));
  Gender.init(GenderSchema, Gender.config(sequelize));

  //User.associate(sequelize.models);
  Character.associate(sequelize.models);
  Movie.associate(sequelize.models);
  Gender.associate(sequelize.models);
}

module.exports = setupModels;