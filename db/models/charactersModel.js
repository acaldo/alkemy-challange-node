const { Model, DataTypes, Sequelize } = require('sequelize');


const CHARACTER_TABLE = 'character';

const CharacterSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
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
};

class Character extends Model {
    static associate(models) {
        this.hasMany(models.Movie, {
            as: 'movie',
            foreignKey: 'movieId',
        });
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
