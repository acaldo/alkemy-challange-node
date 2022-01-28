const { Character, CharacterSchema } = require('./charactersModel');
const { Movie, MovieSchema } = require('./moviesModel');
const { Gender, GenderSchema } = require('./gendersModel');
const { User, UserSchema } = require('./usersModel');

function setupModels(sequelize) {
  Character.init(CharacterSchema, Character.config(sequelize));
  User.init(UserSchema, User.config(sequelize));
  Gender.init(GenderSchema, Gender.config(sequelize));
  Movie.init(MovieSchema, Movie.config(sequelize));

  Character.associate(sequelize.models);
  Gender.associate(sequelize.models);
  Movie.associate(sequelize.models);
}

module.exports = setupModels;