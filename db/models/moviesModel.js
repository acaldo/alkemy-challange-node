const { Model, DataTypes, Sequelize } = require('sequelize');
const { GENRE_TABLE } = require('./genresModel');



const MOVIE_TABLE = 'movie';

const MovieSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    creation: {
        allowNull: false,
        type: DataTypes.DATE,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
    },
    genre: {
        field: 'genre_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: GENRE_TABLE,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
};

class Movie extends Model {
    static associate(models) {
        this.belongsTo(models.Genre, { as: 'genres' });
        this.hasMany(models.Character, {
            as: 'character',
            foreignKey: 'movieId',
        });
        
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: MOVIE_TABLE,
            modelName: 'Movie',
            timestamps: false,
        };
    }
}

module.exports = { MOVIE_TABLE, MovieSchema, Movie };
