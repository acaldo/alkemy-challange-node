'use strict';

//const { UserSchema, USER_TABLE } = require('./../models/usersModel');
//const { CharacterSchema, CHARACTER_TABLE } = require('./../models/charactersModel');
//const { MovieSchema, MOVIE_TABLE } = require('./../models/moviesModel');
const { GenderSchema, GENDER_TABLE,  } = require('./../models/gendersModel');


module.exports = {
  async up (queryInterface ) {
    await queryInterface.createTable(GENDER_TABLE, GenderSchema);
  },

  async down (queryInterface ) {
    await queryInterface.dropTable(GENDER_TABLE);

  }
};
