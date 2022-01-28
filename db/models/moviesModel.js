const { Model, DataTypes, Sequelize } = require('sequelize');
const { GENDER_TABLE } = require('./gendersModel');
const { CHARACTER_TABLE } = require('./charactersModel');


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
    genderId: {
        field: 'gender_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: GENDER_TABLE,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    characterId: {
        field: 'character_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: CHARACTER_TABLE,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
};

class Movie extends Model {
    static associate(models) {
        this.belongsTo(models.Gender, { as: 'gender' });
        this.belongsTo(models.Character, { as: 'character' });
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
