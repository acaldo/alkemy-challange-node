const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');
class CharactersService {
    constructor() { }

    async create(data) {
        const newCharacter = await models.Character.create(data);
        return newCharacter;
    }

    async find(query) {
        const options = {
            attributes: ['name','image'],
            include: [],
            where: {}
        }

        const { name, age, movieId } = query
        if (name) {
            options.where.name = name
            options.include = 'movie'
            options.attributes = ['id', 'name', 'image', 'age', 'weight', 'history', 'movieId']
        }
        if (age) {
            options.where.age = age
            options.include = 'movie'
            options.attributes = ['id', 'name', 'image', 'age', 'weight', 'history', 'movieId']
        }
        if (movieId) {
            options.where.movieId = movieId
            options.include = 'movie'
            options.attributes = ['id', 'name', 'image', 'age', 'weight', 'history', 'movieId']
        }

        const rta = await models.Character.findAll(options);
        return rta;
    }

    async findOne(id) {
        const character = await models.Character.findByPk(id, {
            include: ['movie'],
        });
        if (!character) {
            throw boom.notFound('character not found');
        }
        return character;
    }

    async update(id, changes) {
        const character = await this.findOne(id);
        if (!character) {
            throw boom.notFound('character not found');
        }
        const rta = await character.update(changes);
        return rta;
    }

    async delete(id) {
        const character = await this.findOne(id);
        if (!character) {
            throw boom.notFound('character not found');
        }
        await character.destroy();
        return { id };
    }
}

module.exports = CharactersService;
