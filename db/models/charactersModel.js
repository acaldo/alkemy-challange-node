const { Model, DataTypes, Sequelize } = require('sequelize');
const { MOVIE_TABLE } = require('./moviesModel');


const CHARACTER_TABLE = 'character';

const CharacterSchema = {
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
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    weight: {
        allowNull: false,
        type: DataTypes.FLOAT
    },
    history: {
        allowNull: false,
        type: DataTypes.STRING
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
};


class Character extends Model {
    static associate(models) {
        this.belongsTo(models.Movie, { as: 'movie' });
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: CHARACTER_TABLE,
            modelName: 'Character',
            timestamps: false,
        };
    }
}

module.exports = { CHARACTER_TABLE, CharacterSchema, Character };
