const { Model, DataTypes, Sequelize } = require('sequelize');
const GENDER_TABLE = 'gender';

const GenderSchema = {
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

class Gender extends Model {
    static associate(models) {
        this.hasMany(models.Movie, {
            as: 'movie',
            foreignKey: 'movieId',
        });
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: GENDER_TABLE,
            modelName: 'Gender',
            timestamps: false,
        };
    }
}

module.exports = { GENDER_TABLE, GenderSchema, Gender };
