const { Model, DataTypes, Sequelize } = require('sequelize');
const { GENRE_TABLE } = require('./genresModel');
const { MOVIE_TABLE } = require('./moviesModel');

const MOVIE_GENRE_TABLE = 'movies_genres';


const MovieGenreSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
    },
    movieId: {
        field: 'movie_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: MOVIE_TABLE,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    genreId: {
        field: 'genre_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: GENRE_TABLE,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    }
};

class MovieGenre extends Model {
    static associate(models) {


    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: MOVIE_GENRE_TABLE,
            modelName: 'MovieGenre',
            timestamps: false,
        };
    }
}

module.exports = { MOVIE_GENRE_TABLE, MovieGenreSchema, MovieGenre };
