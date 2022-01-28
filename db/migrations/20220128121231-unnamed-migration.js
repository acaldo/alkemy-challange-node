'use strict';

const { UserSchema, USER_TABLE } = require('./../models/usersModel');
const { CharacterSchema, CHARACTER_TABLE } = require('./../models/charactersModel');
const { MovieSchema, MOVIE_TABLE } = require('./../models/moviesModel');
const { GenreSchema, GENRE_TABLE,  } = require('./../models/genresModel');


module.exports = {
  async up (queryInterface ) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(GENRE_TABLE, GenreSchema);
    await queryInterface.createTable(MOVIE_TABLE, MovieSchema);
    await queryInterface.createTable(CHARACTER_TABLE, CharacterSchema);
  },

  async down (queryInterface ) {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(CHARACTER_TABLE);
    await queryInterface.dropTable(MOVIE_TABLE);
    await queryInterface.dropTable(GENRE_TABLE);
  }
};
