const { Model, DataTypes, Sequelize } = require('sequelize');

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
        type: DataTypes.DATEONLY,
    },
    qualification: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
    },
};

class Movie extends Model {
    static associate(models) {
        this.hasMany(models.Character, {
            as: 'character',
            foreignKey: 'movieId',
        });
        this.belongsToMany(models.Genre, {
            as: 'genreMovie',
            through: models.MovieGenre,
            foreignKey: 'movieId',
            otherKey: 'genreId'
        })

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
