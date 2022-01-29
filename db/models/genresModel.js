const { Model, DataTypes, Sequelize } = require('sequelize');

const GENRE_TABLE = 'genre';

const GenreSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
    },
    image: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
    },
};


class Genre extends Model {
    static associate(models) {
        this.belongsToMany(models.Movie, {
            as: 'genreMovie',
            through: models.MovieGenre,
            foreignKey: 'genreId',
            otherKey: 'movieId'
        })
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: GENRE_TABLE,
            modelName: 'Genre',
            timestamps: false,
        };
    }
}

module.exports = { GENRE_TABLE, GenreSchema, Genre };
