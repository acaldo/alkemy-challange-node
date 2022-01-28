const { Character, CharacterSchema } = require('./charactersModel');
const { Movie, MovieSchema } = require('./moviesModel');
const { Genre, GenreSchema } = require('./genresModel');
const { User, UserSchema } = require('./usersModel');

function setupModels(sequelize) {
  Character.init(CharacterSchema, Character.config(sequelize));
  User.init(UserSchema, User.config(sequelize));
  Genre.init(GenreSchema, Genre.config(sequelize));
  Movie.init(MovieSchema, Movie.config(sequelize));

  Character.associate(sequelize.models);
  Genre.associate(sequelize.models);
  Movie.associate(sequelize.models);
}

module.exports = setupModels;